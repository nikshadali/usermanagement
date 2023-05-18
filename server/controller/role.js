import Role from "../model/role.js";

export const roleCreate = async (req, res, next) => {
  try {
    const role = new Role({
      roletitle: req.body.role,
    });
    const saveRole = await role.save();
    res.json(saveRole);
  } catch (err) {
    next(err);
  }
};

export const getRoles = async (req, res, next) => {
  try {
    const getroles = await Role.find();
    res.status(200).json(getroles);
  } catch (err) {
    next(err);
  }
};
