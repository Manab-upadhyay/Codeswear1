
import connectDB from "../db/page";
import { HttpStatusCode } from 'axios';
import user  from "../models/user"
import { NextRequest, NextResponse } from 'next/server';
import { CreateUserdto } from "./createuserdto";
import User from "../models/user";
var CryptoJS = require("crypto-js");
export async function POST(req:NextRequest) {


    
    try {
        
        await connectDB();
        const body: CreateUserdto = await req.json();
      
     
        let user= new User({
            
            Name: body.Name,
    Email: body.Email,
    Password: CryptoJS.AES.encrypt(body.Password, 'secretkey123').toString()
        })
        await user.save()
        return Response.json( {
            status: 200, 
            user,
            body: { message: 'Success' }
        });
    } catch (error) {
        console.error(error);
     
        return Response.json( {
            status: 400, // OK
            body: { message: "error" }
        });
    }
}


