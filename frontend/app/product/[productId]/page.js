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

  const [product, setProduct] = useState(null);

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
      { product && 
        <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
          <div className="left flex bg-pink-7 flex-col  w-1/4   justify-center  max-md:justify-start max-md:mt-0 max-sm:w-4/6">
            <div className="flex justify-center  ">
              <Image
               
                src={"/"+product?.imageName}
                alt="Vercel Logo"
                className="dark:invert rounded-3xl w-5/6"
                width={570}
                height={25}
                priority
              />
            </div>
          </div>
          <div className=" leading-8 left flex flex-col bg-blue-4 justify-center w-3/4  max-md:justify-start max-md:mt-0 max-md:pt-7 max-sm:w-full">
            <h4 className="text-slate-400 font-medium mb-1">
              Our Transportation Partnership
            </h4>
            <h1 className="text-slate-950 font-bold text-2xl w-5/6  mb-3 max-md:text-3xl max-md:w-full  max-sm:text-2xl max-sm:w-5/6">
              {product?.productName}
            </h1>
            <h4>
              Cost Per Kg:
              <span className="text-amber-500 font-normal">
                RWF {product?.itemCost}
              </span>
            </h4>
            <h4>
              Delivery Time (+/-) :{" "}
              <span className="text-amber-500 font-normal">
                {product?.deliveryTime} minutes
              </span>
            </h4>
            <h4>
              Availability :{" "}
              <span className="text-amber-500 font-normal">In Stock</span>
            </h4>
            <p className="w-1/2 text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold max-sm:w-full">
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
              <button className="text-amber-500">FIND SUPPLIER</button>{" "}
            </Link>
          </div>
        </div>
      }
      {!product && <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <p>Loading...</p>
        </div>}
      <Footer />
    </>
  );
}
