import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  sku: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  saleprice: {
    type: Number,
    required: true,
  },
  purchaseprice: {
    type: Number,
    required: true,
  },
  tex: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
