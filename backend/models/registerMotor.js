
import mongoose, {Schema} from "mongoose";

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
const Transport = mongoose.models.User || mongoose.model("transportRegister", registerTransportSchema);
export default Transport;