import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import ProductTile from "../Components/PorductTile/ProductTile";
import { globalContext } from "../utils/context";

export default function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ageValidation, isLoggedIn } = useContext(globalContext);
  const { item } = location.state || {};

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);

  return (
    <section>
      <ToastContainer />
      <Signup />
      <Header prop={{}} />
      {isLoggedIn ? (
        <>
          <ProductTile prop={{ item, isProduct: true, isProductPage: true }} />
        </>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}
