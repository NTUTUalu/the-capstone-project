
import mongoose, {Schema} from "mongoose";


const BecomeSupplierSchema = new Schema(
    {
      names: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: String,
        required: true,
      },
      products: {
        type: String,
        required: true,
      },
      bankName: {
        type: String,
        required: true,
      },
      
      accountNumber: {
        type: String,
        required: true,
      },
      accountNumber: {
        type: String,
        required: true,
      },
   
    },
    {
      timestamps: true,
    }
  );
  
  
  

//the statement below says that 
const BecomeSupplier = mongoose.models.User || mongoose.model("userSignup", BecomeSupplierSchema);
export default BecomeSupplier;