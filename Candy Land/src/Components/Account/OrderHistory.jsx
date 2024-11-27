import { useContext, useState } from "react";
import StarRate from "../StarRate";
import ProductTile from "../PorductTile/ProductTile";
import { globalContext } from "../../utils/context";
import { useFirebase } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { getCookie } from "../../utils/cookies";

export default function OrderHistory({ prop }) {
  let { rateProductItem, showRateProductSection } = prop;
  let {  orderHistory,  cartItems,  updateCart, products} = useContext(globalContext);

  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    
  
  let firebase = useFirebase();
  const [rating, setRating] = useState(5);
  let data = orderHistory.map((item) => {
    let productDetails = [...products].find((x) => x.id == item.id);
    return { ...item, ...productDetails };
  });
  let [productReview, updateReview] = useState("");
  let[load,setLoad]=useState(false);

  function changeReviewsTextBox(e) {
    updateReview(e.target.value);
  }

  function addReview(e) {
    e.preventDefault();
    setLoad(true);
    try {
      let obj = {name:retrievedUserInfo.name, rating, comment: productReview };
      firebase.addReview(rateProductItem.id, retrievedUserInfo.id, obj);
      toast.success('Thanks for Review!')
    } catch (err) {
      toast.err('failed to add review')
      console.log(err)
    }
    setLoad(false)
    showRateProductSection(false);
  }

  return (
    <section className="col d-flex order-history-section">
      <div className={load?"active-spinner":'hide'}><img src="./spinnerr.gif" /></div>
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
