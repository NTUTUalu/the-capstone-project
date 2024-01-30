"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import MoodSetter from "./components/moodsetter/mood";
import MoodIcons from "./components/moodIcons/moodIcons";
import Mission from "./components/Mission/mission";
import Transportation from "./components/transportation/transportation";
import Banner from "./components/MainBanner/Banner";
import Products from "./components/Products/products";
// import Dashboard from "./otherpages/Dashboard/dashboard"
// import Login from "./otherpages/login/login"

import RegisterInterest from  "./registerInterest/page";



// const Dashboard2 = dynamic(() => import("./components/Dashboard/dashboard2"), {
//   ssr: false,
// });
// const Dashboard = dynamic(() => import("./Dashboard/page"), {
//   ssr: false,
// });
// import Productdescription from "./components/productDescription/productDescription";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p- h-fit bg-blue-3">
      {/* this is the home page that is the root of our project */}

      <Navigation />
      <MoodSetter />
      <MoodIcons />
      <Mission />
      <Banner />
      <Transportation />
      <Products />
      <Footer />
      {/* <Productdescription/> */}
     
    </main>
  );
}
