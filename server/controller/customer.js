import Customer from "../model/customer.js";

export const createCutomer = async (req, res, next) => {
  console.log(req.body);
  try {
    const createcustomer = new Customer(req.body);
    const customer = await createcustomer.save();

    res.status(200).json(req.body);
    console.log("Customer created");
  } catch (err) {
    next(err);
  }
};
