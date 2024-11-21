import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "../Components/Header/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";
import PopulateHomepage from "../Components/sections/PopulateHomepage";
import { globalContext } from "../utils/context";

export default function HomePage() {
  let{ageValidation,isLoggedIn,products}=useContext(globalContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  //best seller data
  let bestSellers = products.sort((a,b)=> b.ordered-a.ordered).slice(0,8);

  //popular data 
  let popularProducts = products.sort((a, b) => b.ratings - a.ratings).slice(0,8);

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

