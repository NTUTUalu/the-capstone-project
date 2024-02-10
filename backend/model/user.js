import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
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




//the statement below says that 
 const User = mongoose.models.User || mongoose.model("userSignup", userSchema);
 export default User;
// export const User = mongoose.model("userSignup", signupSchema);

