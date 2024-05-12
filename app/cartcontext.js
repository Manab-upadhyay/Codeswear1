
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a new context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const router= useRouter()
  const pathname = usePathname();
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();

  // Load cart data from localStorage on component mount and route change
  useEffect(() => {
    try {
      console.log("hii iam useeffect")
      const loadData = async () => {
        if (localStorage.getItem('cart')) {
          const savedCart = JSON.parse(localStorage.getItem('cart'));
          setCart(savedCart);
          calculateTotal(savedCart);
        }
  
        const token = localStorage.getItem('token');
        if (token) {
          setUser({ value: token });
        }
  
        setKey(Math.random());
      };

      loadData();
    } catch (error) {
      console.error(error);
    }
  }, [pathname]);

  // Function to calculate the total price
  const calculateTotal = (myCart) => {
    let subtotal = 0;
    Object.keys(myCart).forEach((key) => {
      subtotal += myCart[key].price * myCart[key].qty;
    });
    setTotal(subtotal);
  };
const logout=()=>{
  localStorage.removeItem('token')

  router.push('/')
window.location.reload()

}
  // Function to save cart data to localStorage
  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    calculateTotal(myCart);
  };

  // Function to add items to the cart
  const addCart = (itemcode, qty, price, name, variant, size, img) => {
    toast.success("added to cart",{autoClose:500})
    console.log('Adding to cart', itemcode, qty, price, name, variant,img);
    
   
    let myCart = { ...cart };
    if (itemcode in cart) {
      myCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      myCart[itemcode] = { qty: 1, price, name, variant, size,img };
    }
    setCart(myCart);
    saveCart(myCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart({});
    setTotal(0); // Optionally reset the total to zero when clearing the cart
  };

  // Function to remove items from the cart
  const removefromCart = (itemcode, qty, name, variant) => {
    let myCart = { ...cart };
    if (itemcode in cart) {
      myCart[itemcode].qty = cart[itemcode].qty - qty;
      if (myCart[itemcode].qty <= 0) {
        delete myCart[itemcode];
      }
      setCart(myCart);
      saveCart(myCart);
    }
  };

  const buynow = (itemcode, qty, price, name, variant, size) => {
    let myCart = { itemcode: { qty: 1, price, name, variant, size } };
    setCart(myCart);
    saveCart(myCart);
    router.push('/checkout');
  };

  // Provide the cart context value to children components
  return (
    <CartContext.Provider value={{logout, user, key, cart, total, addCart, removefromCart, clearCart, buynow }}>
   
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
