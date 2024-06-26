"use client";
import Link from "next/link";
import OnboardingFooter from "../components/second-Footer/second-Footer";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomToast from "../components/toast/toast";
import toast, { Toaster } from 'react-hot-toast';
import {BASE_API_URL} from "../../constants"

// importing the model for creating a user

export default function SignUp() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  //we will use router to go to another page after successful signup
  const router = useRouter();
  

  useEffect(() => {
    //check the local storage for token
    const token = localStorage.getItem("token")
    const supplierId = localStorage.getItem("supplierId")
    const transporterId = localStorage.getItem("transporterId")

    if (token && (supplierId || transporterId)) {
      router.push("/dashboard")
    } else if (token && !supplierId && !transporterId) {
      router.push("/decision")
    }

  },[]);

  //using useEffect to display error for limited time
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobileNumber || !confirmPassword || !password || !name) {
      setError("All fields must be filled!");

      return;
    }

    if (isNaN(mobileNumber)) {
      setError("Mobile number is incorrect!");

      return;
    }

    if (mobileNumber.length > 10) {
      setError("Your Rwandan number should be 10 characters long");

      return;
    }

    var spaceCount = (name.match(/ /g) || []).length;

if (spaceCount !== 1) {
    setError("Please enter your first and last name separated by a single space");
    return false;
}

    if (password !== confirmPassword) {
      setError("Passwords do not match");

      return;
    }

    if (mobileNumber.length !== 10) {
      setError("Your Rwandan number should be 10 digits long");

      return;
    }

    if (password.length < 8 ) {
      setError("password should be atleast 8 characters");

      return;
    }

    
    try {
      const res = await fetch(`${BASE_API_URL}/signup`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              mobileNumber,
              password,
              name
          }),
      });

      if (res.ok) {
          const form = e.target;
          console.log("about to enter toast");
          form.reset();
          toast.success("signup successful!");
            setTimeout(() => {
              router.push("/login"); // Navigate to the success page after the toast disappears
            }, 3000); 
        
          
      } else {
          console.log("user registration failed.");
      }
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  // console.log("mobile number", mobileNumber);
  //   console.log("password", password);
  //   console.log("confirmPassword", confirmPassword);

  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen animate-slide-in">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="block max-w-sm rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form autoComplete="off" onSubmit={handleSubmit} >
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Sign Up
                </h3>
                <div className="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setName(e.target.value.trim())}
                    required
                    maxLength="30"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Names
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="mobileNumber"
                    onChange={(e) => setMobileNumber(e.target.value.trim())}
                    required
                    maxLength="12"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out  -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                    Mobile Number
                  </label>
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="Password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    maxLength="35"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out  -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                    Password
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    maxLength="12"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out  -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                    Confirm Password
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-block w-full rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 "
                >
                  Sign Up
                </button>
                {error && (
                  <div className="bg-red-500 flex text-wrap text-white max-w-56 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <div className="mb-6 flex items-center justify-between">
                  <Link
                    href="/login"
                    className="text-white text-xs tracking-wider w-full bg-pink-2 text-right transition duration-150 ease-in-out hover:text-slate-300 focus:text-slate-300 active:text-slate-300"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <OnboardingFooter />
        </div>
      </div>
    </>
  );
}
