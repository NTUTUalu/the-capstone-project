// "use client";
import Link from "next/link";
import Image from "next/image";

export default function Decision() {
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full px-20 w-full bg-pink-8">
            <div className="w-fit flex justify-center items-center  h-96 bg-slate-3">
         

              <div className="block bg-yellow-8 min-w-72 w-96 bg- h-full px-4 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7  rounded-3xl border-2 border-slate-200">
                <div className="flex flex-col items-center justify-items-between bg-pink-3">
                  {/* <!--E-mail input--> */}
                  <h3 className="w-full bg-gray-3 text-center mb-7 font-semibold tracking-wide text-black text-3xl">
                    Success!
                  </h3>
                 
                  <div className="flex justify-center bg-yellow-3 h-16 w-16 mb-2">
            <Image
              src="/success.png"
              alt="Vercel Logo"
              className="dark:invert rounded-3xl w-5/6"
              width={570}
              height={25}
              priority
            />
          </div>

          <p className="text-slate-600 font-semibold text-lg">Your registration was successful</p>
          <p className="w-full text-center text-slate-600">Thank you for your registration. Proceed to the dashboard to explore more about activities.</p>
                  

                  <div className="mb-6 flex items-center justify-right  w-full">
                    <Link
                      href="/dashboard"
                      className="text-slate-600 underline text-xs tracking-wider w-full bg-pink-2 text-right transition duration-150 ease-in-out mt-4 font-semibold"
                    >
                      Proceed to dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex justify-center items-center bg-blue- h-16 border-t-2">
            <h3 className="flex w-fit h-fit text-xs bg-pink- text-slate-400">
              Copyright{" "}
              <Image
                src="/copyright.png"
                alt="Poultry plus logo"
                className="h-4 flex place-self-center
                      mx-1 opacity-60"
                width={15}
                height={15}
                priority
              />{" "}
              2023 All right reserved | African 2-2 Inc.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
