
import './globals.css'
import Navigation from "./mainPage/navigation/navigation"
import Footer from "./mainPage/footer/footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
     {/* this is where we will have the nav and the footer wrapping the rest of the content */}
     <Navigation/>
     {children}
     <Footer/>

      </body>
    </html>
  )
}
