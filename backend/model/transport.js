
import mongoose, {Schema} from "mongoose";

const transportSchema = new Schema(
    {
      userId : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "user",
      },
      deliveryProvince: {
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
const Transport = mongoose.models.User || mongoose.model("transportRegister", transportSchema);
export default Transport;