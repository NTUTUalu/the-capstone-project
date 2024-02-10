"use client";
// import Image from "next/image";
// import Link from "next/link";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import MoodSetter from "./components/mood-setter/mood-setter";
import MoodIcons from "./components/mood-Icon/mood-Icon";
import Mission from "./components/mission/mission";
import Transportation from "./components/transportation/transportation";
import Banner from "./components/main-Banner/main-Banner";
import Products from "./components/product/product";
// import Dashboard from "./otherpages/Dashboard/dashboard"
// import Login from "./otherpages/login/login"

import RegisterInterest from "./supplier/page";

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
    </main>
  );
}
