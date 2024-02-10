"use client";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import On from "../components/second-Footer/second-Footer";
import { Table, Pagination } from "antd";

import { useState } from "react";

export default function Dashboard2() {
  const [activeTab, setActiveTab] = useState("transport");

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
  const pageSize = 11;
  return (
    <>
      <div className="wrapper flex w-full bg-pink-4 h-screen">
        <div className="left h-full w-48 bg-yellow-900 flex flex-col">
          <div className="top h-full w-full flex flex-col pt-4">
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
              className="mr-4 flex list-none flex-col flex-wrap pl-0"
              role="tablist"
              data-te-nav-ref
            >
              <li role="presentation" className="flex-grow text-center">
                <button
                  onClick={() => setActiveTab("transport")}
                  className={`my-2 block border-x-0 border-b-2 border-t-0  px-2 pb-3.5 pt-4 text-xs uppercase leading-tight  hover:isolate     ${
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
              <li role="presentation" className="flex-grow text-center">
                <button
                  onClick={() => setActiveTab("opportunities")}
                  className={`my-2 block border-x-0 border-b-2 border-t-0  px-2 pb-3.5 pt-4 text-xs uppercase leading-tight       ${
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
            </ul>
          </div>
          <div className="bottom flex bg-blue-1 justify-center w-full h-28">
            <Link
              href="/"
              className="border border-white h-fit px-7 py-1 w-fit rounded-3xl font-normal max-md:mr-3"
            >
              {" "}
              <button className="text-white font-semibold flex justify-center ">
                HOME
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="right flex flex-col h-full bg-amber-2 w-full">
          <div className="top bg-white border-b-2 border-slate-100 w-full h-10"></div>
          <div className="middle bg-amber-4 h-full w-full">
            <div className="my-2 bg-blue-4 px-4 h-full">
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
                      <h1 className="w-full bg-blue-3 text-center my-8 text-lg tracking-wide font-semibold">
                        Find Suitable Transportation
                      </h1>
                      <Table
                        className="w-full"
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                      />
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
