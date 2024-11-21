import { useContext, useState } from "react";
import StarRate from "../StarRate";
import ProductTile from "../PorductTile/ProductTile";
import { globalContext } from "../../utils/context";
import { useFirebase } from "../../firebase/firebase";
import { toast } from "react-toastify";

export default function OrderHistory({ prop }) {
  let { rateProductItem, showRateProductSection } = prop;
  let {
    orderHistory,
    cartItems,
    updateCart,
    isLoggedIn,
    products,
  } = useContext(globalContext);
  let firebase = useFirebase();
  const [rating, setRating] = useState(5);
  let data = orderHistory.map((item) => {
    let productDetails = [...products].find((x) => x.id == item.id);
    return { ...item, ...productDetails };
  });
  let [productReview, updateReview] = useState("");

  function changeReviewsTextBox(e) {
    updateReview(e.target.value);
  }

  function addReview(e) {
    e.preventDefault();
    try {
      let obj = {name:isLoggedIn.name, rating, comment: productReview };
      firebase.addReview(rateProductItem.id, isLoggedIn.id, obj);
      toast.success('Thanks for Review!')
    } catch (err) {
      toast.err('failed to add review')
      console.log(err)
    }
    showRateProductSection(false);
  }

  return (
    <section className="col d-flex order-history-section">
      {data.map((item, index) => (
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
          <StarRate prop={{ setRating, rating }} />
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
