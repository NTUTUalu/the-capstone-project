"use client";
import Link from "next/link";
import Image from "next/image";
import On from "../components/onboardingfooter/Onboardingfooter"; //importing a footer



import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

 
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //we will use router to go to another page after successful signup
  const router = useRouter();

  //using useEffect to display error for limited time
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 6000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobileNumber || !password ) {
      setError("All fields must be filled!");

      return;
    }

    if (isNaN(mobileNumber)) {
      setError("Mobile number should have digits only!");

      return;
    }


    if (mobileNumber.length !== 10) {
      setError("Your Rwandan number should be 9 digits long");

      return;
    }
 

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber,
          password
         
        })
      });

      const gateway = mobileNumber;

      if(res.ok) {
        const form = e.target;
        form.reset();
        if(gateway == "0783298700") {
          router.push("/productsUpdate");
        } else {
          router.push("/Dashboard");
        }
     
      }else{
        console.log("Login failed");
      }
    } catch (error) {
      console.log("error during registration: ", error)
    }
  };

  
  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
          
            <div class="block max-w-sm rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form    autocomplete="off"
                onSubmit={handleSubmit}>
                
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Login
                </h3>
                <div class="relative mb-6 text-sm" >
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setMobileNumber(e.target.value.trim())}
                    required
                    maxlength="12"
                   
                  />
                  <label
                  
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white"
                  >
                    Mobile Number
                  </label>
                </div>

               
                <div class="relative mb-6 text-sm" >
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    maxlength="35"
                    
                  />
                  <label
                    
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200  ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white"
                  >
                    Password
                  </label>
                </div>

             

                <button
                  type="submit"
                  class="inline-block w-full rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 "
                  
                >
                  Login
                </button>
                {error && (
                  <div className="bg-red-500 flex text-wrap text-white w-full max-w-60 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
                
                <div class="mb-6 flex items-center justify-between">
                
                  <Link
                    href="/signupDecision"
                    className="text-white text-xs tracking-wider w-full bg-pink-2 text-right transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300"
                  >
                    Sign Up
                  </Link>
                </div>
              
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
