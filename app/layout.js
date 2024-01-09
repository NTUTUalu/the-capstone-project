
import './globals.css'





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
     {/* this is where we will have the nav and the footer wrapping the rest of the content */}
      </body>
    </html>
  )
}
