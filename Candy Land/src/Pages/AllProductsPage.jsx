import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Brands, Categories, Orders, Products } from "../assests/data/Data";
import Homogeneous from "../Components/sections/FilterProduct";
import { globalContext } from "../utils/context";

export default function AllProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { ageValidation, isLoggedIn } = useContext(globalContext);
  const [modalStatus, setModalStatus] = useState(false);
  const { heading, type } = location.state || {};
  let data = [];
  let isProduct = false;
  // Determine data based on heading and type
  if (type) {
    data = Products.filter(
      (item) => item.category == heading || item.brand == heading
    );
    isProduct = true;
  } else {
    if (heading == "Best Sellers") {
      isProduct = true;
      let bestSellers = Orders.reduce((prev, order) => {
        prev[order.product_id] = prev[order.product_id]
          ? prev[order.product_id] + order.quantity
          : order.quantity;
        return prev;
      }, {});

      data = Object.entries(bestSellers)
        .map(([product_id, quantity]) => ({
          product_id: product_id,
          quantity: quantity,
        }))
        .sort((a, b) => b.quantity - a.quantity)
        .map((i) => Products.find((product) => i.product_id == product.id));
    } else if (heading == "Popular") {
      isProduct = true;
      data = Products.sort((a, b) => b.ratings - a.ratings);
    } else if (heading == "Categories") {
      data = Categories;
    } else if (heading == "Brands") {
      data = Brands;
    }
  }

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);

  return (
    <section>
      <div className={modalStatus ? "modal-div" : ""}></div>
      <ToastContainer />
      <Signup />
      <Header prop={{}} />
      {isLoggedIn ? (
        <Homogeneous
          prop={{ allData: data, isProduct, heading, setModalStatus }}
        />
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}
