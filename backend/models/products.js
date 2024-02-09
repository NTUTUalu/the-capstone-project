
import mongoose, {Schema} from "mongoose";


const productsSchema = new Schema(
    {
      category: {
        type: String,
        required: true,
      },
      imageURL: {
        type: String,
        required: true,
      },
      productTitle: {
        type: String,
        required: true,
      },
      itemCost: {
        type: String,
        required: true,
      },
      
      deliveryTime: {
        type: String,
        required: true,
      },
   
    },
    {
      timestamps: true,
    }
  );
  

//the statement below says that 
const Products = mongoose.models.User || mongoose.model("userSignup", BecomeSupplierSchema);
export default Products;