"use client"
import './globals.css';
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"
import {CartProvider} from "./cartcontext"
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  
  const [progress, setProgress] = useState(0)
  const pathname= usePathname()
  useEffect(()=>{
    console.log("hii from loading bar")
setProgress(100)

  },[pathname])
 
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <CartProvider>
      
        <LoadingBar
        color=' #FFD300'
        waitingTime={1000}
        loaderSpeed={100}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        
      />
       <ToastContainer/>
          <Navbar />
         
          {children}
          <Footer />
        </CartProvider>
     
      </body>
    </html>
  );
}
