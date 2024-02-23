"use client";
import Link from "next/link";
import Image from "next/image";
import OnboardingFooter from "../components/second-Footer/second-Footer";
import CustomToast from "../components/toast/toast";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterInterest() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
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

    if (!businessName || !accountNumber || !email) {
      setError("All fields must be filled!");

      return;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      //we are saying the first character must be an alphabet, there will be a space, then any character from A-z
      setError("  Invalid email!");
      
      return false;}

    if (isNaN(accountNumber)) {
      setError("Account number is incorrect!");

      return;
    }

    if (isNaN(accountNumber)) {
      setError("Account number should have digits only");

      return;
    }
    if (selectedCheckboxes.length === 0) {
      setError("Please select at least one checkbox");
      return;
    }

    if (selectedCheckboxes.includes(e)) {
      // If it's selected, remove it from the array
      const updatedCheckboxes = selectedCheckboxes.filter(
        (checkbox) => checkbox !== e
      );
      setSelectedCheckboxes(updatedCheckboxes);
    } else {
      // If it's not selected, add it to the array
      setSelectedCheckboxes([...selectedCheckboxes, e]);
    }

    try {
      fetch("http://localhost:8080/become-supplier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+ localStorage.getItem("token"),
        },
        body: JSON.stringify({
          email,
          businessName,
          selectedCheckboxes,
          bankName,
          accountNumber,
          location,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          if (json) {
            const form = e.target;
            localStorage.setItem("supplierId", json._id);
            form.reset();
            toast.success('Successfully toasted!')
            setTimeout(() => {
              router.push("/success-register"); // Navigate to the success page after the toast disappears
            }, 3000); 
            
          } else {
            console.log("user registration failed.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      // If it's selected, remove it from the array
      const updatedCheckboxes = selectedCheckboxes.filter(
        (checkbox) => checkbox !== value
      );
      setSelectedCheckboxes(updatedCheckboxes);
    } else {
      // If it's not selected, add it to the array
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 min-h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <div className="block w-fit h-fit rounded-3xl min-w-72 bg-yellow-900 my-10 px-6 py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form
                className="flex flex-col bg-pink-4"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Become A Supplier
                </h3>

                <div className="bg-yellow-3 grid grid-rows-1 grid-cols-2 gap-4  py-2 w-full h-fit items-center">
                  <div className="relative mb- w-60 text-sm">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={(e) => setBusinessName(e.target.value.trim())}
                      required
                      maxLength="35"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 ">
                      Business Name
                    </label>
                  </div>
                  <div className="relative mb- w-60 text-sm">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={(e) => setEmail(e.target.value.trim())}
                      required
                      maxLength="35"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 ">
                      Email
                    </label>
                  </div>
                </div>

                <label className="text-white font-normal text-sm tracking-wider opacity-40 ml-3">
                  Select Products to sell
                </label>

                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4 mb-4 ml-3 justify-evenly text-xs text-white font-normal tracking-wider opacity-50 bg-slate- w-fit">
                  <div className="flex">
                    <input
                      type="checkbox"
                      value="White Eggs"
                      checked={selectedCheckboxes.includes("White Eggs")}
                      onChange={() => handleCheckboxChange("White Eggs")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>White Eggs</label>
                  </div>
                  <div className="flex w-fit">
                    <input
                      type="checkbox"
                      value="Brown Eggs"
                      checked={selectedCheckboxes.includes("Brown Eggs")}
                      onChange={() => handleCheckboxChange("Brown Eggs")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Brown Eggs</label>
                  </div>

                  <div className="flex ">
                    <input
                      type="checkbox"
                      value="Matoke"
                      checked={selectedCheckboxes.includes("Matoke")}
                      onChange={() => handleCheckboxChange("Matoke")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Matoke</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      value="Cavendish Bananas"
                      checked={selectedCheckboxes.includes("Cavendish bananas")}
                      onChange={() => handleCheckboxChange("Cavendish bananas")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Cavendish bananas</label>
                  </div>
                  <div className="flex ">
                    <input
                      type="checkbox"
                      value="Plantain"
                      checked={selectedCheckboxes.includes("Plantain")}
                      onChange={() => handleCheckboxChange("Plantain")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Plantain</label>
                  </div>
                  <div className="flex w-fit">
                    <input
                      type="checkbox"
                      value="Avocados"
                      checked={selectedCheckboxes.includes("Avocados")}
                      onChange={() => handleCheckboxChange("Avocados")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Avocados</label>
                  </div>

                  <div className="flex">
                    <input
                      type="checkbox"
                      value="Irish Potatoes"
                      checked={selectedCheckboxes.includes("Irish Potatoes")}
                      onChange={() => handleCheckboxChange("Irish Potatoes")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Irish Potatoes</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      value="Sweet Potatoes"
                      checked={selectedCheckboxes.includes("Sweet Potatoe")}
                      onChange={() => handleCheckboxChange("Sweet Potatoe")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Sweet Potatoes</label>
                  </div>
                  <div className="flex ">
                    <input
                      type="checkbox"
                      value="Chicken"
                      checked={selectedCheckboxes.includes("Chicken")}
                      onChange={() => handleCheckboxChange("Chicken")}
                      className="h-3 w-3 mr-1"
                    />
                    <label>Chicken</label>
                  </div>
                </div>
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value.trim())}
                  default=""
                  className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 text-sm ml-3 rounded-md"
                >
                  <option value="">Select Bank Name</option>

                  <option value="Equity">Equity</option>
                  <option value="I & M">I & M </option>
                  <option value="Bank of Kigali">Bank of Kigali</option>
                  <option value="KCB">KCB</option>
                  <option value="Eco Bank">Eco Bank</option>
                  <option value="Access Bank">Access Bank</option>
                </select>
                <div className="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setAccountNumber(e.target.value.trim())}
                    maxLength="16"
                  />
                  <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Account Number
                  </label>
                </div>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value.trim())}
                  default=""
                  placeholder="select location"
                  className=" flex mb-6 p-1  w-56 bg-slate-200 opacity-40 ml-3 rounded-md text-sm"
                >
                  <option value="">Select Location</option>

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
                <button
                  type="submit"
                  className="inline-block w-56 rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 mx-auto"
                >
                  Sign Up
                </button>
                {error && (
                  <div className="bg-red-500 flex text-wrap text-white w-full max-w-80 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <div className="mb-6 flex items-center justify-between">
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
