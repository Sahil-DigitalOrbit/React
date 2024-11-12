import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faStar,
  faChevronDown,
  faDollar,
  faHeart as filledHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faStar as faStarBorder } from "@fortawesome/free-regular-svg-icons";

export default function ProductTile({ prop }) {
  const {
    item,
    isProduct,
    wishlistItems,
    updateWishlist,
    cartItems,
    updateCart,
    isAccountPage,
    showRateProductSection,
    isProductPage,
    allRatingReviews = [],
  } = prop;
  let ratingReviews =
    allRatingReviews.find((product) => product.id == item.id)?.ratings || [];
  const navigate = useNavigate();
  let [quantity, updateQuantity] = useState(1);
  let [dropDescription, setDrop] = useState(false);
  let [DropRatings, setDropRatings] = useState(false);

  const handleViewAll = () =>
    navigate("/products", { state: { heading: item.name, type: "aslk" } });

  const toggleItem = (list, updateFunc) =>
    updateFunc(
      list.includes(item.id)
        ? list.filter((c) => c !== item.id)
        : [...list, item.id]
    );

  const handlePoductPage = () =>
    navigate("/about-product", { state: { item } });
  function changeQuantity(e) {
    let newQuantity = quantity + Number(e.target.getAttribute("data-skip"));
    newQuantity = newQuantity < 1 ? 1 : newQuantity;
    updateQuantity(newQuantity);
  }

  const isItemInList = (list) => list.includes(item.id);
  if (isProductPage) {
    return (
      <section className="product-page-card pt-4">
        <div style={{height:'60vh'}} className="position-relative border product-card-image-div card-image-div">
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
            className="card-image"
          />
        </div>

        <div className="col product-card-body">
          <div className="col-9 text-start">
            <Card.Text className="d-flex justify-content-between col">
              <span>{item.brand}</span>
              <span className="card-rating-div">
                <FontAwesomeIcon icon={faStar} /> {item.ratings}
              </span>
            </Card.Text>

            <h3 className="text-start">{item.name}</h3>

            <div className="product-tile-body">
              <span className="d-inline-flex align-items-center col card-price-div">
                <FontAwesomeIcon icon={faDollar} className="m-1" /> {item.price}
              </span>
              <hr style={{ width: "100%"}}></hr>
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
                    onClick={() => setDrop(!dropDescription)}
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
                      DropRatings ? "hide-drop-icon-active" : "hide-drop-icon"
                    }
                    onClick={() => setDropRatings(!DropRatings)}
                    icon={faChevronDown}
                  />
                </h5>
                <span
                  className={
                    DropRatings
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
          </div>
        </div>
      </section>
    );
  }

  return (
    <Card
      className={isAccountPage ? "account-page-tile" : "template-card"}
      style={{ border: "none", marginBottom: "3rem", maxWidth: "13rem" }}
    >
      <div
        className={
          isAccountPage
            ? "account-page-tile-image position-relative border card-image-div"
            : "position-relative border card-image-div h-100"
        }
        onClick={!isProduct ? handleViewAll : handlePoductPage}
      >
        <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
          className="card-image"
        />
        {isProduct && (
          <span className="position-absolute card-rating-div">
            <FontAwesomeIcon icon={faStar} /> {item.ratings}
          </span>
        )}
      </div>

      <Card.Body className={isAccountPage?'account-page-card-body':isProduct?'p-1':'p-4 d-flex align-items-center justify-content-center'}>
        {isAccountPage ? (
          <div className="account-order-page-tile d-flex  flex-column justify-content-between h-100">
            <div>
            <div className="text-start color-green">
              Delivered <br />
              {item.date}
            </div>
            <Card.Text style={{color:'#00000063'}} className="d-flex justify-content-between">
              <span>{item.brand}</span>
              <span>{item.weight}</span>
            </Card.Text>
            <Card.Title className="text-start" style={{ fontSize: "1.1rem" }}>
              {item.name}
            </Card.Title>
            </div>
            <div className="product-card-bottom-div">
              <span className="d-inline-flex align-items-center col card-price-div">
                <FontAwesomeIcon icon={faDollar} className="m-1" /> {item.price}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={() => showRateProductSection(item)}
                className="account-page-tile-button"
              >
                Rate
              </button>
              <button
                onClick={() => toggleItem(cartItems, updateCart)}
                className="account-page-tile-button"
              >
                {isItemInList(cartItems) ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  "Reorder"
                )}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Card.Text className="d-flex justify-content-between">
              <span>{item.brand}</span>
              <span>{item.weight}</span>
            </Card.Text>
            <Card.Title className={isProduct ? "text-start" : "m-auto"}>
              {item.name}
            </Card.Title>
            {isProduct && (
              <div className="product-card-bottom-div">
                <span className="d-inline-flex align-items-center col card-price-div">
                  <FontAwesomeIcon icon={faDollar} className="m-1" />{" "}
                  {item.price}
                </span>
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
                  className="col-3 m-1"
                >
                  {isItemInList(cartItems) ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    "+Add"
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
