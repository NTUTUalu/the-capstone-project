"use client";
import Link from "next/link";
import Image from "next/image";
import On from "../components/onboardingfooter/Onboardingfooter"; //importing a 
// import "./swift"
// const { Input, initTE } = await import("tw-elements");
import {Input, initTE} from "tw-elements";
import { useEffect,useState } from "react";


export default function Login() {
  initTE({ Input });
  useEffect(() => {
    // initTE({ Input });
  }, []);
  
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
            <div class="block max-w-sm rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form>
                {/* <!--E-mail input--> */}
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Login
                </h3>
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full text-amber-400 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 placeholder-up"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                   
                  />
                  <label
                    for="exampleInputEmail2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white"
                  >
                    Mobile Number
                  </label>
                </div>

                {/* <!--Password input--> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full text-amber-400 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none border-b border-amber-500  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInputPassword2"
                    
                  />
                  <label
                    for="exampleInputPassword2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200  ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white"
                  >
                    Password
                  </label>
                </div>

                {/* <!--Sign in button--> */}

                <button
                  type="submit"
                  class="inline-block w-full rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Login
                </button>

                {/* <!--Remember me checkbox--> */}
                <div class="mb-6 flex items-center justify-between">
                  {/* <!--Forgot password link--> */}
                  <Link
                    href="/decision"
                    className="text-white text-xs tracking-wider w-full bg-pink-2 text-right transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300"
                  >
                    Sign Up
                  </Link>
                </div>

                {/* <!--Register link--> */}
                <div className="flex flex-col ">
                  <Link
                    href="#"
                    className="text-white font-normal text-xs mb-1 tracking-wider w-full opacity-30 bg-pink-2 text-center transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300"
                  >
                    Forgot Password
                  </Link>
                  <Link
                    href="/"
                    className="text-white text-xs font-normal tracking-wider w-full opacity-30 bg-pink-2 text-center transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300 underline"
                  >
                    Home
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <On />
        </div>
      </div>
    </>
  );
}
