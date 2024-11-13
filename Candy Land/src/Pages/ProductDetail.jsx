import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import ProductTile from "../Components/PorductTile/ProductTile";

export default function ProductDetailsPage({ prop }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { ageValidation, isLoggedIn, setLogin, signupShow, setSignUpStatus, usersList, updateUsersList, wishlistItems, updateWishlist, cartItems, updateCart,allRatingReviews,orderHistory,updateOrderHistory} = prop;

  const {item } = location.state || {};

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);

  return (
    <section>
      <ToastContainer />
      <Signup
        prop={{signupShow, setSignUpStatus, usersList, updateUsersList, isLoggedIn, setLogin,updateWishlist ,updateCart,orderHistory,updateOrderHistory}}
      />
      <Header prop={{ setSignUpStatus, isLoggedIn,setLogin,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart,orderHistory,updateOrderHistory }} />
      {isLoggedIn ? (
        <>
        <ProductTile prop={{item, isProduct:true, wishlistItems, updateWishlist, cartItems, updateCart,isProductPage:true,allRatingReviews}}/>
        </>    
    ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}

            
