"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import MoodSetter from "../components/moodsetter/mood";
// import MoodIcons from "./mainPage/moodIcons/moodIcons"
// import Mission from "./mainPage/Mission/mission";
// import Transportation from "./mainPage/transportation/transportation";
// import Banner from "./mainPage/MainBanner/Banner";
// import Products from "./mainPage/Products/products"
import { Table, Pagination } from "antd";
// import Dashboard from "./otherpages/Dashboard/dashboard"
// import Login from "./otherpages/login/login"
// import dynamic from "next/dynamic";

// const Login = dynamic(() => import("./otherpages/login/login"), {
//   ssr: false,
// });
// const SignUp = dynamic(() => import("./otherpages/signup/signup"), {
//   ssr: false,
// });

// const Dashboard2 = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
//   ssr: false,
// });
// const Dashboard = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
//   ssr: false,
// });

export default function Productdescription() {
  const columns = [
    {
      title: "Delivery Mode",
      dataIndex: "delivery",
      sorter: (a, b) => a.delivery.localeCompare(b.delivery),
      width: "20%",
    },
    {
      title: "Location",
      dataIndex: "location",
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
      onFilter: (value, record) => record.location.startsWith(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "Business Name",
      dataIndex: "business_name",
      sorter: (a, b) => a.business_name.localeCompare(b.name),
      width: "20%",
    },
    {
      title: "Delivery Fee (RWF)",
      dataIndex: "delivery_fee",
      sorter: (a, b) => a.delivery_fee.localeCompare(b.delivery_fee),
      width: "20%",
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
      delivery: "Tuk-tuk",
      location: "Gasabo",
      business_name: "JJ Providers",
      delivery_fee: "2200",
      contact: "+250 780 000 000",
    },
    {
      key: "2",
      delivery: "Tuk-tuk",
      location: "Kicukiro",
      business_name: "ML Distributors",
      delivery_fee: "2500",
      contact: "+250 780 000 000",
    },
    {
      key: "4",
      delivery: "Motor",
      location: "Kicukiro",
      business_name: "Mmosa",
      delivery_fee: "2000",
      contact: "+250 780 000 000",
    },
    {
      key: "5",
      delivery: "Motor",
      location: "Gasabo",
      business_name: "Justin Inc",
      delivery_fee: "2300",
      contact: "+250 780 000 000",
    },
    {
      key: "6",
      delivery: "Pick Up Truck",
      location: "Kicukiro",
      business_name: "Patrick Suppliers",
      delivery_fee: "1800",
      contact: "+250 780 000 000",
    },
    {
      key: "8",
      delivery: "Pick Up Truck",
      location: "Gasabo",
      business_name: "Jessie Farm",
      delivery_fee: "2300",
      contact: "+250 780 000 000",
    },
    {
      key: "9",
      delivery: "Motor",
      location: "Nyarugenge",
      business_name: "Isa Suppliers",
      delivery_fee: "2000",
      contact: "+250 780 000 000",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const pageSize = 11;
  return (
    <>
      <Navigation />
      <div className="wrapper  flex w-full mt-10 h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <div className="left flex bg-pink-7 flex-col  w-1/4   justify-center  max-md:justify-start max-md:mt-0 max-sm:w-4/6">
          <div className="flex justify-center  ">
            <Image
              src="/Matoke.png"
              alt="Vercel Logo"
              className="dark:invert rounded-3xl w-5/6"
              width={570}
              height={25}
              priority
            />
          </div>
        </div>
        <div className=" leading-8 left flex flex-col bg-blue-4 justify-center w-3/4  max-md:justify-start max-md:mt-0 max-md:pt-7 max-sm:w-full">
          {/* <h4 className="text-slate-400 font-medium mb-1">
            Our Transportation Partnership
          </h4> */}
          <h1 className="text-slate-950 font-bold text-2xl w-5/6  mb-3 max-md:text-3xl max-md:w-full  max-sm:text-2xl max-sm:w-5/6">
            White Eggs
          </h1>
          <h4>
            Cost Per Kg:{" "}
            <span className="text-amber-500 font-normal">RWF 1200</span>
          </h4>
          <h4>
            Delivery Time (+/-) :{" "}
            <span className="text-amber-500 font-normal">35 minutes</span>
          </h4>
          <h4>
            Availability :{" "}
            <span className="text-amber-500 font-normal">In Stock</span>
          </h4>
          <p className="w-1/2 text-slate-500 font-normal mb-6 max-md:w-5/6 max-md:font-semibold max-sm:w-full">
            Poultry Plus, where farm-fresh goodness meets swift delivery! 🚚🥚
            Explore a world of quality eggs and farm produce, delivered to your
            doorstep in a heartbeat. 🌐🍳 #PoultryPlusDelivers
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
      <div className="h-full w-full px-40 bg-pink-3 my-20">
        <div className=" bg-amber-8 flex flex-col w-full px">
          <h1 className="w-full bg-blue-3 text-center mt-8 mb-1 text-lg tracking-wide font-semibold">
            Find A Suitable Supplier
          </h1>
          <p className="w-full bg-blue-3 text-slate-600 text-center text-xs mb-8 tracking-wide ">
            Suppliers listed below are mass suppliers of all products listed on
            the home page and fees are <br />
            based on deliveries around Kigali Province
          </p>
          <Table
            className="w-full"
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
