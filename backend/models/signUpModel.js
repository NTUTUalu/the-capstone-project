import mongoose from "mongoose";

const signupSchema = mongoose.Schema(
  {
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("userSignup", signupSchema);
