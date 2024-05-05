"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {BASE_API_URL} from "../../../constants"

export default function Productdescription() {
  const { productId } = useParams();
  const { supplierId } = useParams();
  // console.log(productId);

  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!deliveryProvince || !supplier) {
      setError("One of the drop-down options is not selected!");

      return;
    }
  };

  // Initialize quantity state with initial value of 1
  

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
    fetch(`${BASE_API_URL}/products/` + productId)
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

  useEffect(() => {
    fetch(`${BASE_API_URL}/get-suppliers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data object has a "data" property which is an array
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., display a message to the user
      });
  }, []);

  return (
    <>
      <Navigation />
      {product && (
        <div className="flex flex-col w-full min-h-screen fade-in">
          <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
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
                Product Description
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
              
              <h4>
                Delivery Time <span className="text-xs">(+/-)</span> :{" "}
                <span className="text-amber-500 font-normal">
                  {product?.deliveryTime} minutes
                </span>
              </h4>
              {error && (
                <div className="bg flex text-wrap text-white w-full max-w-80 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
              <p className="w-8/12 mt- text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold bg-slate-4 max-sm:w-full">
                Poultry Plus, where farm-fresh goodness meets swift delivery!
                🚚🥚 Explore a world of quality eggs and farm produce, delivered
                to your doorstep in a heartbeat. 🌐🍳 #PoultryPlusDelivers
                #FarmToDoorPerfection
              </p>
              {/* <Link
              href="/checkout"
              className="border border-amber-500 px-7 py-1 w-fit rounded-3xl font-normal max-md:mr-3"
            >
              {" "}
              <button className="text-amber-500">CHECKOUT</button>{" "}
            </Link> */}
            </form>
          </div>
          <div
            className="h-full bg-g min-h-screen transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home03"
            role="tabpanel"
            aria-labelledby="tabs-home-tab03"
            data-te-tab-active
          >
            <div className="h-full w-full">
              <div className=" bg-amber-8 flex flex-col w-full px-20">
                <h1 className="w-full bg text-center my-8 text-lg tracking-wide font-semibold">
                  Find Suitable Supplier
                </h1>
                <table className=" grid grid-cols-1 grid-rows-auto border border-slate-400">
                  <thead className="w-full h-10 flex justify-center align-center ">
                    <tr className="grid grid-cols-3 w-full h-full ">
                      <th className=" flex justify-center items-center border-r border-slate-400">
                        Supplier Names
                      </th>
                      <th className=" border-r flex justify-center items-center border-slate-400">
                        District
                      </th>
                      <th className=" border-r flex justify-center items-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="grid grid-cols-1 w-full h-fit  ">
                    {data.map((supplier) => (
                      <tr
                        className="grid grid-cols-3 w-full h-12 b items-center  border-y border-slate-400"
                        key={supplier.id}
                      >
                        <td className="bg-amber-100 flex justify-center items-center h-full border-r border-slate-400">
                          {supplier.businessName}
                        </td>
                        <td className="bg-slate-200 flex justify-center items-center text-center h-full border-r border-slate-400">
                          {supplier.location}
                        </td>
                        <td className="bg-amber-100 flex justify-center items-center  h-full">
                          <Link
                          href={`/checkout?productId=${productId}&supplierId=${supplier._id}&quantity=${quantity}`}
                            className="bg-amber-500 rounded-3xl h-8 w-36 flex justify-center items-center"
                           
                          >
                            Checkout
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
