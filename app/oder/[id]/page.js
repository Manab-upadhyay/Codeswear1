"use client"

import { useEffect, useState } from "react";
export default function Oder({params}){
    const[oderdata, setoderdata]= useState([])


useEffect(() => {
    
    const fetchData = async () => {

      try {
       
        const response = await fetch('/updatestatus');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
 
        const path= params.id;
  
        const filteredOrder = data.filter((order) => order.oderId ==path );
      
setoderdata(filteredOrder)

       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    console.log('Order Data:', oderdata); // Log the updated orderData
}, [oderdata]); // Log when orderData changes

    return (

        <>
        
        {oderdata.map((orderItem, index) => (
        <div key={index}>
       
            {/* Accessing data from the products object */}
            {Object.keys(orderItem.products).map((productKey, prodIndex) => {
                const product = orderItem.products[productKey]; // Get the product object
                return (
                    <div key={prodIndex}>
                         <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1">Description</a>
        
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
       
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">{product.variant}</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">{product.size}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">{product.qty}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Status</span>
          <span className={`ml-auto ${orderItem.status === 'paid' ? 'text-green-500' : 'text-red-500'}`}>{orderItem.status}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
          <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Track Oders</button>
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img}/>
    </div>
  </div>
</section>
        </div>
        
                    </div>
                );
            })}
        </div>
    ))}
        </>
    )
}