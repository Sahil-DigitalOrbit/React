import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Brands, Orders, Products } from "../Data/Data";
import Homogeneous from "../Components/Homogeneous";

export default function Brandspage({ prop }) {
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
  let isproduct;
  useEffect(() => {
    if (!ageValidation) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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
        <Header prop={{ setSignUpStatus, isLoggedIn, setLogin }} />
        {isLoggedIn ? (
          <Homogeneous prop={Brands} heading={"Brands"}/>
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}
