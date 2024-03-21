"use client";

import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Table, Pagination } from "antd";
import Card from "./card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {BASE_API_URL} from "../../constants"
import TransporterCard from "./transporterCard"

export default function Dashboard2() {
  const [order, setOrder] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [transportType, setTransportType] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("");
  const [error, setError] = useState("");
  const [transporters, setTransporters] = useState([]);

  const router = useRouter();

  const columns = [
    {
      title: "Transport Type",
      dataIndex: "transport_Type",
      sorter: (a, b) => a.transport_Type.localeCompare(b.transport_Type),
      width: "20%",
    },
    {
      title: "Delivery Provinces",
      dataIndex: "delivery_provinces",
      filters: [
        { text: "Kigali", value: "Kigali" },
        { text: "Nyagatare", value: "Nyagatare" },
        { text: "Bugesera", value: "Bugesera" },
        { text: "Kibuye", value: "Kibuye" },
        { text: "Nyarugenge", value: "Nyarugenge" },
        { text: "Ngoma", value: "Ngoma" },
        { text: "Eastern Province", value: "Eastern Province" },
        { text: "Southern Province", value: "Southern Province" },
        { text: "Western Province", value: "Western Province" },
        { text: "Kicukiro", value: "Kicukiro" },
      ],
      onFilter: (value, record) => record.delivery_provinces.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: "30%",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      width: "20%",
    },
  ];

  const data = [
    {
      key: "1",
      transport_Type: "Tuk-tuk",
      delivery_provinces: "Kigali",
      name: "Ally Brown",
      contact: "+250 780 000 000",
    },
    {
      key: "2",
      transport_Type: "Tuk-tuk",
      delivery_provinces: "Kigali",
      name: "Brian Aya",
      contact: "+250 780 000 000",
    },
    {
      key: "4",
      transport_Type: "Motor",
      delivery_provinces: "Eastern Province",
      name: "Alice Dier",
      contact: "+250 780 000 000",
    },
    {
      key: "5",
      transport_Type: "Motor",
      delivery_provinces: "Eastern Province",
      name: "Patrick Musa",
      contact: "+250 780 000 000",
    },
    {
      key: "6",
      transport_Type: "Pick Up Truck",
      delivery_provinces: "Kicukiro",
      name: "Alex Lenza",
      contact: "+250 780 000 000",
    },
    {
      key: "8",
      transport_Type: "Pick Up Truck",
      delivery_provinces: "Nyagatare",
      name: "Ed Naya",
      contact: "+250 780 000 000",
    },
    {
      key: "9",
      transport_Type: "Motor",
      delivery_provinces: "Kibuye",
      name: "Raba Africa",
      contact: "+250 780 000 000",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const [loggedUserId, setloggedUserId] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const supplierId = localStorage.getItem("supplierId");
    const transporterId = localStorage.getItem("transporterId");

    if (supplierId) {
      setloggedUserId(supplierId);
      setUserType("supplier");
      setActiveTab("orders");
    } else if (transporterId) {
      setloggedUserId(transporterId);
      setUserType("transporter");
      setActiveTab("transporter");
    }
  }, []);

  const fetchOrders = async () => {
    try {
      const supplierId = localStorage.getItem("supplierId");
      if (!supplierId) return; // If supplierId is not available, return early

      const url = `${BASE_API_URL}/orders/supplier/${supplierId}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setOrder(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error gracefully, e.g., display a message to the user
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array to run the effect only once


//using useEffect to display error for limited time
useEffect(() => {
  if (error) {
    const timeoutId = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(timeoutId); // Cleanup function
  }
}, [error]);

  //using useEffect to display error for limited time
  const fetchTransporterData = async () => {
    try {
      const transporterId = localStorage.getItem("transporterId");
      if (!transporterId) return;
  
      const response = await fetch(`${BASE_API_URL}/transporter/${transporterId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Extract error message from response
        throw new Error(`Failed to fetch transporter data: ${errorMessage}`);
      }
  
      const data = await response.json();
  
      // Set the transporter's data to state variables
      setDeliveryProvince(data.deliveryProvince);
      setTransportType(data.transportType);
      setAvailabilityStatus(data.availabilityStatus);
    } catch (error) {
      console.error("Error fetching transporter data:", error);
    }
  };
  
 

  // Modify the handleSubmit function to update the transporter's data
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    if (!deliveryProvince || !transportType || !availabilityStatus) {
      setError("One of the drop-down options is not selected!");
      return;
    }
  
    try {
      const transporterId = localStorage.getItem("transporterId");
      const response = await fetch(`${BASE_API_URL}/transporter/update/${transporterId}`, {
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
      });
  
      if (!response.ok) {
        throw new Error("Failed to update transporter data");
      }
  
      const json = await response.json();
      console.log(json);
  
      // Reset the form and show success message
      const form = e.target;
      form.reset();
      toast.success("Update successful!");
      
    } catch (error) {
      console.error("Error updating transporter data:", error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/get-transporters`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch transporters");
        }

        const data = await response.json();
        setTransporters(data);
      } catch (error) {
        console.error("Error fetching transporters:", error);
      }
    };

    fetchTransporters();
  }, []);


  return (
    <>
      <div className="wrapper flex w-full bg-pink-4 min-h-screen ">
        <div className="left min-h-screen h-full w-48 bg-yellow-900 flex flex-col justify-between">
          <Toaster position="top-center" reverseOrder={false} />
          <div className=" h-full w-full flex flex-col pt-4 bg-pink-3">
            <Link href="#" className="bg-pink-3 flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Poultry plus logo"
                className=""
                width={100}
                height={25}
                priority
              />
            </Link>
            <ul
              className="mr- flex list-none flex-col flex-wrap pl-0 bg-amber-5"
              role="tablist"
              data-te-nav-ref
            >
            {userType === "transporter" && (
                <li role="presentation" className="flex-grow  w-full ">
                  <button
                    onClick={() => setActiveTab("transporter")}
                    className={`my-2 block border-x-0  text-left pl-5 border-b-2 border-t-0 w-full  pb-3.5 pt-4 text-xs uppercase leading-tight  hover:isolate     ${
                      activeTab === "transporter"
                        ? "text-amber-500 border-amber-500 dark:data-[te-nav-active]:border-primary-400"
                        : "text-neutral-500 dark:hover:bg-transparent dark:data-[te-nav-active]:text-primary-400 border-transparent"
                    }`}
                    data-te-toggle="pill"
                    data-te-target="#tabs-home03"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-home03"
                    aria-selected="true"
                  >
                    Update Profile
                  </button>
                </li>
              )}
              {userType === "supplier" && (
                <li role="presentation" className="flex-grow  w-full ">
                  <button
                    onClick={() => setActiveTab("transport")}
                    className={`my-2 block border-x-0  text-left pl-5 border-b-2 border-t-0 w-full  pb-3.5 pt-4 text-xs uppercase leading-tight  hover:isolate     ${
                      activeTab === "transport"
                        ? "text-amber-500 border-amber-500 dark:data-[te-nav-active]:border-primary-400"
                        : "text-neutral-500 dark:hover:bg-transparent dark:data-[te-nav-active]:text-primary-400 border-transparent"
                    }`}
                    data-te-toggle="pill"
                    data-te-target="#tabs-home03"
                    data-te-nav-active
                    role="tab"
                    aria-controls="tabs-home03"
                    aria-selected="true"
                  >
                    Find Transport
                  </button>
                </li>
              )}
              {userType === "supplier" && (
                <li role="presentation" className="flex-grow ">
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`my-2 block text-left border-x-0 border-b-2 w-full border-t-0 pl-5 pb-3.5 pt-4 text-xs uppercase leading-tight       ${
                      activeTab === "orders"
                        ? "text-amber-500 border-amber-500 dark:data-[te-nav-active]:border-primary-400"
                        : "text-neutral-500 dark:hover:bg-transparent dark:data-[te-nav-active]:text-primary-400 border-transparent"
                    }`}
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile03"
                    role="tab"
                    aria-controls="tabs-profile03"
                    aria-selected="false"
                  >
                    Orders
                  </button>
                </li>
              )}
              {userType === "supplier" && (
                <li role="presentation" className="flex-grow">
                  <button
                    onClick={() => setActiveTab("opportunities")}
                    className={`my-2 block border-x-0 border-b-2  w-full border-t-0  text-left pl-5 pb-3.5 pt-4 text-xs uppercase leading-tight       ${
                      activeTab === "opportunities"
                        ? "text-amber-500 border-amber-500 dark:data-[te-nav-active]:border-primary-400"
                        : "text-neutral-500 dark:hover:bg-transparent dark:data-[te-nav-active]:text-primary-400 border-transparent"
                    }`}
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile03"
                    role="tab"
                    aria-controls="tabs-profile03"
                    aria-selected="false"
                  >
                    Opportunities
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="bottom flex flex-col gap-2 bg-blue-1 items-center w-full h-28 bg-slate-4">
            <Link
              href="/"
              className="border border-white flex justify-center h-fit px- py-1 w-32 rounded-3xl font-normal max-md:mr-3"
            >
              {" "}
              <button className="text-white font-semibold  flex justify-center  ">
                HOME
              </button>{" "}
            </Link>
            <button
              onClick={() => {
                localStorage.clear();
                toast.success("Logout successful!");
                setTimeout(() => {
                  router.push("/"); // Navigate to the success page after the toast disappears
                }, 3000);
              }}
              className="border border-white h-fit  py-1 w-32 flex justify-center rounded-3xl font-normal max-md:mr-3"
            >
              {" "}
              <p className="text-white font-semibold ">Logout</p>{" "}
            </button>
          </div>
        </div>

        <div className="right flex flex-col h-full bg-amber-2 w-full">
          <div className="middle bg-amber-4 h-full w-full">
            <div className="top bg-white border-b-2 border-slate-100 w-full h-10"></div>
            <div className="my-2 bg-blue-4 px-4 h-full">
              {activeTab === "transporter" && (
                <div
                  className="h-full bg-green-4 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="tabs-home03"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tab03"
                  data-te-tab-active
                >
                  <div className="h-full w-full">
                    <div className="h-fit w-full bg-pink-3 text-amber-500 font-semibold tracking-wider">
                      Transporter Profile
                    </div>
                  
                    <div className=" middle flex justify-center items-center bg-amber-4 h-full  w-full bg-pink-8">
            <Toaster position="top-center" reverseOrder={false} />
            <div className=" block w-80 h-fit rounded-3xl min-w-72 bg-yellow-900 px-6 pt-3 my-10 pb-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-7">
              <form
                className="flex flex-col  "
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h3 className="w-full bg-gray-3 text-center mb-6 font-semibold tracking-wide text-white text-2xl">
                  Update Transport
                </h3>

                <p className="text-sm text-left mb-8 text-slate-200 tracking-wider mt-4 ">
                  Provide transport information below:
                </p>

                <select
                  value={deliveryProvince}
                  onChange={(e) => setDeliveryProvince(e.target.value)}
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
                 
                  className=" flex mb-6 p-1  w-60 bg-slate-200 opacity-40 text-sm  rounded-md"
                >
                  <option value="">Transport Type</option>

                  <option value="Tuk-Tuk">Tuk-Tuk</option>
                  <option value="Motor">Motor </option>
                  <option value="Pick-up Truck">Pick-up Truck</option>
                </select>

                <select
                  value={availabilityStatus}
                 
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
                  Update
                </button>
                {error && (
                  <div className="bg-red-500 flex text-wrap text-white w-full max-w-80 tracking-wider text-xs py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <div className="mb-6 flex items-center justify-between">
               
                </div>
              </form>
            </div>
          </div>
                  </div>
                </div>
              )}
              {activeTab === "transport" && (
                <div
                  className="h-full bg-green-4 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                  id="tabs-home03"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tab03"
                  data-te-tab-active
                >
                  <div className="h-full w-full">
                    <div className="h-fit w-full bg-pink-3 text-amber-500 font-semibold tracking-wider">
                      Find Transport
                    </div>
                    <div className=" bg-amber-8 flex flex-col w-full px-20">
                      <h1 className="w-full bg-blue-3 text-center my-2 text-lg tracking-wide font-semibold">
                        Find Suitable Transportation
                      </h1>
                      {/* <Table
                        className="w-full"
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                      /> */}
                        {transporters.map((transporter) => (
        <TransporterCard
          key={transporter._id} // Assuming each transporter has a unique identifier
          names={transporter.names} // Assuming names is a property of each transporter
          mobileNumber={transporter.mobileNumber} // Assuming mobileNumber is a property of each transporter
          transportType={transporter.transportType} // Assuming transportType is a property of each transporter
          availabilityStatus={transporter.availabilityStatus} // Assuming availabilityStatus is a property of each transporter
          deliveryProvince={transporter.deliveryProvince} // Assuming deliveryProvince is a property of each transporter
          transporterId={transporter._id} // Assuming _id is the unique identifier of each transporter
        />
      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "opportunities" && (
                <div
                  className=" transition-opacity duration-150 ease-linear "
                  id="tabs-profile03"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab03"
                >
                  <div className="h-full w-full">
                    <div className="h-fit w-full bg-pink-3 text-amber-500 font-semibold tracking-wider">
                      Opportunities
                    </div>
                    <div className="bottom bg-blue-3 h-full flex">
                      <div className=" flex justify-center items-start w-20 p-2">
                        <div className="bg-blue-950 p-2 rounded-full flex justify-center items-center">
                          <Image
                            src="/bed2.png"
                            alt="Vercel Logo"
                            className="dark:invert "
                            width={25}
                            height={30}
                            priority
                          />
                        </div>
                      </div>
                      <div className="bg-yellow-2 w-full pr-10 p-2">
                        <h2 className="font-bold tracking-wide text-amber-900">
                          Greenwhich Hotel
                        </h2>
                        <h4 className="text-slate-600 text-xs tracking wider opacity-90">
                          5 hours ago
                        </h4>
                        <p className="mt-2 text-slate-500 font-medium text-base tracking-wide">
                          Attention Agricultural Suppliers,
                          <br />
                          <br />
                          Greenwich Hotel, located at [Address], is actively
                          seeking premium agricultural product providers. If
                          your offerings align with our commitment to quality
                          and sustainability, contact our procurement team at
                          [Telephone Number] to explore collaboration
                          opportunities. Elevate the standard of hospitality
                          with us.
                        </p>
                        <h2 className="mb-2 mt-1 font-semibold text-slate-500">
                          Request:
                        </h2>
                        <div className="ml-8 bg-blue-3 w-80 flex">
                          <div className="w-2/5 bg-yellow-3 text-slate-500 flex flex-col">
                            <h3 className="">Product type :</h3>
                            <h3 className=" ">Quantity :</h3>
                            <h3 className=" ">Bid :</h3>
                            <h3 className=" ">Deadline :</h3>
                          </div>
                          <div className="w-3/5 bg-yellow-1 text-amber-900 flex flex-col">
                            <h3 className=" ">Irish Potatoes</h3>
                            <h3 className=" ">45 Kg</h3>
                            <h3 className=" ">RWF 5,000 per kg</h3>
                            <h3 className=" ">22nd February, 5pm</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "orders" && (
                <>
                  <div className="h-fit w-full bg-pink-3 text-amber-500 font-semibold tracking-wider">
                    Orders
                  </div>
                  {order &&
                    order.map((order) => (
                      <Card
                        key={order?._id} // Assuming each order has a unique identifier, adjust accordingly
                        clientAddress={order?.clientAddress} // Assuming province is a property of each order
                        totalAmount={order?.totalAmount} // Assuming total is a property of each order
                        productName={order.productId?.productName} // Assuming productName is a property of each order
                        clientName={order?.clientName} // Assuming clientName is a property of each order
                        clientEmail={order?.clientEmail} // Assuming quantity is a property of each order
                        orderId={order?._id}
                        refreshOrders={() => fetchOrders()}
                        orderStatus={order?.status}
                      />
                    ))}
                </>
              )}
            </div>
          </div>
          <div className="bottom flex justify-center items-center bg-blue- h-16">
            <h3 className="flex w-fit h-fit text-xs bg-pink- text-slate-400">
              Copyright{" "}
              <Image
                src="/copyright.png"
                alt="Poultry plus logo"
                className="h-4 flex place-self-center
                      mx-1 opacity-60"
                width={15}
                height={15}
                priority
              />{" "}
              2023 All right reserved | African 2-2 Inc.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
