"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Productdescription() {
  const { productId } = useParams();
  console.log(productId);

  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deliveryProvince || !supplier) {
      setError("One of the drop-down options is not selected!");

      return;
    }
  };

  // Initialize quantity state with initial value of 1
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment action
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement action
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalCost = product?.itemCost * quantity;

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 6000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [error]);

  useEffect(() => {
    fetch("http://localhost:8080/products/" + productId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data object has a "data" property which is an array
        console.log(data);
        setProduct(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., display a message to the user
      });
  }, [productId]);

  return (
    <>
      <Navigation />
      {product && (
        <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
          <div className="left flex flex-col  w-80   justify-center  max-md:justify-start max-md:mt-0 max-sm:w-4/6 mr-6">
            <div className="flex justify-center bg-pink- w-full h-full ">
              <Image
                src={"/" + product?.imageName}
                alt="Vercel Logo"
                className="dark:invert rounded-3xl "
                width={570}
                height={25}
                priority
              />
            </div>
          </div>
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className=" leading-8 left flex flex-col bg-blue-4 justify-center w-3/4  max-md:justify-start max-md:mt-0 max-md:pt-7 max-sm:w-full bg-pink-4"
          >
            <h4 className="text-slate-400 font-medium mb-1">
              Our Transportation Partnership
            </h4>
            <h1 className="text-slate-950 font-bold text-2xl w-5/6  mb-3 max-md:text-3xl max-md:w-full  max-sm:text-2xl max-sm:w-5/6">
              {product?.productName}
            </h1>
            <h4>
              Availability :{" "}
              <span className="text-amber-500 font-normal">In Stock</span>
            </h4>
            <div className="flex items-center">
              <h4>
                Cost Per Kg:
                <span className="text-amber-500 font-normal">
                  RWF {product?.itemCost}
                </span>
              </h4>
              <div className="flex px-2 bg-red-3 h-5 items-center ml-2 font-semibold">
                Total:
                <span className="px-2 flex h-full items-center w-fit font-normal text-sm">
                  RWF {totalCost}
                </span>
              </div>
            </div>
            <div className="flex bg-blue-3 items-center">
              <h1>Quantity :</h1>
              <div className="flex px-2 bg-red-3 h-5">
                <span
                  className="cursor-pointer bg-slate-200 border border-slate-400 flex h-full items-center w-fit p-1"
                  onClick={handleDecrement}
                >
                  -
                </span>
                <span className="px-2 flex h-full items-center w-fit cursor-default">
                  {quantity}
                </span>
                <span
                  className="cursor-pointer bg-slate-200 border border-slate-400 flex h-full items-center w-fit p-1"
                  onClick={handleIncrement}
                >
                  +
                </span>
              </div>
            </div>
            <div className="bg-yellow-3 grid grid-rows-1 grid-cols-2 gap-2 py-2 w-fit h-fit items-center bg-slate-2">
              <div className="relative mb- w-60 text-sm">
                <select
                  value={deliveryProvince}
                  onChange={(e) => setDeliveryProvince(e.target.value)}
                  className="flex p-1 w-60 bg-slate-300 opacity-40 text-sm rounded-md"
                >
                  <option value="">Select Province</option>
                  <option value="Kigali">Kigali</option>
                  <option value="Nyagatare">Nyagatare</option>
                  <option value="Bugesera">Bugesera</option>
                  <option value="Kibuye">Kibuye</option>
                  <option value="Nyarugenge">Nyarugenge</option>
                  <option value="Ngoma">Ngoma</option>
                  <option value="Eastern Province">Eastern Province</option>
                  <option value="Southern Province">Southern Province</option>
                  <option value="Western Province">Western Province</option>
                  <option value="Kicukiro">Kicukiro</option>
                </select>
              </div>

              <div className="relative mb- w-60 text-sm">
                {[
                  "Kigali",
                  "Nyagatare",
                  "Bugesera",
                  "Kibuye",
                  "Nyarugenge",
                ].includes(deliveryProvince) ? (
                  <select
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value.trim())}
                    default=""
                    className="flex p-1 w-60 bg-slate-300 opacity-40 text-sm rounded-md"
                  >
                    <option value="">Select Supplier</option>
                    <option value="Kigali farmers">Kigali farmers</option>
                    <option value="Three Brothers Supplier">
                      Three Brothers Supplier
                    </option>
                    <option value="Patrick Holdings">Patrick Holdings</option>
                  </select>
                ) : (
                  <select
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value.trim())}
                    default=""
                    className="flex p-1 w-60 bg-slate-300 opacity-40 text-sm rounded-md"
                  >
                    <option value="">Select Supplier</option>
                    <option value="JJ holdings">JJ holdings</option>
                    <option value="Anne Supermarket">Anne Supermarket</option>
                    <option value="Agri farmers">Agri farmers</option>
                  </select>
                )}
              </div>
            </div>
            
            <h4>
              Delivery Time <span className="text-xs">(+/-)</span> :{" "}
              <span className="text-amber-500 font-normal">
                {product?.deliveryTime} minutes
              </span>
            </h4>
            {error && (
              <div className="bg-red-500 flex text-wrap text-white w-full max-w-80 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <p className="w-8/12 mt- text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold bg-slate-4 max-sm:w-full">
              Poultry Plus, where farm-fresh goodness meets swift delivery! 🚚🥚
              Explore a world of quality eggs and farm produce, delivered to
              your doorstep in a heartbeat. 🌐🍳 #PoultryPlusDelivers
              #FarmToDoorPerfection
            </p>
            <Link
              href="/"
              className="border border-amber-500 px-7 py-1 w-fit rounded-3xl font-normal max-md:mr-3"
            >
              {" "}
              <button className="text-amber-500">CHECKOUT</button>{" "}
            </Link>
          </form>
        </div>
      )}
      {!product && (
        <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
          <p>Loading...</p>
        </div>
      )}
      <Footer />
    </>
  );
}
