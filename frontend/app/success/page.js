// "use client";
import Link from "next/link";
import Image from "next/image";
import OnboardingFooter from "../components/second-Footer/second-Footer";



export default function Decision() {
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full px-20 w-full bg-pink-8">
            <div className="w-fit flex justify-center items-center  h-96 bg-slate-3">
         

              <div className="block bg-yellow-800 min-w-72 w-96 bg- h-full px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7  rounded-3xl">
                <div className="flex flex-col items-center justify-items-between">
                  {/* <!--E-mail input--> */}
                  <h3 className="w-full bg-gray-3 text-center mb-7 font-semibold tracking-wide text-white text-2xl">
                    Success!
                  </h3>
                 

                  

                  <div className="mb-6 flex items-center justify-right  w-full">
                    <Link
                      href="/"
                      className="text-white text-xs tracking-wider w-full bg-pink-2 text-right transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300"
                    >
                      Proceed to home
                    </Link>
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
