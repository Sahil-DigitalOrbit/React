import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Homogeneous from "../Components/sections/FilterProduct";
import { globalContext } from "../utils/context";

export default function AllProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { ageValidation, isLoggedIn,brands,categories,products } = useContext(globalContext);
  const [modalStatus, setModalStatus] = useState(false);
  const { heading, type } = location.state || {};
  let data = [];
  let isProduct = false;
  // Determine data based on heading and type
  if (type) {
    data = products.filter(
      (item) => item.category == heading || item.brand == heading
    );
    isProduct = true;
  } else {
    if (heading == "Best Sellers") {
      isProduct = true;
      data = products.sort((a,b)=> b.ordered-a.ordered);

    } else if (heading == "Popular") {
      isProduct = true;
      data = products.sort((a, b) => b.ratings - a.ratings);
    } else if (heading == "Categories") {
      data = categories;
    } else if (heading == "Brands") {
      data = brands;
    }
    else{
      data=products;  
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
