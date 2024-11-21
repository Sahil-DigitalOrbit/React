import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { globalContext } from "../utils/context";

export default function WishlistPage() {
  let { ageValidation, isLoggedIn, wishlistItems,products } = useContext(globalContext);
  const navigate = useNavigate();
  const isItemInList = (list, item) => list.some((x) => x.id == item.id);
  
  //fetching cart items  
  let data = products.filter((item) => {
    return isItemInList(wishlistItems,item);
  });

  
  
  useEffect(() => {
    if (!ageValidation) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <section>
        <ToastContainer />
        <Signup />
        <Header prop={{}} />
        {isLoggedIn ? (
          <div className="Cart p-5">
            <h1 className="cart-heading text-start">Wishlist</h1>
            <div className="wishlist-section">
              {data.map((item, idx) => (
                <CartTile prop={{ item }} key={idx} />
              ))}
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
  let { item } = prop;
  let { cartItems,handleToggleItem } =
    useContext(globalContext);
  function removeFromWishlist(e) {
    handleToggleItem('wishlist',item);

  }
  function toggleItemCart() {
    handleToggleItem('cart',item)
  }

  return (
    <Card style={{ border: "none" }} className="wishlist-tile">
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
      <div className="wishlist-tile-body">
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
      </div>
      <div className="d-flex justify-content-between wishlist-tile-buttons">
        <button className="add-to-cart" onClick={toggleItemCart}>
          {cartItems.some(x=>x.id==item.id) ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            "Add to Cart"
          )}
        </button>
        <button
          className="remove-from-wishlist col-2"
          onClick={removeFromWishlist}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Card>
  );
}
