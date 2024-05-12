import Oder from "../models/order"
import connetDB from "../db/page"
import { NextResponse } from "next/server";
export async function GET (){

await connetDB();

let oders= await Oder.find();
console.log("oders>>", oders)
return NextResponse.json(oders)



}
