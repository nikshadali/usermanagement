import User from "../model/users.js";
import bcrypt from "bcrypt";
export const users = async (req, res) => {
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
    });
    const userSave = await user.save();
    res.status(200).json(userSave);
  } catch (err) {
    console.log(err);
  }
};
