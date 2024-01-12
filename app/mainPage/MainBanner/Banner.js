import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="wrapper bg-slate-200 flex w-full  h-fit bg-pink-  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      <div className="left  bg-pink-7 flex-col  w-1/2   justify-center  max-md:justify-start max-md:mt-0 max-sm:w-4/6">
          <div className="flex justify-center  ">
            <Image
              src="/tuk-tuk.png"
              alt="Vercel Logo"
              className="dark:invert rounded-3xl w-5/6"
              width={570}
              height={25}
              priority
            />
          </div>
        </div>
        <div className="left flex flex-col bg-blue-4 justify-center w-1/2  max-md:justify-start max-md:mt-0 max-md:pt-7 max-sm:w-full">
        
          
          <p className="w-full p-5 bg-pink-400 text-2xl text-center justify-center text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold max-sm:w-full">
          Are you a business or farmer eager to supply other enterprises? <Link
            href="/"
            className=""
          >
           <span className="underline-offset-2 font-semibold decoration-slate-700 underline">Sign up</span>
          </Link> or <Link
            href="/"
            className=""
          >
           <span className="underline underline-offset-2 font-normal decoration-slate-500">sign in</span>
          </Link> to access opportunities 
          </p>
          
        </div>
      
      </div>
    </>
  );
}
