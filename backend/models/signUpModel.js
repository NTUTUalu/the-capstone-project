import mongoose, {Schema} from "mongoose";

const signupSchema = new Schema(
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

const registerTransportSchema = new Schema(
  {
    names: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    deliveryProvinces: {
      type: String,
      required: true,
    },
    transportType: {
      type: String,
      required: true,
    },
    
    availabilityStatus: {
      type: String,
      required: true,
    },
 
  },
  {
    timestamps: true,
  }
);





//the statement below says that 
 const User = mongoose.models.User || mongoose.model("userSignup", signupSchema);
 export default User;
// export const User = mongoose.model("userSignup", signupSchema);

