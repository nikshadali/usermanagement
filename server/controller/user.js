import User from "../model/users.js";
export const getUeser = async (req, res, next) => {
  try {
    const getusers = await User.find().populate("roleId");
    res.json(getusers);
  } catch (err) {
    next(err);
  }
};
