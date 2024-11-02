import "../HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";
import { Products, Orders, Categories, Brands } from "../Data/Data";
import Template from "../Components/Template";

export default function HomePage({ prop }) {
  let {
    ageValidation,
    isLoggedIn,
    setLogin,
    signupShow,
    setSignUpStatus,
    usersList,
    updateUsersList,
  } = prop;

  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  //best seller and popular products
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

  let popularProducts = Products.sort((a, b) => b.ratings - a.ratings).slice(
    0,
    8
  );

  return (
    <section className="home-page">
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
      <Header prop={{ setSignUpStatus, isLoggedIn, setLogin }} />
      {isLoggedIn ? (
        <PopulateHomepage prop={{ bestSellers, popularProducts }} />
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}

function PopulateHomepage({ prop }) {
  let { bestSellers, popularProducts } = prop;
  return (
    <section className="homepage-section">
      <div className="homepage-advertise-section">
        <img
          className="homepage-advertise-section-img"
          src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
        />
      </div>
      <Template head={"Categories"} data={Categories} goTo={"/categories"} />
      <hr></hr>

      <Template
        head={"Best Sellers"}
        data={bestSellers}
        isProduct={true}
        goTo={"/best-sellers"}
      />
      <hr></hr>
      <Template
        head={"Popular"}
        data={popularProducts}
        isProduct={true}
        goTo={"/popular"}
      />
      <hr />
      <Template head={"Brands"} data={Brands} goTo={"/brands"} />
    </section>
  );
}
