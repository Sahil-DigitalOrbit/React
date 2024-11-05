import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import { Categories } from "../Data/Data";
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
          <Homogeneous prop={{allData:Categories, heading:"Categories"}} />
        ) : (
          <h1>Please Login First</h1>
        )}
      </section>
    </>
  );
}
