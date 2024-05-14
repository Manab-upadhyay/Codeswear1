"use client"
import Image from "next/image"

import './globals.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img  from "./img1.jpg"
import img1 from "./img2.jpg"



export default function Home() {
 

  return (
    <>
    <div >
    <div className="relative md:w-screen md:h-screen w-72 h-72">
  <Image src={img} className="object-cover w-full h-full   rounded-lg" />
  <div className="absolute inset-x-0 bottom-10 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 p-4 w-full">
    Explore Our Code-Themed Collection
  </div>
</div>
   
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full  mb-20">
      <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Codes Wear Collection</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Embrace your coding passion with our exclusive collection of code-themed apparel. From witty programming puns to stylish developer hoodies, we have it all!</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 w-full  px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Programming Humor T-shirt</h2>
        <p className="leading-relaxed text-base mb-4">Express your coding humor with our witty t-shirt designs. Perfect for casual wear or hackathon events.</p>
        <a href="#" className="text-yellow-500 inline-flex items-center">View Details
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 w-full  px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Developer Hoodie</h2>
        <p className="leading-relaxed text-base mb-4">Stay cozy and stylish with our developer-themed hoodie. Perfect for coding sessions or casual outings.</p>
        <a href="#" className="text-yellow-500 inline-flex items-center">View Details
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 w-full  px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Code Ninja Cap</h2>
        <p className="leading-relaxed text-base mb-4">Enhance your coding skills with our Code Ninja cap. Designed for comfort and style during long coding sessions.</p>
        <a href="#" className="text-yellow-500 inline-flex items-center">View Details
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 w-full  px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Code Master Backpack</h2>
        <p className="leading-relaxed text-base mb-4">Carry your coding essentials in style with our Code Master backpack. Features compartments for laptop, books, and coding accessories.</p>
        <a href="#" className="text-yellow-500 inline-flex items-center">View Details
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          </a>
   
  </div>
  </div>
  </div>

</section>
     

    
    </div>
 
    </>
 

  );

}
