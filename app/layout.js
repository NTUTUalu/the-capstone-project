
import './globals.css'
import Navigation from "./mainPage/navigation/navigation"
import Footer from "./mainPage/footer/footer"
import MoodSetter from "./mainPage/moodsetter/mood"
import MoodIcons from "./mainPage/moodIcons/moodIcons"
import Mission from "./mainPage/Mission/mission";
import Transportation from "./mainPage/transportation/transportation";
import Banner from "./mainPage/MainBanner/Banner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
     {/* this is where we will have the nav and the footer wrapping the rest of the content */}
     <Navigation/>
     <MoodSetter/>
     <MoodIcons/>
     <Mission/>
     <Banner/>
     <Transportation/>
     {children}
     <Footer/>

      </body>
    </html>
  )
}
