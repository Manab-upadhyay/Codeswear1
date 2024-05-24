"use client"


import { useEffect ,useState} from "react"
import { useRouter } from "next/navigation"



import { useContext } from 'react';
import { CartContext } from "../../cartcontext";
import { usePathname } from "next/navigation";

export default  function Productitem({params}){
  const slug=params.id
  console.log("slug>>>", slug)
  const { cart, addCart, clearCart,buynow } = useContext(CartContext);
  const path= usePathname();
  console.log("pathh>>>>", path)
  
  const router= useRouter()

  // console.log("lux cozi :")
  const [pin, setpin]=useState()
  const [service, setservice]= useState()
  
  const [apiData,setApiData]=useState()
  const [color, setcolor]= useState();
  const [size, setsize]= useState();
  const[select, setselect]= useState(false)
  const newpath= `${path}${color}${size}`
  console.log("newpath>>>>", newpath)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Response from API:', data);
        setApiData(data)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

   async function  checkservice(){
    console.log("Inside check service")

    console.log("hh>>")
    try{
      let pins =   fetch('/product/pins').then((res)=>res.json()).then((response)=>{
        console.log("pin present :",response.includes(parseInt(pin)))
        
        if(response.includes(parseInt(pin))){
          console.log("pin found !!!!!")
          setservice(true);
        }
        else {
          setservice(false)
        }
      })

  

      
    }

    catch(err){
      console.log("Error in web ", err)
    }
      
    console.log("service status ::", service)

  }
  const handleChange = (e) => {
    setpin(e.target.value)
    console.log(">>>>>>>>")
}

console.log("hii there")
console.log("API DATA ::::",apiData);


  function handleChange1(color)  {
     
console.log("colorset")
    
    setcolor(color)
    
    
    
  };
  const handleChangeSize = (event) => {
    
    const selectedSize = event.target.value;
    setsize(selectedSize);
   
  };
  useEffect(()=>{
    if(size&&color){
      setselect(true)
    }
  })

 
  return (
   
    <>
     
    
     
    
     
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-80 lg:h-auto h-50 object-cover object-center rounded" src={apiData?.[slug]?.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{apiData?.[slug]?.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{apiData?.[slug]?.details} {color} {size}</h1>
<div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
       
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <div>
            {apiData?.[slug]?.color.includes('red') && (
        <button
          className={`border-2 border-black-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${
            color === 'red' ? 'border-black' : ''
          }`}
          style={{ backgroundColor: 'red' }}
          onClick={() => handleChange1('red')}
        ></button>
      )}
      {apiData?.[slug]?.color.includes('green') && (
        <button
           className={`border-2 border-black-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${
            color === 'green' ? 'border-black' : ''
          }`}
          style={{ backgroundColor: 'green' }}
          onClick={() => handleChange1('green')}
        ></button>
      )}
      {apiData?.[slug]?.color.includes('pink') && (
        <button
           className={`border-2 border-black-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${
            color === 'pink' ? 'border-black' : ''
          }`}
          style={{ backgroundColor: 'pink' }}
          onClick={() => handleChange1('pink')}
        ></button>
      )}
      {apiData?.[slug]?.color.includes('yellow') && (
        <button
           className={`border-2 border-black-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${
            color === 'yellow' ? 'border-black' : ''
          }`}
          style={{ backgroundColor: 'yellow' }}
          onClick={() => handleChange1('yellow')}
        ></button>
      )}
      {apiData?.[slug]?.color.includes('purple') && (
        <button
           className={`border-2 border-black-300 ml-1 rounded-full w-6 h-6 focus:outline-none ${
            color === 'purple' ? 'border-black' : ''
          }`}
          style={{ backgroundColor: 'purple' }}
          onClick={() => handleChange1('purple')}
        ></button>
      )}
    
  </div>


 
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
            <select
        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 text-base pl-3 pr-10"
        onClick={handleChangeSize}
      >
        {apiData?.[slug]?.size.includes('38') && <button value="38">38</button>}
        {apiData?.[slug]?.size.includes('40') && <option value="40">40</option>}
        {apiData?.[slug]?.size.includes('42') && <option value="42">42</option>}
        {apiData?.[slug]?.size.includes('36') && <option value="36">36</option>}
      </select>

              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        
        <div className="md:flex w-56 ">
          <span className="title-font font-medium text-2xl text-gray-900">₹{apiData?.[slug]?.price}</span>
          <button disabled={!select}className="flex ml-auto text-white bg-yellow-400 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded my-2  " onClick={()=>buynow(`${Math.floor(Math.random() * 10000)}`, 1, 499, apiData?.[slug]?.details, color,size )}>Buy Now</button>
         <button disabled={!select} onClick={() => addCart(newpath, 1, apiData?.[slug]?.price, apiData?.[slug]?.details, color,size,apiData?.[slug]?.img )} className="flex ml-auto text-white bg-yellow-400 border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded my-2">
  Add to cart
</button>
        </div>
        <div className="flex space-x-2 my-5">
      <input type="text"placeholder="enter the pin code " className=" border-2 border-gray-400 rounded-md"  onChange={handleChange}></input>
  <button className="flex ml-auto text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded" onClick={checkservice}>Check </button>
      </div>

    { service&&<div className="text-green-500">Pin code is available</div>}
    { !service&&<div className="text-red-500">Service not available</div>}

  

    { !(select)&&<div className="text-red-700">Plese select your size and color to continue</div>}
    { select&&<div className="text-green-500">you may continue now</div>}
    
      </div>
    
     
    </div>
    
  </div>
  
</section>
    </>
  )
}
