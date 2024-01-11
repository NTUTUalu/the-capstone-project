
import './globals.css'
import Navigation from "./mainPage/navigation/navigation"
import Footer from "./mainPage/footer/footer"
import MoodSetter from "./mainPage/moodsetter/mood"
import MoodIcons from "./mainPage/moodIcons/moodIcons"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
     {/* this is where we will have the nav and the footer wrapping the rest of the content */}
     <Navigation/>
     <MoodSetter/>
     <MoodIcons/>
     {children}
     <Footer/>

      </body>
    </html>
  )
}
