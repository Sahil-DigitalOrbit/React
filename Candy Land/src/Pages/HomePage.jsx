import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";
import { Products, Orders } from "../assests/data/Data";
import PopulateHomepage from "../Components/sections/PopulateHomepage";

export default function HomePage({ prop }) {
  let {ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart,orderHistory,updateOrderHistory} = prop;

  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  //best seller data
  let bestSellers = Orders.reduce((prev, order) => {
    prev[order.product_id] = prev[order.product_id]
      ? prev[order.product_id] + order.quantity
      : order.quantity;
    return prev;
  }, {});

  
  bestSellers = Object.entries(bestSellers)
    .map(([product_id, quantity]) => ({
      product_id: product_id,
      quantity: quantity,
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .map((i) => Products.find((product) => i.product_id == product.id))
    .slice(0, 8);

  //popular data 
  let popularProducts = Products.sort((a, b) => b.ratings - a.ratings).slice(0,8);

  return (
    <section className="home-page">
      <ToastContainer />
      <Signup   prop={{signupShow, setSignUpStatus, usersList, updateUsersList, isLoggedIn, setLogin,updateWishlist ,updateCart,orderHistory,updateOrderHistory}}/>
      <Header prop={{ setSignUpStatus, isLoggedIn, setLogin,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart ,orderHistory,updateOrderHistory}} />
      {isLoggedIn ? (
        <PopulateHomepage prop={{ bestSellers, popularProducts,wishlistItems,updateWishlist ,cartItems,updateCart }} />
        
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}

