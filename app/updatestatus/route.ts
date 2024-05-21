import Order from "../models/order"; // Assuming "Order" is the correct import for your model
import { NextRequest,NextResponse } from "next/server";
import connectDB from "../db/page";



export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    console.log(body);
    // Assuming orderId is the key for the order ID in the request body

    console.log("Updating order status for orderId:", body.orderId);

    // Assuming your Order model has a method like "findOneAndUpdate" to update the status
    const updatedOrder = await Order.findOneAndUpdate(
      { oderId: body.orderId }, // Query to find the order by ID and status pending
      { $set: { status: body.status } }, // Update the status to paid
      { new: true } // Return the updated order after the update operation
    );
    await updatedOrder.save()

    console.log("Updated order:", updatedOrder);

    return Response.json(updatedOrder);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to update order status." });
  }
}
export async function GET (){
  try {
      await connectDB();
  
  let oders= await Order.find();
  console.log("oders>>", oders)
  return NextResponse.json(oders)
  } catch (error) {
      console.log(error)
  }
  
  
  
  
  }
