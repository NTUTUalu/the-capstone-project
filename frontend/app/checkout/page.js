"use client";
import Link from "next/link";
import Image from "next/image";
import On from "../components/second-Footer/second-Footer"; //importing a footer
import { BASE_API_URL } from "../../constants";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [supplier, setSupplier] = useState("");
  const [product, setProduct] = useState(null);

  //we will use router to go to another page after successful signup
  const router = useRouter();
  const params = useSearchParams();
  const productId = params.get("productId");
  const supplierId = params.get("supplierId");
  const quantity = params.get("quantity");
  const totalCost = product?.itemCost * quantity;


  const successPayment = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    console.log("hello world")
    
    createOrder();
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };


  const config = {
    reference: new Date().getTime().toString(),
    currency: "RWF",
    email: email,
    amount: totalCost * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_aec0a77b8d196fd42f7b11ef3f96dce59c799646",
  };

  
 
  

  // you can call this function anything

  //using useEffect to display error for limited time
  //this is
  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [error]);

  const createOrder = () => {
    try {
      fetch(`${BASE_API_URL}/orders/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: name,
          clientAddress: address,
          clientEmail: email,
          productId: productId,
          supplierId: supplierId,
          quantity: quantity,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        
          toast.success("order placed successfully!")
            router.push("/success"); // Navigate to the success page after the toast disappears
         
        })
        .catch((err) => {
          toast.error("order processing failed")
          console.log(err);
        });
    } catch (error) {
      toast.error("order processing failed")
      console.log("error during registration: ", error);
    }
  };

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
    fetch(`${BASE_API_URL}/supplier/` + supplierId)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data object has a "data" property which is an array
        console.log(data);
        setSupplier(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., display a message to the user
      });
  }, [supplierId]);
  console.log(supplier);
  console.log(product);
  useEffect(() => {
    //check the local storage for token
    const token = localStorage.getItem("token");
    const supplierId = localStorage.getItem("supplierId");
    const transporterId = localStorage.getItem("transporterId");

    if (token && (supplierId || transporterId)) {
      router.push("/Dashboard");
    } else if (token && !supplierId && !transporterId) {
      router.push("/decision");
    }
  }, []);

  const Paystack = (props) => {

    const initializePayment = usePaystackPayment(config);
    return (
      <div>
         
           <button
                  // onClick={createOrder}
                  //this
                  onClick={(e) => {
                    e.preventDefault()
                    if (!props.email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                      //we are saying the first character must be an alphabet, there will be a space, then any character from A-z
                      setError("  Invalid email!");
                
                      return;
                    }
                    initializePayment(successPayment, onClose);
                  }}
                  type="submit"
                  className="inline-block w-64 rounded-3xl h-12 mb-2 bg-amber-400 px-6 pb-2 pt-2.5 text-sm tracking-wider uppercase leading-normal text-yellow-800 font-semibold transition duration-150 ease-in-out hover:bg-amber-400 "
                >
                  Proceed to payment
                </button>
      </div>
    );
};

  return (
    <>
      <div className="wrapper flex w-full bg-blue-5 h-fit min-h-screen fade-in">
        <div className="right flex flex-col h-full bg-amber-2 bg-pink-6 w-full">
          <div className="middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="grid grid-cols-1 gap-8 w-full mx-52 justify-items-center  rounded-3xl min-w-72 bg-yellow-900 my-10 p-4 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.7),0_10px_20px_-2px_rgba(0,0,0,0.4)]dark:bg-neutral-7">
              <form className="w-full h-fit grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 bg-pink-3">
                <div className="grid grid-cols-2 grid-row-1 gap-4 p-5 bg-yellow-0 w-full h-60 rounded-3xl border border-white ">
                  <div className="flex flex-col tracking-wide p-4 bg-pink-1 border-r-2 border-white ">
                    <h4 className="text-amber-400 tracking-wide font-medium mb-1 text-2xl">
                      {product?.productName}
                    </h4>
                    <h4 className="text-white font- tracking-wide mb-1">
                      Total: RWF {product?.itemCost * quantity}
                    </h4>
                    <h4 className="text-white font- tracking-wide mb-1">
                      Quantity: {quantity}
                    </h4>
                    <h4 className="text-white font- tracking-wide mb-1">
                      Province: {supplier?.location}
                    </h4>
                    <h4 className="text-white font- tracking-wide mb-1">
                      Supplier Name: {supplier?.businessName}
                    </h4>
                  </div>
                  <div className=" bg-blue-1 position-relative">
                    <div className=" flex justify-center w-full h-full items-center position-relative bg-red-2">
                      {product?.imageName && (
                        <Image
                          src={"/" + product?.imageName}
                          alt="Vercel Logo"
                          className="dark:invert rounded-3xl w-72 h-48"
                          width={180}
                          height={25}
                          priority
                        />
                      )}
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
                        value={name}
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
                        value={email}
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
                        value={address}
                        required
                        maxLength="42"
                      />
                      <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-normal text-sm tracking-wider opacity-40 transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9]  peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white">
                        Address
                      </label>
                    </div>
                    {error && (
                  <div className="bg-red-500 flex text-wrap text-white w-full max-w-60 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}
                  </div>
                </div>
               <Paystack email={email}/>
              </form>
            </div>
          </div>
          <On />
        </div>
      </div>
    </>
  );
}
