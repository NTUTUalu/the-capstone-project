
import mongoose, {Schema} from "mongoose";


const orderSchema = new Schema(
    {
      clientEmail: {
        type: String,
        required: true,
      },
      clientAddress: {
        type: String,
        required: true,
      },
      clientName: {
        type: String,
        required: true,
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "products",
      },    
      totalAmount: {
        type: Number,
        default: 0        
      },
      
      supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "becomeSupplier",
        
      },
      status: {
        type: String,
        default: "pending",
      },
      paymentRef: {
        type: String
        
      }
   
    },
    {
      timestamps: true,
    }
  );
  

//the statement below says that 
const Order = mongoose.model("order", orderSchema);
export default Order;