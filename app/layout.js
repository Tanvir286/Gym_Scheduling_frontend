import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import logo from "../public/logo.png"
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gym Class Scheduling',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* Navbar Styart */}
        <nav className="bg-slate-200 shadow-2xl border-b border-gray-950">

            <div className='container mx-auto '>

            <div className="flex justify-between items-center p-4">
            
            <div>
              <Image src={logo} alt="Gym Logo" width={100} height={100} /> 
            </div>

            <ul className="nav-links flex space-x-4 text-xl ">
              <li><a href="/">Home</a></li>
              <li><a href="/schedule">Schedule</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

            </div>
         
        </nav>


        <StoreProvider>{children}</StoreProvider>


      </body>
    </html>
  )
}