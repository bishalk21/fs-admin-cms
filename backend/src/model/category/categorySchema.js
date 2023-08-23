import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", categorySchema);
