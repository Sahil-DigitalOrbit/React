import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Header from "../Components/Header/Header";
import UserProfileCard from "../Components/Account/UserProfileCard";
import OrderHistory from "../Components/Account/OrderHistory";
import AccountNav from '../Components/Account/AccountNav';
import { getCookie } from "../utils/cookies";
export default function AccountPage() {
  const navigate = useNavigate();
  
  //onclick event, order-rate-section will be shown
  let [rateProductItem, showRateProductSection] = useState();
  let [showAllOrder, updateOrderStatus] = useState(true);
  let [showUserAccount, updateUserStatus] = useState(false);
  let [showTrackMyOrder, updateTrack] = useState(false);
  let [showContactUs, updateContact] = useState(false);
  let [showFAQs, updateFAQs] = useState(false);
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    
  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!getCookie('ageValidation')) {
      navigate("/verify");  
    }
  }, [navigate]);

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
      <Signup />
      <Header prop={{}}/>
      {retrievedUserInfo ? (
        <>
          <AccountNav prop={{showUserAccount,updateUserStatus,showTrackMyOrder,updateTrack,showAllOrder,updateOrderStatus,showContactUs,updateContact,showFAQs,updateFAQs,showSection}}/>
          {showAllOrder && (
            <OrderHistory prop={{rateProductItem,showRateProductSection}}
            />
          )}
          {showUserAccount && (
            <UserProfileCard/>
          )}
        </>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}