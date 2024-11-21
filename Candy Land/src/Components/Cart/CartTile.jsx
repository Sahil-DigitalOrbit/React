import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faDollar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { globalContext } from "../../utils/context";
import { useFirebase } from "../../firebase/firebase";

export default function CartTile({ prop }) {
    let { item,  subtotal, updateSubtotal } = prop;
    let { handleToggleItem,cartItems,updateCart,isLoggedIn } = useContext(globalContext);
    let cartItem=[...cartItems].find(x=>x.id==item.id);
    let firebase=useFirebase();
    let [quantity, updateQuantity] = useState(cartItem.quantity||1);
    function removeFromCart(e) {
      handleToggleItem('cart',item);
      updateSubtotal((subtotal -= parseFloat(item.price).toFixed(2) * quantity));
    }
  
    function changeQuantity(e) {
      let newQuantity = quantity + Number(e.target.getAttribute("data-skip"));
      newQuantity = newQuantity < 1 ? 1 : newQuantity;
      const priceDifference = item.price * (newQuantity - quantity);
      updateSubtotal(subtotal + priceDifference);
      updateQuantity(newQuantity);
      let newCartItems=[...cartItems].map(x=>{
        if(item.id==x.id)x.quantity=newQuantity;
        return x;
      }) 
      updateCart(newCartItems);
      firebase.updateCart(isLoggedIn.cartId,newCartItems);     

    }
  
    return (
      <Card style={{ border: "none" }} className="cart-tile d-flex">
        <div className="position-relative border h-75 cart-image-div">
          <Card.Img  className="card-image"  variant="top"  src={item.image[0]}/>
  
          <span className="position-absolute card-rating-div">
            <FontAwesomeIcon icon={faStar} />
            {item.ratings}
          </span>
        </div>
        <div className="cart-tile-body">
          <div>
            <Card.Text  style={{ color: "#00000063" }}  className="d-flex justify-content-between">
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
            <button  className="change-count"  data-skip="-1"  onClick={changeQuantity}>
              -
            </button>
            <input  className="item-count"  type="number"  value={quantity}  readOnly/>
            <button  className="change-count"  data-skip="1"  onClick={changeQuantity}>
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
  