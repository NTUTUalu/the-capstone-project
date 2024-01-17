"use client";
import "./globals.css";
// import Navigation from "./mainPage/navigation/navigation";
// import Footer from "./mainPage/footer/footer";
// import MoodSetter from "./mainPage/moodsetter/mood";
// import MoodIcons from "./mainPage/moodIcons/moodIcons";
// import Mission from "./mainPage/Mission/mission";
// import Transportation from "./mainPage/transportation/transportation";
// import Banner from "./mainPage/MainBanner/Banner";
// import Products from "./mainPage/Products/products";
// // import Dashboard from "./otherpages/Dashboard/dashboard"
// // import Login from "./otherpages/login/login"
// import dynamic from "next/dynamic";

// const Login = dynamic(() => import("./login/page"), {
//   ssr: false,
// });
// const SignUp = dynamic(() => import("./signup/page"), {
//   ssr: false,
// });

// const Dashboard2 = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
//   ssr: false,
// });
// const Dashboard = dynamic(() => import("./otherpages/Dashboard/dashboard2"), {
//   ssr: false,
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Dashboard/> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <Dashboard/> */}
        {/* this is where we will have the nav and the footer wrapping the rest of the content */}
        {/* <Navigation/>
     <MoodSetter/>
     <MoodIcons/>
     <Mission/>
     <Banner/>
     <Transportation/>
     <Products/> */}
        {/* <Products/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
