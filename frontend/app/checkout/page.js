"use client";
import Link from "next/link";
import Image from "next/image";
import On from "../components/second-Footer/second-Footer"; //importing a footer

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
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

  useEffect(() => {
    //check the local storage for token
    const token = localStorage.getItem("token");
    const supplierId = localStorage.getItem("supplierId");
    const transporterId = localStorage.getItem("transporterId");

    if (token && (supplierId || transporterId)) {
      router.push("/dashboard");
    } else if (token && !supplierId && !transporterId) {
      router.push("/decision");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address || !name || !email) {
      setError("All fields must be filled!");

      return;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      //we are saying the first character must be an alphabet, there will be a space, then any character from A-z
      setError("  Invalid email!");

      return false;
    }

    try {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber,
          password,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          localStorage.setItem("token", json.data.token);
          if (json.data) {
            const form = e.target;
            form.reset();
            if (json.data?.supplier) {
              //they are supplier go to dashboard
              localStorage.setItem("supplierId", json.data.supplier._id);
              router.push("/dashboard");
            } else if (json.data?.transporter) {
              localStorage.setItem("transporterId", json.data.transporter._id);
              router.push("/dashboard");
            } else {
              router.push("/decision");
            }
          } else {
            console.log("Login failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("error during registration: ", error);
    }
  };

  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-fit min-h-screen">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            <div className="grid grid-cols-1 gap-8 w-full mx-52 justify-items-center  rounded-3xl min-w-72 bg-yellow-900 my-10 p-4 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.4)]dark:bg-neutral-7">
            <form className="w-full h-fit grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 bg-pink-3">
              <div className="grid grid-cols-2 grid-row-1 gap-4 p-5 bg-yellow-0 w-full h-60 rounded-3xl border border-white ">
                <div className="flex flex-col tracking-wide p-4 bg-pink-1 border-r-2 border-white ">
                  <h4 className="text-amber-400 tracking-wide font-medium mb-1 text-2xl">
                    WHITE EGGS
                  </h4>
                  <h4 className="text-white font- tracking-wide mb-1">
                    Quantity: 22
                  </h4>
                  <h4 className="text-white font- tracking-wide mb-1">
                    Province: Mpumalanga
                  </h4>
                  <h4 className="text-white font- tracking-wide mb-1">
                    Supplier Name: JJ Suppliers
                  </h4>
                </div>
                <div className=" bg-blue-1 position-relative">
                  <div className=" flex justify-center w-full h-full items-center position-relative bg-red-2">
                    <Image
                      src="/irish.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-3xl w-72 h-48"
                      width={180}
                      height={25}
                      priority
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 grid-row-1 gap-4 p-5 bg-yellow- w-full h-56 rounded-3xl border border-white">
                <div className="w-full h-full bg-pink-1 pr-16">
                  <div className="relative mb-6 text-sm ">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={(e) => setName(e.target.value.trim())}
                      required
                      maxLength="35"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6 text-sm">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={(e) => setEmail(e.target.value.trim())}
                      required
                      maxLength="32"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                      Email
                    </label>
                  </div>
                  <div className="relative mb-6 text-sm">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded text-amber-500 border-0 bg-transparent px-3 pt-3 leading-[1.6] tracking-wider outline-none transition-all duration-200 border-b border-amber-500 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      onChange={(e) => setAddress(e.target.value.trim())}
                      required
                      maxLength="12"
                    />
                    <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                      Address
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="inline-block w-64 rounded-3xl h-12 mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 "
              >
                Proceed to payment
              </button>
              </form>
            </div>
          </div>
          <On />
        </div>
      </div>
    </>
  );
}
