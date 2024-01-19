"use client";
import Link from "next/link";
import Image from "next/image";
import OnboardingFooter from "../components/onboardingfooter/Onboardingfooter";

import { useEffect } from "react";

export default function RegisterInterest() {
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
            <div class="block w-fit h-fit rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form className="flex flex-col">
                {/* <!--E-mail input--> */}
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Register Interest
                </h3>
                <div class="relative mb-6 w-60" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Mobile Number"
                  />
                  <label
                    for="exampleInputEmail2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Business Name
                  </label>
                </div>
                <div class="relative mb-6 w-60" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    placeholder="Mobile Number"
                  />
                  <label
                    for="exampleInputEmail2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Mobile Number
                  </label>
                </div>

                <label className="text-white font-normal text-sm tracking-wider opacity-40 ml-3">Select Products to sell</label>
                
                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4 mb-4 ml-3 justify-evenly text-xs text-white font-normal tracking-wider opacity-50 bg-slate- w-fit">
<div className="flex">
                <input type="checkbox" id="option1" name="options[yyy]" value="option1" className="h-3 w-3 mr-1"/>
  <label for="option1">White Eggs</label></div>
<div className="flex w-fit">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Brown Eggs</label></div>

  <div className="flex ">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Matoke</label></div>
  <div className="flex">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Cavendish bananas</label></div>
  <div className="flex ">
                <input type="checkbox" id="option1" name="options[yyy]" value="option1" className="h-3 w-3 mr-1"/>
  <label for="option1">Plantain</label></div>
<div className="flex w-fit">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Avocados</label></div>

  <div className="flex">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Irish Potatoes</label></div>
  <div className="flex">
  <input type="checkbox" id="option2" name="options[]" value="option2" className="h-3 w-3 mr-1"/>
  <label for="option2">Sweet Potatoes</label></div>
  <div className="flex ">
                <input type="checkbox" id="option1" name="options[yyy]" value="option1" className="h-3 w-3 mr-1"/>
  <label for="option1">Chicken</label></div>
 

                </div>
                <select id="cars" default="" name="location" placeholder="select location" className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 ml-3 rounded-md">
                <option value="">Select Location</option>
          
    <option value="volvo">nyagatare</option>
    <option value="saab">bugesera</option>
    <option value="fiat">kibuye</option>
    <option value="audi">nyarugenge</option>
    <option value="volvo">ngoma</option>
    <option value="saab">eastern province</option>
    <option value="fiat">southern province</option>
    <option value="audi">western province</option>
    <option value="volvo">kicukiro</option>
    <option value="volvo">other</option>
  </select>
                <button
                  type="submit"
                  class="inline-block w-56 rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 mx-auto"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register Interest
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
