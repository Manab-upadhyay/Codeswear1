"use client"
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import { decode } from "punycode";
var jwt= require('jsonwebtoken')
export default function Myaccount(){
    const[email,setemail]= useState('');
    const [Name,setname]= useState('');
    const[address,setadddres]= useState('');
    const [contact, setcontact]= useState('');
   const [password, setpassword]= useState('');
   const[cpassword,setcpassword]= useState('');
    const[pin,setpin]= useState('')
    useEffect(()=>{
        const token= localStorage.getItem('token');
        const decoded= jwt.decode(token);
        console.log(decoded)
        setemail(decoded.email)
        
    })

   
      function handleChange(e){
        if(e.target.name== 'Name')
    setname(e.target.value)
    
    
      
      
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
   async function handleclick(){
        const result= { address, Name, pin, contact,email};
   
        const data = await fetch('http://localhost:3000/updateuser',{
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
              'content-type': 'application/json'
            }
          })
    console.log(data)

    }
    function handlepasChange(e){
if(e.target.name=='password'){
    setpassword(e.target.value)
}
if(e.target.name=='cpassword'){
    setcpassword(e.target.value)
}
    }
   async function handlepasclick(){
    console.log("called >>")
    const result= {password,cpassword,email};
   
    const data = await fetch('http://localhost:3000/updatepass',{
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'content-type': 'application/json'
        }
      })
console.log(data)



    }
    return (
        <div>
         <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center justify-center w-full mb-12 md:w-2/3 md:mx-auto -mx-24">
      <h1 className="sm:text-3xl md:text-2xl font-medium title-font mb-4 text-gray-900 text-sm  -mx-20">Update Your Account</h1>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className='text-black font-bold'> </div>
      <div className="flex md:flex-row flex-col flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} value={Name} type="text" id="name" name="Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="eemail" className="leading-7 text-sm text-gray-600">Email(cannot be changed )</label>
            <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 md:w-full w-56">
          <div className="relative">
            <label   for="message" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" onChange={handleChange} value={address} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap -m-2">
        <div className="relative md:mx-0 mx-6">
       
            <label   for="name" className="leading-7 text-sm text-gray-600">Contact</label>
            <input onChange={handleChange} value={contact} type="text" id="contact" name="contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
             <div className="relative mx-6">
            <label for="name" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input  onChange={handleChange} value={pin} type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button onClick={handleclick}
  className="text-black font-bold rounded-lg  bg-yellow-400 my-10 "
>Submit
</button>
          </div>
    

        </div>
        <div className="flex md:flex-row flex-col flex-wrap -m-2">

       
        <div className="relative  ">
        <div className='text-black font-bold'> Change Password </div>
            <label   for="name" className="leading-7 text-sm text-gray-600"> Password</label>
            <input onChange={handlepasChange} value={password} type="text" id="password" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
             <div className="relative md:mx-2 my-7 ">
            <label for="name" className="leading-7 text-sm text-gray-600 my-5">confirm password</label>
            <input  onChange={handlepasChange} value={cpassword} type="text" id="cpassword" name="cpassword" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           

          </div>
 
          <button onClick={handlepasclick}
  className="text-black font-bold rounded-lg  bg-yellow-400 my-10 md:mx-72 mr-96 mx-10 "
>Submit
</button>
        </div>

      </div>
    </div>
  </div>
          </section>
        </div>
      );
    }