import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faStar, faChevronDown, faHeart as filledHeart, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faStar as faStarBorder } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function ProductPageTile({ item, wishlistItems, updateWishlist, cartItems, updateCart, isItemInList,toggleItem, allRatingReviews }) {
  const [dropDescription, setDropDescription] = useState(false);
  const [dropRatings, setDropRatings] = useState(false);
  const ratingReviews = allRatingReviews.find(product => product.id === item.id)?.ratings || [];
  const[quantity,updateQuantity]=useState(1);

  function changeQuantity(e) {
    let newQuantity = quantity + Number(e.target.getAttribute("data-skip"));
    newQuantity = newQuantity < 1 ? 1 : newQuantity;
    updateQuantity(newQuantity);
  }


  return  (
    <section className="product-page-card pt-4">
      <div style={{height:'60vh'}} className="position-relative border product-card-image-div card-image-div">
        <img
          variant="top"
          src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
          className="template-image"
        />
        <div>
            <div className="product-page-"></div><div></div><div></div>
        </div>
      </div>

      <div className="col text-start product-card-body">
          <div className="d-flex justify-content-between col-9">
            <span>{item.brand}</span>
            <span className="card-rating-div position-relative">
              <FontAwesomeIcon icon={faStar} /> {item.ratings}
            </span>
          </div>

          <h3 className="text-start">{item.name}</h3>

          <span className="d-inline-flex align-items-center col product-card-price-div">
              <FontAwesomeIcon icon={faDollar} className="m-1" /> {item.price}
            </span>
            <div className="col-9 m-0"> <hr className="col-9" style={{ width: "100%"}}></hr></div>
            <div>{item.weight}</div>

            <div className="update-counter">
              <button
                className="change-count"
                data-skip="-1"
                onClick={changeQuantity}
              >
                -
              </button>
              <input
                className="item-count"
                type="number"
                value={quantity}
                readOnly
              />
              <button
                className="change-count"
                data-skip="1"
                onClick={changeQuantity}
              >
                +
              </button>
            </div>

            <div className="product-card-bottom-div">
              <button
                onClick={() => toggleItem(wishlistItems, updateWishlist)}
                className="col-2 m-1"
              >
                <FontAwesomeIcon
                  icon={isItemInList(wishlistItems) ? filledHeart : faHeart}
                />
              </button>
              <button
                onClick={() => toggleItem(cartItems, updateCart)}
                className="col-5 m-1 add-to-cart-button"
              >
                {isItemInList(cartItems) ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
            <div>
              <h5 className="homogeneous-filter-controls-head">
                <span>Description</span>
                <FontAwesomeIcon
                  className={
                    dropDescription
                      ? "hide-drop-icon-active"
                      : "hide-drop-icon"
                  }
                  onClick={() => setDropDescription(!dropDescription)}
                  icon={faChevronDown}
                />
              </h5>
              <span
                className={
                  dropDescription
                    ? "homo-dropDown-weight activeDrop"
                    : "homo-dropDown-weight"
                }
              >
                {item.description}
              </span>
            </div>
            <div>
              <h5 className="homogeneous-filter-controls-head">
                <span>Ratings and Reviews</span>
                <FontAwesomeIcon
                  className={
                    dropRatings ? "hide-drop-icon-active" : "hide-drop-icon"
                  }
                  onClick={() => setDropRatings(!dropRatings)}
                  icon={faChevronDown}
                />
              </h5>
              <span
                className={
                  dropRatings
                    ? "homo-dropDown-weight activeDrop"
                    : "homo-dropDown-weight"
                }
              >
                {ratingReviews.map((x,idx) => {
                  
                  return (
                    <div key={idx}>
                      <h5>{x.userName}</h5>
                      <div>
                        {[...Array(5)].map((_, index) => {
                          const currentRate = index + 1;
                          return (
                            <label key={index}>
                              <input
                                type="radio"
                                name="rate"
                                value={currentRate}
                                style={{ display: "none" }}
                              />
                              <FontAwesomeIcon
                                icon={
                                  currentRate <= x.rating
                                    ? faStar
                                    : faStarBorder
                                }
                                color="#EA3D32"
                              />
                            </label>
                          );
                        })}
                      </div>
                      <p>{x.comment}</p>
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
    </section>
  );
}