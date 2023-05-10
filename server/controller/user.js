import User from "../model/users.js";

export const users = async (req, res) => {
  try {
    const isEmail = await User.findOne({ email: req.body.email });

    if (isEmail) return res.status(202).json("User already exist");
    console.log(req.body);
    const user = new User(req.body);
    const userSave = await user.save();
    res.status(200).json(userSave);
  } catch (err) {
    console.log(err);
  }
};
