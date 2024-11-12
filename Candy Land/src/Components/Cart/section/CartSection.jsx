import CartTile from "../CartTile";

export default function CartSection({ prop }) {
    const {data,subtotal,deliveryCost,checkoutCart,cartItems,updateCart,updateSubtotal}=prop;
  return (
    <section className="cart">
      <h1 className="cart-heading text-start">Cart</h1>
      <div className="cart-section">
        <div className="cart-items">
          {data.map((item, idx) => (
            <CartTile
              prop={{ item, cartItems, updateCart, subtotal, updateSubtotal }}
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
          <div>
            <button className="col checkout-button" onClick={checkoutCart}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
