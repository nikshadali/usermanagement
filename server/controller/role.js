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
