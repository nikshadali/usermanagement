import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  roletitle: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Role", roleSchema);
