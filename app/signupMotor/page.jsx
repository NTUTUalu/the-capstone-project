"use client";
import Link from "next/link";
import Image from "next/image";
import OnboardingFooter from "../components/onboardingfooter/Onboardingfooter";

import { useEffect } from "react";

export default function MotorSignup() {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
            <div class="block w-80 h-fit rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 my-10 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form className="flex flex-col ">
                {/* <!--E-mail input--> */}
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Transport Sign Up
                </h3>
                <div class="relative mb-6 w-60 text-sm" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none tracking-wider transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                   
                  />
                  <label
                    for="exampleInputEmail2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Names
                  </label>
                </div>
           
                <select
                  id="cars"
                  default=""
                  name="location"
                  className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 text-sm rounded-md"
                >
                  <option value="">Delivery Provinces</option>
                  <option value="volvo">Kigali </option>
                  <option value="saab">Nyagatare </option>
                  <option value="fiat">Bugesera</option>
                  <option value="volvo">Kibuye</option>
                  <option value="saab">Nyarugenge</option>
                  <option value="fiat">Ngoma</option>
                  <option value="volvo">Eastern Province</option>
                  <option value="saab">Southern Province</option>
                  <option value="fiat">Western Province</option>
                  <option value="fiat">Kicukiro</option>
                </select>
                <select
                  id="cars"
                  default=""
                  name="location"
                  className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 text-sm  rounded-md"
                >
                  <option value="">Transport Type</option>

                  <option value="volvo">Tuk-Tuk</option>
                  <option value="saab">Motor </option>
                  <option value="fiat">Pick-up Truck</option>
                </select>
                <div class="relative mb-6 w-60" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                   
                  />
                  <label
                    for="exampleInputEmail2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Mobile Number
                  </label>
                </div>
                <select
                  id="cars"
                  default=""
                  name="location"
                  placeholder="delivery status"
                  className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 rounded-md text-sm"
                >
                  <option value="">Delivery Status</option>

                  <option value="volvo">Available</option>
                  <option value="saab">Unavailable</option>
                  
                </select>
                <button
                  type="submit"
                  class="inline-block w-56 rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 mx-auto"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign Up
                </button>

                {/* <!--Remember me checkbox--> */}
                <div class="mb-6 flex items-center justify-between">
                  {/* <!--Forgot password link--> */}
                  <Link
                    href="/"
                    className="text-white text-xs tracking-wider w-full bg-pink-2 text-right"
                  >
                    Home
                  </Link>
                </div>

                {/* <!--Register link--> */}
              </form>
            </div>
          </div>
          <OnboardingFooter />
        </div>
      </div>
    </>
  );
}
