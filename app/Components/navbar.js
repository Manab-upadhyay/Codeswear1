"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../logo1.png";
import { FaCartPlus } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {  useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../cartcontext";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const { logout, user, cart, addCart, removefromCart, clearCart, total } = useContext(CartContext);
    const [toggle,settoggle]= useState(false);
    const[ClickCart, setClickCart]= useState(false)
    
 
   // Correctly using the useRef hook
   
    function handdlecartclick(){
        setClickCart(true)
    }
    function handdlecartclose(){
        setClickCart(false)
    }
   
    const path= usePathname()
    const isCheckoutPage =path=== '/checkout';
    return (
        <div className="flex flex-col md:flex-row justify-start  w-full items-center md:my-2 my-0  shadow-lg sticky top-0  z-10 bg-white md:h-12 h-20">
            
            <Link href={"/"}>
                <Image src={logo} width={100} height={100} className=" -my-5" />
            </Link>
           
            <ul className="flex justify-center md:space-x-10 space-x-4">
                <li className="font-bold cursor-pointer hover:bg-yellow-100 rounded-md ">
                    <Link href={"/tshirt"}>Tshirt</Link>
                </li>
                <li className="font-bold cursor-pointer hover:bg-yellow-100 rounded-md ">
                    <Link href={"/hoodies"}>Hoodies</Link>
                </li>
                <li className="font-bold cursor-pointer hover:bg-yellow-100 rounded-md ">
                    <Link href={"/mugs"}>Mugs</Link>
                </li>
                <li className="font-bold cursor-pointer hover:bg-yellow-100 rounded-md">
                    <Link href={"/stickers"}>Stickers</Link>
                </li>
            </ul>
         
            <div className="cart mx-5 my-10 md:mx-0 md:my-2 justify-end cursor-pointer  flex absolute right-0 ">
               { toggle&&<div className="absolute right-5 bg-white my-3 mx-10 px-4 py-4 text-black font-serif "  onMouseEnter={()=>settoggle(true)} onMouseLeave={()=>settoggle(false)}>
                    <a><ul>
                       <Link href={"/myaccount"}><li className="hover:text-yellow-600 w-10">
                            My accout
                            </li>
                       </Link>  
                        <li onClick={logout} className="hover:text-yellow-600">
                            Logout
                        </li>
                      <Link href={"/oders"}> <li className="hover:text-yellow-600" >
                            Oders
                        </li></Link> 
                    </ul></a>

                </div>}
           {user.value&& <RiAccountCircleFill onMouseEnter={()=>settoggle(true)} onMouseLeave={()=>settoggle(false)}/>}

               {!user.value&&<Link href={"/singin"}><button className="bg-yellow-300 text-white px-1 py-1 -my-3 rounded-lg">Login </button></Link> }
                 
            <div onClick={togglecart} className="cart mx-4 cursor-pointer">
           
           <FaCartPlus  width={20} />
       </div>

            </div>
          
        
            {!isCheckoutPage&&ClickCart&&<div  className=" absolute top-0 right-0  bg-yellow-200 h-[100vh] py-10  px-8 overflow-hidden">
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                <span onClick={handdlecartclose} className="absolute md:top-2 top-10 right-2 cursor-pointer">
                    <IoIosCloseCircleOutline />
                    
                </span>
               

                <ol>
                    {Object.keys(cart).length===0 &&
                    
                    <div className="my-4"> Your Cart is Empty </div>
                    }
                   { Object.keys(cart).map((k)=>{return <li key={k}> 
                        <div className="flex my-3">
                        <div className="item flex w-2/3" >{cart[k].name} {cart[k].variant} {cart[k].size}  </div>
                       
                   <div className="flex items-center justify-center w-1/3"> <CiCirclePlus onClick={()=>{addCart(k,1,cart[k].price,cart[k].name,cart[k].variant,cart[k].size)}} className="cursor-pointer" /> <span>{cart[k].qty}</span> <CiCircleMinus  onClick={()=>{removefromCart(k,1,cart[k].name,cart[k].variant)}} className="cursor-pointer" /></div>
                        </div>
                         </li>
                        })}

{Object.keys(cart).length!==0 &&
                    
                    <div className="my-4 text-black font-bold"> price:{total} </div>
                    }
                        <Link href={"/checkout"}><button class="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded justify-center mx-10">Checkout <MdOutlineShoppingCartCheckout className="my-2 ml-2" /></button></Link> 
                        <button onClick={clearCart} class="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded justify-center mx-10 my-5">Clear cart</button>
                </ol>
                
            </div>}
           
          
        </div>
       
    );
}
