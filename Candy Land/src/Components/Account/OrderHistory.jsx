import ProductTile from "../ProductTile";
import { useState } from "react";
import StarRate from "../StarRate";

export default function OrderHistory({ prop }) {
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

  
  return (
    <section className="col d-flex order-history-section">
      {orderHistory.map((item, index) => (
        <ProductTile prop={{   item,   isProduct: true,   cartItems,   updateCart,   isAccountPage: true,   showRateProductSection, }}  key={index}/>
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
          <StarRate prop={{setRating,rating}}/>
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
