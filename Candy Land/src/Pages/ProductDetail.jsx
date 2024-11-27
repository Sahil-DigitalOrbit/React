import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import ProductTile from "../Components/PorductTile/ProductTile";
import { getCookie } from "../utils/cookies";

export default function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const retrievedUserInfo = JSON.parse(getCookie("userInfo"));
  const { item } = location.state || {};

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!getCookie("ageValidation")) {
      navigate("/verify");
    }
  }, [navigate]);

  return (
    <section>
      <ToastContainer />
      <Signup />
      <Header prop={{}} />
      {retrievedUserInfo ? (
        <>
          <ProductTile prop={{ item, isProduct: true, isProductPage: true }} />
        </>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}
