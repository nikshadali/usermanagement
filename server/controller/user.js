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

export const updateUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const updateuser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ message: "Successfuly updated" });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.findById(req.params.id).populate("roleId");
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
