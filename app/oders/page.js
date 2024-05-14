"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
var jwt= require('jsonwebtoken')
export default function Oder(){

const [data, setdata]= useState()
const [oder, setoder]= useState(false)
const router = useRouter()
    useEffect(() => {
    
        const token = localStorage.getItem('token');
        if (token){
        const decoded = jwt.decode(token);

        console.log('decoded>>', decoded);
        console.log("email", decoded.email)
setoder(true)
        
        const fetchData = async () => {

            try {
             
              const response = await fetch('/oderapi');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              console.log('Response from API:', data);
            
              const filteredOrder = data.filter((order) => order.email ===decoded.email );
                console.log("Filtered Orders:", filteredOrder);
     setdata(filteredOrder);
      
             
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
        
        // Call your function to fetch data here
        fetchData()
        }
      }, []);
      function handleclick(orderId) {
        console.log('Clicked order ID:', orderId);
       
        router.push(`/oder/${orderId}`)

        // You can add further functionality here based on the clicked order ID
      }
      return (
        <>
          {oder&&<div className="relative overflow-x-auto">
            <div className="text-black font-bold text-center my-10">My Orders</div>
            <table className="md:w-full w-20 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-20">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Status
                  </th>
                </tr>
              </thead>
            
                {data?.map((orderItem, index) => (
                      <tbody key={index}>
                
                    {Object.keys(orderItem.products).map((productKey, prodIndex) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"    onClick={() => handleclick(orderItem.oderId)} >
                          {orderItem.products[productKey].name}
                        </td>
                        <td className="px-6 py-4">
                          {orderItem.products[productKey].variant}
                        </td>
                        <td className="px-6 py-4">
                        {orderItem.products[productKey].size}
                        </td>
                        <td className="px-6 py-4">
                         {orderItem.products[productKey].price}
                        </td>
                        <td className={`px-6 py-4 ${orderItem.status === 'paid' ? 'text-green-500' : 'text-red-500'}`}>
  {orderItem.status}
</td>

                        </tr>
                    ))}
                 
                  </tbody>
                ))}
            
            </table>
          </div>}
          {!oder&&<div className="text-center text-black font-bold">Please Login to see your oders</div>}
        </>
      )}
