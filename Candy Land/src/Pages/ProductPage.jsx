import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import ProductTile from "../Components/ProductTile";

export default function ProductsPage({ prop }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { ageValidation, isLoggedIn, setLogin, signupShow, setSignUpStatus, usersList, updateUsersList, wishlistItems, updateWishlist, cartItems, updateCart,allRatingReviews} = prop;

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
        prop={{signupShow, setSignUpStatus, usersList, updateUsersList, isLoggedIn, setLogin,updateWishlist ,updateCart}}
      />
      <Header prop={{ setSignUpStatus, isLoggedIn,setLogin,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart }} />
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

            
