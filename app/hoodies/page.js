
import Link from "next/link";
import Product from "../models/product";
import connectDB from "../db/page";
async function getdata() {
  connectDB(); 
  let products = await Product.find({category:'Hoddies'});
  
  let tshirt = {};
  for (let item of products) {
    if (item.title in tshirt) {
      if (!tshirt[item.title].color.includes(item.color) && item.availableQty > 0) {
        tshirt[item.title].color.push(item.color);
      }
      if (!tshirt[item.title].size.includes(item.size) && item.availableQty > 0) {
        tshirt[item.title].size.push(item.size);
      }
    } else {
      tshirt[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirt[item.title].color = [item.color];
        tshirt[item.title].size = [item.size];
      }
    }
  }
  return tshirt;
}

async function Hoddies() {
  let products= await getdata()
  return (
  
    <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.entries(products).map(([key, product]) => (
              <div key={product._id} className="lg:w-1/4 w-1/2 p-4 cursor-pointer shadow-lg">
                <Link href={`/product/${product.slug}`} className="block rounded overflow-hidden">
                <img alt="ecommerce" className="object-center cursor-pointer shadow-lg h-full block" src={product.img} />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                  <p className="mt-1">₹{product.price}</p>
                  <div className="mt-1 flex flex-wrap">
                    {product.size.map((size) => (
                      <span key={size} className="border border-gray-600 px-1 mx-1">{size}</span>
                    ))}
                  </div>
<div>
{product.color.includes('red')&& <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
{product.color.includes('green')&& <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
{product.color.includes('pink')&& <button className="border-2 border-gray-300 ml-1 bg-pink-600 rounded-full w-6 h-6 focus:outline-none"></button>}
{product.color.includes('yellow')&& <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>}
{product.color.includes('purple')&& <button className="border-2 border-grey-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}

</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hoddies;
