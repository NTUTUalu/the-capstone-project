"use client";
import Link from "next/link";
import Image from "next/image";
import OnboardingFooter from "../components/second-Footer/second-Footer";

export default function Decision() {
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen fade-in">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full px-20 w-full bg-pink-8">
            <div className="w-fit flex justify-center items-center  h-96 bg-slate-3">
              <div className="flex justify-center  h-full w-96 ">
                <Image
                  src="/splash3.jpg"
                  alt="Vercel Logo"
                  className="dark:invert w-full  rounded-l-3xl"
                  width={300}
                  height={25}
                  priority
                />
              </div>

              <div className="block bg-yellow-800 min-w-72 w-96 bg- h-full px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7  rounded-r-3xl">
                <div className="flex flex-col items-center">
                  {/* <!--E-mail input--> */}
                  <h3 className="w-full bg-gray-3 text-center mb-7 font-semibold tracking-wide text-white text-2xl">
                    WELCOME
                  </h3>
                  <div className="flex justify-center items-center rounded-full p-2 bg-yellow-400 w-fit h-fit">
                    <Image
                      src="/cash.png"
                      alt="Vercel Logo"
                      className="dark:invert  "
                      width={50}
                      height={25}
                      priority
                    />
                  </div>
                  <p className="text-sm text-center mb-4 text-white tracking-wider mt-4 ">
                    Choose action button below                   
                  </p>

                  <div className="flex flex-col items-center">
                   
                    
                    <Link
                      href="/transporter"
                      className="inline-block w-64 h-fit rounded-3xl bg-transparent border-2 border-amber-500 text-center py-1.5 text-sm tracking-wider uppercase leading-normal text-amber-500 font-medium transition duration-150 ease-in-out "
                      
                    >
                      BECOME A transporter
                    </Link>
                    <p className="text-white text-sm opacity-60 my-1">Or</p>
                   <Link
                      href="/supplier"
                      className="inline-block w-64 h-fit rounded-3xl  bg-amber-400 px- text-center py-1.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-medium transition duration-150 ease-in-out  "
                     
                    >
                      BECOME A Supplier
                    </Link>
                   
                  </div>

                  <div className="mb-6 flex items-center justify-right  w-full">
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <OnboardingFooter />
        </div>
      </div>
    </>
  );
}
