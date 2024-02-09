"use client";
import Link from "next/link";
import OnboardingFooter from "../components/onboardingfooter/Onboardingfooter";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MotorSignup() {
  const [names, setNames] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [province, setProvince] = useState("");
  const [transportType, setTransportType] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("");
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

    if (!names || !mobileNumber) {
      setError("All fields must be filled!");

      return;
    }

    if (!province || !transportType || !availabilityStatus) {
      setError("One of the drop-down options is not selected!");

      return;
    }

    if (isNaN(mobileNumber)) {
      setError("Account number should have digits only");

      return;
    }

    if (mobileNumber.length > 10) {
      setError("Your Rwandan number should be 9 digits long");

      return;
    }

    if (mobileNumber.length < 9 && mobileNumber.length > 7) {
      setError("Enter full Rwandan Number");

      return;
    }

    
    try {
      const res = await fetch("http://localhost:8080/TransportRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          names,
          mobileNumber,
          deliveryProvinces,
          transportType,
          availabilityStatus
        })
      });

      if(res.ok) {
        const form = e.target;
        form.reset();
      }else{
        console.log("user registration failed.")
      }
    } catch (error) {
      console.log("error during registration: ", error)
    }
  };

  // console.log("mobile number", mobileNumber);
  //   console.log("password", password);
  //   console.log("confirmPassword", confirmPassword);

  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            <div class="block w-80 h-fit rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 my-10 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form
                className="flex flex-col  "
                autocomplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Register Transport
                </h3>
                <div class="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setNames(e.target.value)}
                    required
                    maxlength="12"
                  />
                  <label class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Names
                  </label>
                </div>
                <div class="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    maxlength="12"
                  />
                  <label class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Mobile Number
                  </label>
                </div>

                <select
                  value={province}
                  default=""
                  onChange={(e) => setProvince(e.target.value)}
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 text-sm rounded-md"
                >
                  <option value="">Delivery Provinces</option>
                  <option value="Kigali">Kigali </option>
                  <option value="Nyagatare">Nyagatare </option>
                  <option value="Bugesera">Bugesera</option>
                  <option value="Kibuye">Kibuye</option>
                  <option value="Nyarugenge">Nyarugenge</option>
                  <option value="Ngoma">Ngoma</option>
                  <option value="Eastern Province">Eastern Province</option>
                  <option value="Southern Province">Southern Province</option>
                  <option value="Western Province">Western Province</option>
                  <option value="Kicukiro">Kicukiro</option>
                </select>
                <select
                  value={transportType}
                  onChange={(e) => setTransportType(e.target.value)}
                  default=""
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 text-sm  rounded-md"
                >
                  <option value="">Transport Type</option>

                  <option value="Tuk-Tuk">Tuk-Tuk</option>
                  <option value="Motor">Motor </option>
                  <option value="Pick-up Truck">Pick-up Truck</option>
                </select>

                <select
                  value={availabilityStatus}
                  default=""
                  onChange={(e) => setAvailabilityStatus(e.target.value)}
                  placeholder="delivery status"
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 rounded-md text-sm"
                >
                  <option value="">Availability Status</option>

                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
                <button
                  type="submit"
                  class="inline-block w-full rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 mx-auto"
                >
                    Register
                </button>
                {error && (
                  <div className="bg-red-500 flex text-wrap text-white w-full max-w-80 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <div class="mb-6 flex items-center justify-between">
                  <Link
                    href="/"
                    className="text-white text-xs tracking-wider w-full bg-pink-2 text-right"
                  >
                    Home
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
