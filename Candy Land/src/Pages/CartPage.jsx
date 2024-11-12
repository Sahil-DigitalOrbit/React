import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Products } from "../assests/data/Data";
import CartSection from "../Components/sections/CartSection";
export default function CartPage({ prop }) {
  let {  ageValidation,  isLoggedIn,  setLogin,  signupShow,  setSignUpStatus,  usersList,wishlistItems,updateWishlist,  updateUsersList,  cartItems,  updateCart,orderHistory,updateOrderHistory} = prop;
  
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
        <Signup prop={{signupShow, setSignUpStatus, usersList, updateUsersList, isLoggedIn, setLogin,updateWishlist ,updateCart,orderHistory,updateOrderHistory}}/>
        <Header  prop={{ setSignUpStatus, isLoggedIn,setLogin,cartPage:true,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart,orderHistory,updateOrderHistory }}/>
        {isLoggedIn ? (
          <CartSection prop={{data,subtotal,deliveryCost,checkoutCart,cartItems,updateCart,updateSubtotal}}/>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}

