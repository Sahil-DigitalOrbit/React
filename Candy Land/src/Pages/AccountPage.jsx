import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Header from "../Components/Header";
import ProductTile from "../Components/ProductTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarBorder } from "@fortawesome/free-regular-svg-icons";
import PopulateAboutUser from "../Components/PopulateAboutUser";

export default function AccountPage({ prop }) {
  const navigate = useNavigate();
  const {  ageValidation,  isLoggedIn,  setLogin,  signupShow,  setSignUpStatus,  usersList,  updateUsersList,  cartItems,  wishlistItems,  updateWishlist,  updateCart,  orderHistory,  allRatingReviews,  updateratingReviews,  updateOrderHistory,} = prop;
  
  //onclick event, order-rate-section will be shown
  let [rateProductItem, showRateProductSection] = useState();
  let [showAllOrder, updateOrderStatus] = useState(false);
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
      <Signup  prop={{    signupShow,    setSignUpStatus,    usersList,    updateUsersList,    isLoggedIn,    setLogin,    updateWishlist,    updateCart,    orderHistory,    updateOrderHistory,  }}/>
      <Header  prop={{    setSignUpStatus,    isLoggedIn,    setLogin,    isAccountPage: true,    usersList,    updateUsersList,    wishlistItems,    updateWishlist,    cartItems,    updateCart,    orderHistory,    updateOrderHistory,  }}/>
      {isLoggedIn ? (
        <>
         <section className="acount-header-button-section">
  <div>
    <button
      className={
        showUserAccount ? "acount-header-button-section-active" : ""
      }
      onClick={() => showSection(updateUserStatus)}
    >
      My Profile
    </button>
  </div>
  <div>
    <button
      className={
        showTrackMyOrder ? "acount-header-button-section-active" : ""
      }
      onClick={() => showSection(updateTrack)}
    >
      Track my order
    </button>
  </div>
  <div>
    <button
      className={
        showAllOrder ? "acount-header-button-section-active" : ""
      }
      onClick={() => showSection(updateOrderStatus)}
    >
      Order History
    </button>
  </div>
  <div>
    <button
      className={
        showContactUs ? "acount-header-button-section-active" : ""
      }
      onClick={() => showSection(updateContact)}
    >
      Contact Us
    </button>
  </div>
  <div>
    <button
      className={
        showFAQs ? "acount-header-button-section-active" : ""
      }
      onClick={() => showSection(updateFAQs)}
    >
      FAQs
    </button>
  </div>
</section>

          {showAllOrder ? (
            <PopulateOrderHistory  prop={{    orderHistory,    cartItems,    updateCart,    rateProductItem,    showRateProductSection,    allRatingReviews,    updateratingReviews,    isLoggedIn,    usersList,  }}/>
          ) : (
            ""
          )}
          {showUserAccount ? (
            <PopulateProfile  prop={{  isLoggedIn,    usersList,  }}/>
          ) : (
            ""
          )}
        </>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}

//populating account page functions------------------------------------------------------------------------------------------------------------------------------------



//populate My Profile


function PopulateProfile({prop}){
  let{isLoggedIn,usersList}=prop;
  let usersData=usersList.find(user=>user.uMail==isLoggedIn);
  return(<>
    <section className="account-page-user-section">
      <div><img className="account-page-user-image" src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg" alt=""/></div>
      <div>
        <div><span>Name</span><span>{usersData.uName}</span></div>
        <div><span>Mail</span><span>{usersData.uMail}</span></div>
        <div><span>Contact Number</span><span>{usersData.uContact}</span></div>
        <div><span>Saved Address</span><span>{usersData.uAddress.map((address,idx)=><div key={idx}>{address}</div>)}</span></div>
      </div>
    </section>
  </>)

}


//populate order
function PopulateOrderHistory({ prop }) {
  let {
    orderHistory,
    cartItems,
    updateCart,
    rateProductItem,
    showRateProductSection,
    allRatingReviews,
    updateratingReviews,
    isLoggedIn,
    usersList,
  } = prop;
  const [rating, setRating] = useState(5);
  let [productReview, updateReview] = useState("");

  function changeReviewsTextBox(e) {
    updateReview(e.target.value);
  }

  function addReview(e) {
    e.preventDefault();
    let productIndex = [...allRatingReviews].findIndex(
      (product) => product.id == rateProductItem.id
    );

    if (productIndex === -1) {
      // If product doesn't exist, add it to allRatingReviews
      let obj = {
        id: rateProductItem.id,
        ratings: [
          {
            userMail: isLoggedIn,
            userName: usersList.find((user) => user.uMail == isLoggedIn).uName,
            rating,
            comment: productReview,
          },
        ],
      };
      updateratingReviews([...allRatingReviews, obj]);
    } else {
      // If product exists, update or add user's review
      let newAllRatings = [...allRatingReviews];
      let existingRatings = newAllRatings[productIndex].ratings;
      let userReviewIndex = existingRatings.findIndex(
        (review) => review.userMail == isLoggedIn
      );

      if (userReviewIndex === -1) {
        existingRatings.push({
          userMail: isLoggedIn,
          userName: usersList.find((user) => user.uMail == isLoggedIn).uName,
          rating,
          comment: productReview,
        });
      } else {
        existingRatings[userReviewIndex] = {
          userMail: isLoggedIn,
          userName: usersList.find((user) => user.uMail == isLoggedIn).uName,
          rating,
          comment: productReview,
        };
      }
      updateratingReviews(newAllRatings);
      showRateProductSection(false);
    }
  }

  function StarRate() {
    return (
      <>
        {[...Array(5)].map((_, index) => {
          const currentRate = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
                style={{ display: "none" }}
              />
              <FontAwesomeIcon
                icon={currentRate <= rating ? faStar : faStarBorder}
                color="#EA3D32"
              />
            </label>
          );
        })}
      </>
    );
  }
  return (
    <section className="col d-flex order-history-section">
      {orderHistory.map((item, index) => (
        <ProductTile
          prop={{
            item,
            isProduct: true,
            cartItems,
            updateCart,
            isAccountPage: true,
            showRateProductSection,
          }}
          key={index}
        />
      ))}

      <form
        onSubmit={addReview}
        className={
          rateProductItem ? "order-rate-section active" : "order-rate-section"
        }
      >
        <h3>
          {rateProductItem &&
            rateProductItem.brand + " " + rateProductItem.name}
        </h3>
        <div>
          {" "}
          <StarRate />
        </div>
        <textarea
          rows="3"
          onChange={changeReviewsTextBox}
          value={productReview}
          placeholder="Write your review here"
        ></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}
