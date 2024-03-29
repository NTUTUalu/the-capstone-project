import {BASE_API_URL} from "../../constants"
import toast, { Toaster } from "react-hot-toast";

function OrderComponent({ clientAddress, clientEmail, productName, clientName, totalAmount,orderId, orderStatus, refreshOrders }) {
  const handleAccept = async (e) => {
    e.preventDefault();
    // Handle accept logic
    //comment
    
    try {
      const res = await fetch(`${BASE_API_URL}/orders/update/`+ orderId, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token"),
          },
          body: JSON.stringify({
              status: "processing"
          }),
      });
      refreshOrders()
     
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  const handleDecline = async  (e) => {
    e.preventDefault();
    // Handle decline logic

    try {
      const res = await fetch(`${BASE_API_URL}/orders/update/`+ orderId, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token"),
          },
          body: JSON.stringify({
              status: "declined"
          }),
      });
      refreshOrders()
      toast.success("Order Declined!");
  
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  
  const handleProcessing = async  (e) => {
    e.preventDefault();
    // Handle decline logic

    try {
      const res = await fetch(`${BASE_API_URL}/orders/update/${orderId}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token"),
          },
          body: JSON.stringify({
              status: "shipping"
          }),
      });
      refreshOrders()
    
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  const handleShipping = async  (e) => {
    e.preventDefault();
    // Handle decline logic

    try {
      const res = await fetch(`${BASE_API_URL}/orders/update/`+ orderId, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token"),
          },
          body: JSON.stringify({
              status: "delivered"
          }),
      });
      refreshOrders()

    
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  const handleDelivered = async  (e) => {
    e.preventDefault();
    // Handle decline logic

    try {
      const res = await fetch(`${BASE_API_URL}/orders/update/`+ orderId, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+ localStorage.getItem("token"),
          },
          body: JSON.stringify({
              status: "remove order"
          }),
      });
      refreshOrders()
      toast.success("Order Successful!");
     
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };


  

  return (
    <div className="transition-opacity duration-150 ease-linear" id="tabs-profile03" role="tabpanel" aria-labelledby="tabs-profile-tab03">
      <div className="h-full w-full">
      <Toaster position="top-center" reverseOrder={false} />
        <div className={`${ (orderStatus === "remove order" || orderStatus === "declined") ? 'hidden' : ''} grid grid-cols-1 gap-8 w-full mt-8 justify-items-center mx-20 rounded-3xl min-w-72 max-w-xl bg-yellow-900 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.4)]dark:bg-neutral-7`}>
          <form className="w-fit grid grid-cols-1 grid-rows-1 items-center justify-items-center gap-4 bg-pink-3">
            <div className="grid grid-cols-2 grid-row-1 gap-4 p-5 bg-yellow-0 w-full h-60 rounded-3xl border border-white">
              <div className="flex flex-col tracking-wide p-4 bg-pink-1 border-r-2 border-white">
                <h4 className="text-amber-400 tracking-wide font-medium mb-1 text-2xl">{productName}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Total: RWF {totalAmount}</h4>
                <h4 className="text-white font- tracking-wide mb-1">client Email: {clientEmail}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Client Address: {clientAddress}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Client Name: {clientName}</h4>
              </div>
              <div className="bg-blue-1 position-relative grid grid-cols-2 gap-2 pb-5 items-end bg-slate-4 h-full w-fit">
               {orderStatus === "pending" && <button type="button" onClick={handleAccept} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Accept</button>}
                {orderStatus === "pending" && <button type="button" onClick={handleDecline} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-slate-400">Decline</button>}
                {orderStatus === "processing" && <button type="button" onClick={handleProcessing} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Processing...</button>}
                {orderStatus === "shipping" && <button type="button" onClick={handleShipping} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Shipping...</button>}
                {orderStatus === "delivered" && <button type="button" onClick={handleDelivered} className="inline-block w-fit rounded-3xl h-10 bg-green-600 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-white font-semibold transition duration-150 ease-in-out hover:bg-green-700">Delivered!</button>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderComponent;
