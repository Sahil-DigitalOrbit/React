import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Products } from "../assests/data/Data";
import CartSection from "../Components/sections/CartSection";
import { globalContext } from "../utils/context";
export default function CartPage() {
  let {  ageValidation,  isLoggedIn,  cartItems,  updateCart,orderHistory,updateOrderHistory} = useContext(globalContext);
  
  //fetching cart items  
  let data = Products.filter((item) => cartItems.includes(item.id));
  
  //delivery cost
  const deliveryCost = 300;

  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  //calculating subtotal
  const [subtotal, updateSubtotal] = useState(
    data.reduce((total, item) => total + item.price, 0)
  );

  //checkout function
  function checkoutCart(){
    let newOrders=[...data].map(item=>{
      item.date=new Date().toLocaleDateString();
      return item;
    });
    updateOrderHistory([...orderHistory,...newOrders]);
    updateCart([]);
    updateSubtotal(0)
  }


  return (
    <>
      <section>
        <ToastContainer />
        <Signup/>
        <Header  prop={{cartPage:true }}/>
        {isLoggedIn ? (
          <CartSection prop={{data,subtotal,deliveryCost,checkoutCart,updateSubtotal}}/>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}

