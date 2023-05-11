import User from "../model/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

export const users = async (req, res, next) => {
  try {
    const isEmail = await User.findOne({ email: req.body.email });

    if (isEmail) return res.status(202).json("User already exist");
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(req.body.password, salt);

    console.log(req.body);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: password,
      roleId: req.body.roleId,
    });

    const userSave = await user.save();
    res.status(200).json(userSave);
  } catch (err) {
    next(err);
  }
};

// login process
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name }).populate("roleId");

    if (!user) return next(createError(304, " user not Found"));
    console.log(req.body.password === user.password);
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(450, "password or user incorrect"));

    const token = await jwt.sign(
      { id: user._id, role: user.role },
      process.env.TOKEN
    );
    const { password, roleId, ...otherDatail } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ otherDatail, roleId });
  } catch (err) {
    next(err);
  }
};
