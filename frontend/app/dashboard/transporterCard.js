import toast, { Toaster } from "react-hot-toast";

function transporterCard({names,mobileNumber,transportType,availabilityStatus,deliveryProvince,transporterId}) {

    const copyNumberToClipboard = () => {
        // Copy the number to the clipboard
        navigator.clipboard.writeText(mobileNumber)
          .then(() => {
            console.log('Number copied to clipboard:', mobileNumber);
            toast.success('copied to clipboard!')
            // Optionally, you can show a toast or other feedback message here
          })
          .catch(err => {
            console.error('Failed to copy number to clipboard:', err);
            // Optionally, you can show an error message here
          });
      };

   


  return (
    <div className="transition-opacity duration-150 ease-linear" id="tabs-profile03" role="tabpanel" aria-labelledby="tabs-profile-tab03">
      <div className="h-full w-full">
  
        <div className={` grid grid-cols-1 gap-8 w-full mt-8 justify-items-center mx-20 rounded-3xl min-w-72 max-w-xl bg-yellow-900 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.4)]dark:bg-neutral-7`}>
          <form className="w-full grid grid-cols-1 grid-rows-1 items-center justify-items-center gap-4 bg-pink-3 bg-green-3">
            <div className="grid grid-cols-2 grid-row-1 gap-4 p-3 bg-yellow-0 w-full h-48 rounded-3xl border border-white bg-pink-3 ">
              <div className="flex flex-col justify-end tracking-wide p-2 bg-pink-1 border-r-2 border-white">
                <h4 className="text-amber-400 tracking-wide font-medium mb-1 text-1xl">{names}</h4>
                <h4 className="text-white font- tracking-wide mb-1">Province:{deliveryProvince} </h4>
                <h4 className="text-white font- tracking-wide mb-1">Transport type:{transportType} </h4>
                <h4 className="text-white font- tracking-wide mb-1">status:{availabilityStatus} </h4>
                <h4 className="text-white font- text-2xl tracking-wide mb-1">{mobileNumber}</h4>
              </div>
              <div className="bg-blue-1 position-relative grid grid-cols-1 gap-2 pb-5 items-end bg-slate-4 h-full w-fit">
                <button type="button"  onClick={copyNumberToClipboard} className="inline-block w-fit rounded-2xl h-10 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400">Copy Phone Number</button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default transporterCard