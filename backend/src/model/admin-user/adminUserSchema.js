import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    status: { type: String, default: "inactive" },
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
      maxLength: [20, "First Name can't be more than 20 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
      maxLength: [20, "Last Name can't be more than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: true,
      index: 1,
      maxLength: [20, "Email Address can't be more than 20 characters"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Password must be at least 6 characters long"],
    },
    address: {
      type: String,
      maxLength: [20, "Address can't be more than 20 characters'"],
      default: "n/a",
    },
    dob: {
      type: Date,
      default: "n/a",
    },
    emailValidateCode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("admin_user", adminUserSchema);
