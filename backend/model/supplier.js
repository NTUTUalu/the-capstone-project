
import mongoose, {Schema} from "mongoose";


//rename the models and file names to not use verbs or action verbs
//even schemas
//models should be singular, product instead of products

const supplierSchema = new Schema(
    {
      businessName: {
        type: String,
        required: true,
      },
      mobileNumber: {
        type: String,
        required: true,
      },
      products: {
        type: [String],
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
      location: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  

//the statement below says that 
//mongoose.model("becomeSupplier",,,, the become supplier can be a verb and is used by mongo db
const Supplier = mongoose.models.User || mongoose.model("becomeSupplier", supplierSchema);
export default Supplier;