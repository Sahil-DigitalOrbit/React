import "../HomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import { ToastContainer } from "react-toastify";
import {Customers, Products,Orders} from "../Data/Data";
import Template from "../Components/Template";

export default function HomePage({ ageValidation }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!ageValidation) {
      navigate("/verify");
    }
  }, [ageValidation, navigate]);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([...Customers]);
  let [userLogin, setLogin] = useState(false);
  

  //best seller and popular products
  let bestSellers =Orders.reduce((prev, order) => {
    prev[order.product_id] = prev[order.product_id] ? prev[order.product_id] + order.quantity : order.quantity;
    return prev;
  }, {});

  bestSellers = Object.entries(bestSellers).map(([product_id, quantity]) => ({
    product_id: product_id, 
    quantity: quantity
  })).sort((a, b) => b.quantity - a.quantity).map(i=>Products.find(product=>i.product_id==product.id)).slice(0,8);
  
  let popularProducts=Products.sort((a,b)=>b.ratings-a.ratings).slice(0,8);
  


  return (
    <section>
      <ToastContainer />
      <Signup  prop={{signupShow,setSignUpStatus, usersList, updateUsersList,userLogin ,setLogin}}/>
      <Header prop={{setSignUpStatus,userLogin,setLogin}} />
      {userLogin?<section className="homepage-section">
        <Template head={'Best Sellers'} data={bestSellers} />
        <Template head={'Popular'} data={popularProducts}/>
      </section>:<h1>Please Login First</h1>}
    </section>
  );
}

function pupolateHomepageSection(){

}


