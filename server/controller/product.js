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

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log(products);
  } catch (err) {
    next(201, err);
    console.log("err product", products);
  }
};
