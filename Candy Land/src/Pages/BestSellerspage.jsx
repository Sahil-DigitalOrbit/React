import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Orders, Products } from "../Data/Data";
import Homogeneous from "../Components/Homogeneous";
import '../Styles/Homo.css'
export default function BestSellersPage({ prop }) {
  let {ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart} = prop;
  const navigate = useNavigate();
  let isProduct=true;
  useEffect(() => {
    if (!ageValidation) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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
    .map((i) => Products.find((product) => i.product_id == product.id));
  return (
    <>
      <section>
        <ToastContainer />
        <Signup
          prop={{
            signupShow,
            setSignUpStatus,
            usersList,
            updateUsersList,
            isLoggedIn,
            setLogin,
          }}
        />
        <Header prop={{ setSignUpStatus, isLoggedIn, setLogin }} />
        {isLoggedIn ? (
          <Homogeneous prop={{allData:bestSellers, isProduct, heading:"Best Sellers",wishlistItems,updateWishlist,cartItems,updateCart}}/>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}
