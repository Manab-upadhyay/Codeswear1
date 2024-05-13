

// export async function GET() {
  
//   return Response.json([1234,786602,5523]);
//   }



import connectDB from '../db/page';
import Product from '../models/product';
import { NextResponse } from "next/server";


export  async function GET() {
  // Connect to the database
  
  

  try {
    await connectDB();
    const products = await Product.find();
    let tshirt = {};
  for (let item of products) {
    if (item.title in tshirt) {
      if (!tshirt[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirt[item.title].color.push(item.color);
      }
      if (!tshirt[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirt[item.title].size.push(item.size);
      }
      if (!tshirt[item.title].slug.includes(item.slug) && item.availableQty > 0) {
        tshirt[item.title].slug.push(item.slug);
      }
     
    } else {
      tshirt[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirt[item.title].color = [item.color];
        tshirt[item.title].size = [item.size];
        tshirt[item.title].slug=[item.slug]
      }
    }
  }
  console.log("tshirt", tshirt)
  
    return NextResponse.json(tshirt)
    // res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching data:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}

