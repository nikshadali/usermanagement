import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  billingadd: {
    type: String,
    required: true,
  },
  shippingadd: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Cutomer", customerSchema);
