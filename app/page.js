"use client";
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import Navigation from "./mainPage/navigation/navigation"
import Footer from "./mainPage/footer/footer"
import MoodSetter from "./mainPage/moodsetter/mood"
import MoodIcons from "./mainPage/moodIcons/moodIcons"
import Mission from "./mainPage/Mission/mission";
import Transportation from "./mainPage/transportation/transportation";
import Banner from "./mainPage/MainBanner/Banner";
import Products from "./mainPage/Products/products"
// import Dashboard from "./otherpages/Dashboard/dashboard"
// import Login from "./otherpages/login/login"
import dynamic from "next/dynamic";

const Login = dynamic(() => import("./otherpages/login/login"), {
  ssr: false,
});
const SignUp = dynamic(() => import("./otherpages/signup/signup"), {
  ssr: false,
});

const Dashboard2 = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
  ssr: false,
});
const Dashboard = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
  ssr: false,
});
import Productdescription from "./otherpages/productDescription/productDescription";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p- h-fit bg-blue-3">
{/* this is the home page that is the root of our project */}

    
     {/* <Navigation/>
     <MoodSetter/>
     <MoodIcons/>
     <Mission/>
     <Banner/>
     <Transportation/>
     <Products/>
     <Footer/> */}
<Productdescription/>

     

    </main>
  )
}
