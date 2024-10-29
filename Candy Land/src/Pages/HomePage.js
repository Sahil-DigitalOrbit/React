import "../HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";

export default function HomePage({ ageValidation }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([]);

  return (
    <section>
      <ToastContainer/>
      

      <Signup
        signupShow={signupShow}
        setSignUpStatus={setSignUpStatus}
        usersList={usersList}
        updateUsersList={updateUsersList}
      />
      <Header setSignUpStatus={setSignUpStatus} />
    </section>
  );
}
