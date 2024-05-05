"use client";
import Link from "next/link";
import OnboardingFooter from "../components/second-Footer/second-Footer";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "../../constants";

export default function MotorSignup() {
  const [deliveryProvince, setDeliveryProvince] = useState("");
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
      }, 2000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deliveryProvince || !transportType || !availabilityStatus) {
      setError("One of the drop-down options is not selected!");

      return;
    }

    try {
      fetch(`${BASE_API_URL}/become-transporter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          deliveryProvince,
          transportType,
          availabilityStatus,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json) {
            const form = e.target;
            console.log(json);
            localStorage.setItem("transporterId", json._id);
            form.reset();
            toast.success("Registration successful!");
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



  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-screen fade-in">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="block w-80 h-fit rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 my-10 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form
                className="flex flex-col  "
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full bg-gray-3 text-center mb-6 font-semibold tracking-wide text-white text-2xl">
                  Register Transport
                </h3>

                <p className="text-sm text-left mb-8 text-slate-200 tracking-wider mt-4 ">
                  Provide transport information below:
                </p>

                <select
                  value={deliveryProvince}
                  default=""
                  onChange={(e) => setDeliveryProvince(e.target.value)}
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 text-sm rounded-md"
                >
                  <option value="">Delivery District</option>
                  <option value="Gasabo">Gasabo </option>
                  <option value="Nyarugenge">Nyarugenge </option>
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
                  className="inline-block w-full rounded-3xl mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 mx-auto"
                >
                  Register
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
