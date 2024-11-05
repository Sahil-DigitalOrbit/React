import "../Styles/Cart.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faDollar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import "../Styles/Homo.css";
import { Products } from "../Data/Data";
export default function CartPage({ prop }) {
  let {  ageValidation,  isLoggedIn,  setLogin,  signupShow,  setSignUpStatus,  usersList,  updateUsersList,  cartItems,  updateCart,} = prop;
  let data = Products.filter((item) => cartItems.includes(item.id));
  const deliveryCost = 300;
  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [subtotal, updateSubtotal] = useState(
    data.reduce((total, item) => total + item.price, 0)
  );

  return (
    <>
      <section>
        <ToastContainer />
        <Signup
          prop={{
            signupShow,
            setSignUpStatus,
            usersList,
            updateUsersList,
            isLoggedIn,
            setLogin,
          }}
        />
        <Header
          prop={{ setSignUpStatus, isLoggedIn, setLogin, cartPage: true }}
        />
        {isLoggedIn ? (
          <div className="Cart p-5">
            <h1 className="cart-heading text-start">Cart</h1>
            <div className="cart-section">
              <div className="cart-items">
                {data.map((item, idx) => (
                  <CartTile
                    prop={{
                      item,
                      cartItems,
                      updateCart,
                      subtotal,
                      updateSubtotal,
                    }}
                    key={idx}
                  />
                ))}
              </div>
              <div className="cart-order-summary-section">
                <h1>Order Summary</h1>
                <div>
                  <p>Subtotal</p>
                  <p className="cart-items-total">Rs. {subtotal.toFixed(2)}</p>
                </div>
                <div>
                  <p>Estimated Delivery & Handling</p>
                  <p>Rs. {deliveryCost}</p>
                </div>
                <div className="total-section">
                  <p>Total</p>
                  <p className="cart-items-total-final">
                    Rs. {subtotal + deliveryCost}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}

function CartTile({ prop }) {
  let { item, cartItems, updateCart, subtotal, updateSubtotal } = prop;
  let [quantity, updateQuantity] = useState(1);
  function removeFromCart(e) {
    const newList = cartItems.filter((x) => x != item.id);
    updateCart(newList);
    updateSubtotal((subtotal -= parseFloat(item.price).toFixed(2) * quantity));
  }

  function changeQuantity(e) {
    let newQuantity = quantity + Number(e.target.getAttribute("data-skip"));
    newQuantity = newQuantity < 1 ? 1 : newQuantity;
    const priceDifference = item.price * (newQuantity - quantity);
    updateSubtotal(subtotal + priceDifference);
    updateQuantity(newQuantity);
  }

  return (
    <Card style={{ border: "none" }} className="cart-tile d-flex">
      <div className="position-relative border h-75 cart-image-div">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://m.media-amazon.com/images/I/61XdlI186PL._SL1500_.jpg"
        />

        <span className="position-absolute card-rating-div">
          <FontAwesomeIcon icon={faStar} />
          {item.ratings}
        </span>
      </div>
      <div className="cart-tile-body">
        <div>
          <Card.Text
            style={{ color: "#00000063" }}
            className="d-flex justify-content-between"
          >
            <span>{item.brand}</span>
            <span>{item.weight}</span>
          </Card.Text>
          <Card.Title style={{ fontSize: ".9rem" }} className="text-start">
            {item.name}
          </Card.Title>
        </div>

        <div className="text-start">
          <span className="d-inline-flex align-items-center col card-price-div">
            <FontAwesomeIcon icon={faDollar} className="m-1" />
            {item.price}
          </span>
        </div>
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
      </div>
      <div>
        <button className="remove-from-cart" onClick={removeFromCart}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Card>
  );
}
