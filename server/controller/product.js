import Product from "../model/product.js";

export const createProduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const createproduct = new Product(req.body);
    const product = await createproduct.save();
    res.status(200).json(product);
    console.log("Product create");
  } catch (err) {
    next(err);
  }
};
