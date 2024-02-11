import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

//the statement below says that
const User = mongoose.model("user", userSchema);
export default User;
// export const User = mongoose.model("userSignup", signupSchema);
