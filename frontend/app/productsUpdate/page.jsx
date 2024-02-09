"use client";
import Link from "next/link";
import OnboardingFooter from "../components/onboardingfooter/Onboardingfooter";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductUpdate() {
  const [category, setCategory] = useState("");
  const [imageName, setImageName] = useState("");
  const [productName, setProductName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
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

  const categoryOptions = {
    "Fresh Eggs": ["White Eggs", "Brown Eggs"],
    Bananas: ["Plantain", "Cavendish Bananas", "Matoke"],
    Avocados: ["Avocados"],
    Potatoes: ["Irish Potatoes", "Sweet Potatoes"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !imageName || !productName || !itemCost || !deliveryTime) {
      setError("All fields must be filled!");
      return;
    }

    if (!productName || !category || !deliveryTime) {
      setError("One of the drop-down options is not selected!");

      return;
    }

    // if (isNaN(itemCost)) {
    //   setError("Item cost should have digits only");

    //   return;
    // }

    try {
      const res = await fetch("http://localhost:8080/EditProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          imageName,
          productName,
          itemCost,
          deliveryTime,
        }),
      });

      if (res.ok) {
        setCategory("");

        setProductName("");

        setDeliveryTime("");
        const form = e.target;
        form.reset();
      } else {
        console.log("Product edit has failed.");
      }
    } catch (error) {
      console.log("Could not access the database: ", error);
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
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full bg-gray-3 text-center mb-10 font-semibold tracking-wide text-white text-2xl">
                  Product Update
                </h3>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value.trim())}
                  default=""
                  className="flex mb-6 p-1 w-60 bg-slate-200 opacity-40 text-sm rounded-md"
                >
                  <option value="">Product Category</option>
                  {Object.keys(categoryOptions).map((categoryOption, index) => (
                    <option key={index} value={categoryOption}>
                      {categoryOption}
                    </option>
                  ))}
                </select>

                {category && categoryOptions[category] && (
                  <select
                    value={productName}
                    default=""
                    onChange={(e) => setProductName(e.target.value.trim())}
                    className="flex mb-6 p-1 w-60 bg-slate-200 opacity-40 rounded-md text-sm"
                  >
                    <option value="">Product Name</option>
                    {categoryOptions[category].map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                <div class="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setImageName(e.target.value.trim())}
                    required
                    maxlength="12"
                  />
                  <label class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal  tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Image Name{" "}
                  </label>
                </div>
                <div class="relative mb-6 w-60 text-sm">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    onChange={(e) => setItemCost(e.target.value.trim())}
                    required
                    maxlength="12"
                  />
                  <label class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                    Item Cost <span className="text-xs font-light">(RWF)</span>
                  </label>
                </div>

                <select
                  value={deliveryTime}
                  default=""
                  onChange={(e) => setDeliveryTime(e.target.value.trim())}
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 text-sm rounded-md"
                >
                  <option value="">Delivery time</option>
                  <option value="20">20 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="40">40 minutes</option>
                  <option value="50">50 minutes</option>
                  <option value="60">60+ minutes</option>
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
