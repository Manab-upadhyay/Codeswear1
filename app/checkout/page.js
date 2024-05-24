
"use client"
import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../cartcontext";
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/navigation'
export default function Checkout() {
  const router = useRouter()
  const { cart, addCart, removefromCart, clearCart, total } = useContext(CartContext);
  const [name,setname]= useState('');
const[email,setemail]= useState('');
const[address,setadddres]= useState('');
const [contact, setcontact]= useState('');
const [isButtonDisabled, setIsButtonDisabled] = useState(false);
const [paymentStatus, setPaymentStatus] = useState('');
  const [orderId, setOrderId] = useState('');
const[pin,setpin]= useState('')
useEffect(() => {
  if (name && email && address && contact && pin) {
    setIsButtonDisabled(true);
  } else {
    setIsButtonDisabled(false);
  }
}, [name, email, address, contact, pin]);

  function handleChange(e){
    if(e.target.name== 'name')
setname(e.target.value)


  
  if( e.target.name=='email'){

    setemail(e.target.value)
  }
  if( e.target.name=='address'){
    setadddres(e.target.value)
  }
  if( e.target.name=='contact'){
    setcontact(e.target.value)
  }
  if(e.target.name=='pincode'){
    setpin(e.target.value)
  }
}
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const initiatePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
   const orderId= Math.floor(Math.random()*100000)
const result= {cart, total , address, name, pin, contact,email, orderId};
   
    const data = await fetch('/payment',{
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'content-type': 'application/json'
        }
      })

    
        
        
        const fetchData = async () => {

            try {
             
              const response = await fetch('/oderapi');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              console.log('Response from API:', data);
            
           
      
             
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
        
        // Call your function to fetch data here
        fetchData()
        
    
    
   
        const options = {
          key: "rzp_test_4uWumhWJ7Dk8RJ", // Enter the Key ID generated from the Dashboard
          name: "CodesWear",
          currency: "INR",
          amount: total * 100,
          order_id: data.id,
          description: "Thank you for your test donation",
          image: "https://manuarora.in/logo.png",
        
          handler: async function (response) {
            // Validate payment at server - using webhooks is a better idea.
            setPaymentStatus(response.razorpay_payment_id ? 'success' : 'failed');
            alert("Your payment is " + (response.razorpay_payment_id ? 'successful' : 'failed'));
        
            try {
              const updateResponse = await fetch('/updatestatus', {
                method: 'POST',
                body: JSON.stringify({ orderId: orderId, status: 'paid' }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
        
              if (!updateResponse.ok) {
                throw new Error('Failed to update order status');
              }
        
              // Redirect to the order details page
              router.push(`/oder/${orderId}`);
            } catch (error) {
              console.error('Error updating order status:', error);
              alert('Failed to update order status. Please contact support.');
            }
          },
        
          prefill: {
            name: "manab Upadhyay",
            email: "manabupadhyay123@gmail.com",
            contact: "8822128486",
          },
        };
        
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }

  
    return (
        <>
            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center justify-center w-full mb-12 md:w-2/3 mx-auto">
      <h1 className="sm:text-3xl md:text-2xl font-medium title-font mb-4 text-gray-900 text-sm  ">Check Out</h1>
      
    </div>
    <div className="lg:w-1/2 w-2/3 mx-auto">
      <div className='text-black font-bold'> 1 .Delivary Details .</div>
      <div className="flex md:flex-row flex-col flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="eemail" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full ">
          <div className="relative">
            <label   for="message" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" onChange={handleChange} value={address} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
        <div className="relative w-full">
            <label   for="name" className="leading-7 text-sm text-gray-600">Contact Number</label>
            <input onChange={handleChange} value={contact} type="text" id="contact" name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
             <div className="relative  w-full ">
            <label for="name" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input  onChange={handleChange} value={pin} type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
      
      </div>
    </div>
  </div>
  
  <div className="flex md:w-2/3 mx-auto">
  <div className='text-center text-black font-bold'>2. Review your Cart</div>
    </div>
  
    <div  className="sidecart  bg-yellow-200  py-10 w-full  ">
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                <span  className="absolute top-2 right-0 cursor-pointer">
              
                </span>
                <ol>
                    {Object.keys(cart).length===0 &&
                    
                    <div className="my-4"> Your Cart is Empty </div>
                    }
                   { Object.keys(cart).map((k)=>{return <li key={k}> 
                        <div className="flex my-3">
                        <div className="item flex w-2/3" >{cart[k].name} {cart[k].variant} {cart[k].size}</div>
                   <div className="flex items-center justify-center "> <CiCirclePlus onClick={()=>{addCart(k,1,499,cart[k].name,cart[k].variant)}} className="cursor-pointer " /> <span>{cart[k].qty}</span> <CiCircleMinus  onClick={()=>{removefromCart(k,1,cart[k].name,cart[k].variant)}} className="cursor-pointer" /></div>
                        </div>
                         </li>
                        })}
                       
                </ol>
            </div>
            <button
  className={`text-black font-bold rounded-sm ${isButtonDisabled ? 'bg-yellow-500' : 'bg-yellow-100'} ${isButtonDisabled ? 'disabled' : 'bg-yellow-100'}`}
  disabled={!isButtonDisabled}
  onClick={initiatePayment}
>
  PAY: {total}
</button>


</section>
        </>
    );
}
