

function OrderComponent({ province, total, productName, clientName, quantity }) {
  const handleAccept = (e) => {
    e.preventDefault();
    // Handle accept logic
  };

  const handleDecline = (e) => {
    e.preventDefault();
    // Handle decline logic
  };

  return (
    <div className="transition-opacity duration-150 ease-linear" id="tabs-profile03" role="tabpanel" aria-labelledby="tabs-profile-tab03">
      <div className="h-full w-full">
       
        <div className="grid grid-cols-1 gap-8 w-fit mt-8 justify-items-center mx-20 rounded-3xl min-w-72 bg-yellow-900 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.4)]dark:bg-neutral-7">
          <form className="w-fit grid grid-cols-1 grid-rows-1 items-center justify-items-center gap-4 bg-pink-3">
            <div className="grid grid-cols-2 grid-row-1 gap-4 p-5 bg-yellow-0 w-full h-60 rounded-3xl border border-white">
              <div className="flex flex-col tracking-wide p-4 bg-pink-1 border-r-2 border-white">
                <h4 className="text-amber-400 tracking-wide font-medium mb-1 text-2xl">{productName}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Total: RWF {total}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Quantity: {quantity}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Province: {province}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Client Name: {clientName}</h4>
              </div>
              <div className="bg-blue-1 position-relative grid grid-cols-2 gap-2 pb-5 items-end bg-slate-4 h-full w-fit">
                <button type="button" onClick={handleAccept} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Accept</button>
                <button type="button" onClick={handleDecline} className="inline-block w-fit rounded-3xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Decline</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderComponent;