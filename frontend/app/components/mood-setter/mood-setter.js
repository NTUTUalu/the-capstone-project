import Link from "next/link";
import Image from "next/image";

export default function Mood() {
  return (
    <>
      <div className="wrapper  flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      
        <div className="left flex flex-col bg-blue-4 justify-center w-1/2  max-md:justify-start max-md:mt-0 max-md:pt-7 max-sm:w-full">
          <h4 className="text-amber-500 font-medium mb-1">FRESH PRODUCTS</h4>
          <h1 className="text-slate-950 font-bold text-2xl w-5/6  mb-3 max-md:text-3xl max-md:w-full  max-sm:text-2xl max-sm:w-5/6">
          We are committed to helping businesses gain access to the best Agri-suppliers and  transportation choices
          </h1>
          <p className="w-4/6 text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold max-sm:w-full">
         Sign up or login to access transportation choices or find Agri-suppliers near you.
          </p>
          <Link href="/signup" className="border border-amber-500 px-7 py-1 w-32 rounded-3xl font-normal max-md:mr-3">   <button className="text-black">SIGN UP</button> </Link>
        </div>
        <div className="left flex bg-pink-7 flex-col  w-1/2   justify-center  max-md:justify-start max-md:mt-0 max-sm:w-4/6">
          <div className="flex justify-center  ">
            <Image
              src="/farmers.png"
              alt="Vercel Logo"
              className="dark:invert rounded-3xl w-5/6"
              width={570}
              height={25}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
