

const Razorpay = require("razorpay");
import { request } from "http";
import connectDB from "../db/page"
import Oders from "../models/order"
import { odersdto } from "./oderdto";
import { NextRequest, NextResponse } from "next/server";
import products from "razorpay/dist/types/products";
export async function POST(req:NextRequest) {

    // Initialize razorpay object


    try {
     await connectDB();
     console.log("check>>>")
     const body = await req.json();
    console.log("body",body)
  
const oder= await new Oders({
address: body.address,
email: body.email,
ammount: body.total,
products: body.cart,
oderId: body.orderId


})

await oder.save()
        const razorpay = new Razorpay({
            key_id: "rzp_test_4uWumhWJ7Dk8RJ",
            key_secret: "7RiY7dyQXcijSHIfFRDRVw7Z",
          });
      
          // Create an order -> generate the OrderID -> Send it to the Front-end
        
      
     return Response.json({
      oder_id:Math.floor(Math.random()*10000),
        message: "success"
      });
    } catch (err) {
      console.log(err);
      return  Response.json(err);
    }
}

