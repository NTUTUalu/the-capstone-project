import Link from "next/link";
import Image from "next/image";

export default function MoodIcons() {
  return (
    <>
      <div className="wrapper bg-blue-3 flex flex-col w-full h-40 mt-10 px-60 text-center max-md:px-10  max-md:my-40 max-sm:my-32 max-sm:h-fit max-sm: ">
       
        <div className="right w-full  grid text-xs grid-cols-4 gap-4 h-full  max-sm:grid-cols-2 bg-slate-7">
          <div className="card_1 flex justify-center  items-center bg-pink-7  h-auto">
        
          <div className={`border-2 border-slate-50 w-5/6 h-full flex flex-col p-2 justify-center items-center max-md:w-full `}>
          <div className=" mr-2 flex justify-items-center items-center  p-2">
              <Image
                src="/cash.png"
                alt="Vercel Logo"
                className="dark:invert "
                width={40}
                height={30}
                priority
              />
            </div>
            <h5 className="font-bold mb-2">CASH ON DELIVERY</h5>
            <p className="text-slate-500 font-semibold">Cash As Means Of Delivery</p>
          </div>
           
          </div>
          <div className="card_1 flex justify-center items-center ">
        
        <div className={` border-2 border-slate-50 w-5/6 h-full flex flex-col p-2 justify-center items-center max-md:w-full`}>
        <div className=" mr-2 flex justify-items-center items-center  p-2">
            <Image
              src="/quick.png"
              alt="Vercel Logo"
              className="dark:invert "
              width={40}
              height={30}
              priority
            />
          </div>
          <h5 className="font-bold mb-2">QUICK DELIVERY</h5>
          <p className="font-semibold text-slate-500">Using Nearby Suppliers</p>
        </div>
         
        </div><div className="card_1 flex justify-center items-center">
        
        <div className={` border-2 border-slate-50 w-5/6 h-full flex flex-col p-6 justify-evenly items-center max-md:w-full`}>
        <div className=" mr-2  flex justify-center items-center  p-2">
            <Image
              src="/support.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={35}
              height={30}
              priority
            />
          </div>
          <h5 className="font-bold">ALWAYS SUPPORT</h5>
          <p className="font-semibold text-slate-500">Call for support</p>
        </div>
         
        </div><div className="card_1 flex justify-center items-center">
        
        <div className={`border-2 border-slate-50 w-5/6 h-full flex flex-col p-2 justify-center items-center max-md:w-full`}>
        <div className=" mr-2  flex justify-items-center items-center rounded-full p-2">
            <Image
              src="/trusted.png"
              alt="Vercel Logo"
              className="dark:invert "
              width={40}
              height={10}
              priority
            />
          </div>
          <h5 className="font-bold mb-2">TRUSTED SUPPLIER</h5>
          <p className="font-semibold text-slate-500">Best Farmers Available</p>
        </div>
         
        </div>
        </div>
      </div>
    </>
  );
}
