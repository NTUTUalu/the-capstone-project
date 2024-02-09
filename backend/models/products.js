
import mongoose, {Schema} from "mongoose";


const productsSchema = new Schema(
    {
      category: {
        type: String,
        required: true,
      },
      imageName: {
        type: String,
        required: true,
      },
      productName: {
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
const Products = mongoose.models.User || mongoose.model("products", productsSchema);
export default Products;