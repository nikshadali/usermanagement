import Vendor from "../model/vendor.js";

export const createVendor = async (req, res, next) => {
  console.log(req.body);
  try {
    const createvendor = new Vendor(req.body);
    const vendor = await createvendor.save();

    res.status(200).json(vendor);
    console.log("Vendor created");
  } catch (err) {
    next(err);
  }
};
