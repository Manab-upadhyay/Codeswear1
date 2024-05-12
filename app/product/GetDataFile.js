import connectDB from "../db/page";
import Product from "../models/product";

export async function getdata() {

    try {
        await connectDB();  // Await the database connection

        console.log("inside getData method")
        let products = await Product.find();
        console.log("products>>>>>>>>>>> :", products);
        return products
    }

    catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Error fetching data from MongoDB");
      }


//   let tshirt = {};
//   for (let item of products) {
//     if (item.title in tshirt) {
//       if (!tshirt[item.title].color.includes(item.color) && item.availableQty > 0) {
//         tshirt[item.title].color.push(item.color);
//       }
//       if (!tshirt[item.title].size.includes(item.size) && item.availableQty > 0) {
//         tshirt[item.title].size.push(item.size);
//       }
//     } else {
//       tshirt[item.title] = JSON.parse(JSON.stringify(item));
//       if (item.availableQty > 0) {
//         tshirt[item.title].color = [item.color];
//         tshirt[item.title].size = [item.size];
//       }
//     }
//   }
//   return tshirt;
}

//  export function getdata() {
//     return connectDB().then(async () => {
//       let products = await Product.find();
      
//       let tshirt = {};
//       for (let item of products) {
//         if (item.title in tshirt) {
//           if (!tshirt[item.title].color.includes(item.color) && item.availableQty > 0) {
//             tshirt[item.title].color.push(item.color);
//           }
//           if (!tshirt[item.title].size.includes(item.size) && item.availableQty > 0) {
//             tshirt[item.title].size.push(item.size);
//           }
//         } else {
//           tshirt[item.title] = JSON.parse(JSON.stringify(item));
//           if (item.availableQty > 0) {
//             tshirt[item.title].color = [item.color];
//             tshirt[item.title].size = [item.size];
//           }
//         }
//       }
//       return tshirt;
//     });

//   }
  

// module.exports = getdata;
