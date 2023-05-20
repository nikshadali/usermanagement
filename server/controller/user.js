import User from "../model/users.js";
export const getUeser = async (req, res, next) => {
  try {
    const getusers = await User.find().populate("roleId");
    res.json(getusers);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  console.log(req.params);
  try {
    const deleteruser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Delete user Seccussfuly!" });
  } catch (err) {
    next(err);
  }
};
