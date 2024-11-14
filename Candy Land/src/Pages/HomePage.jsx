import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";
import { Products, Orders } from "../assests/data/Data";
import PopulateHomepage from "../Components/sections/PopulateHomepage";
import { globalContext } from "../utils/context";

export default function HomePage() {
  let{ageValidation,isLoggedIn}=useContext(globalContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  //best seller data
  let bestSellers = Orders.reduce((prev, order) => {
    prev[order.product_id] = prev[order.product_id]
      ? prev[order.product_id] + order.quantity
      : order.quantity;
    return prev;
  }, {});

  
  bestSellers = Object.entries(bestSellers)
    .map(([product_id, quantity]) => ({
      product_id: product_id,
      quantity: quantity,
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .map((i) => Products.find((product) => i.product_id == product.id))
    .slice(0, 8);

  //popular data 
  let popularProducts = Products.sort((a, b) => b.ratings - a.ratings).slice(0,8);

  return (
    <section className="home-page">
      <ToastContainer />
      <Signup/>
      <Header prop={{}}/>
      {isLoggedIn ? (
        <PopulateHomepage prop={{ bestSellers, popularProducts}} />
        
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}

