import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable:"--font-mont"
})

export const metadata = {
  title: 'Rooted Together',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className={montserrat.className} lang="en">
      <body className="bg-light w-full min-h-screen">
      <NavBar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
