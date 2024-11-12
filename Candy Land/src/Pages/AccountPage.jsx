import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Header from "../Components/Header/Header";
import UserProfileCard from "../Components/Account/UserProfileCard";
import OrderHistory from "../Components/Account/OrderHistory";
import AccountNav from '../Components/Account/AccountNav';
export default function AccountPage({ prop }) {
  const navigate = useNavigate();
  const {  ageValidation,  isLoggedIn,  setLogin,  signupShow,  setSignUpStatus,  usersList,  updateUsersList,  cartItems,  wishlistItems,  updateWishlist,  updateCart,  orderHistory,  allRatingReviews,  updateratingReviews,  updateOrderHistory,} = prop;

  //onclick event, order-rate-section will be shown
  let [rateProductItem, showRateProductSection] = useState();
  let [showAllOrder, updateOrderStatus] = useState(true);
  let [showUserAccount, updateUserStatus] = useState(false);
  let [showTrackMyOrder, updateTrack] = useState(false);
  let [showContactUs, updateContact] = useState(false);
  let [showFAQs, updateFAQs] = useState(false);

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);

  function showSection(targetUpdateFunction) {
    updateOrderStatus(false);
    updateUserStatus(false);
    updateTrack(false);
    updateContact(false);
    updateFAQs(false);
    targetUpdateFunction(true);
  }

  return (
    <section>
      <div
        className={rateProductItem ? "modal-div" : ""}
        onClick={() => showRateProductSection()}
      ></div>

      <ToastContainer />
      <Signup prop={{   signupShow,   setSignUpStatus,   usersList,   updateUsersList,   isLoggedIn,   setLogin,   updateWishlist,   updateCart,   orderHistory,   updateOrderHistory, }}
      />
      <Header prop={{   setSignUpStatus,   isLoggedIn,   setLogin,   isAccountPage: true,   usersList,   updateUsersList,   wishlistItems,   updateWishlist,   cartItems,   updateCart,   orderHistory,   updateOrderHistory, }}/>
      {isLoggedIn ? (
        <>
          <AccountNav prop={{showUserAccount,updateUserStatus,showTrackMyOrder,updateTrack,showAllOrder,updateOrderStatus,showContactUs,updateContact,showFAQs,updateFAQs,showSection}}/>
          {showAllOrder && (
            <OrderHistory prop={{orderHistory,cartItems,updateCart,rateProductItem,showRateProductSection,allRatingReviews,updateratingReviews,isLoggedIn,usersList}}
            />
          )}
          {showUserAccount && (
            <UserProfileCard prop={{ isLoggedIn, usersList }} />
          )}
        </>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}