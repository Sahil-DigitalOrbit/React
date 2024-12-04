import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { ToastContainer } from "react-toastify";
import Signup from "../Components/Signup";
import Homogeneous from "../Components/sections/FilterProduct";
import { globalContext } from "../utils/context";
import { getCookie } from "../utils/cookies";

export default function AllProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { brands,categories,products } = useContext(globalContext);
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    
  const [modalStatus, setModalStatus] = useState(false);
  const { heading, type } = location.state || {};
  let data = [];
  let isProduct = false;
  let gBrands=brands;
  let gCategories=categories;
  // Determine data based on heading and type
  if (type) {
    data = products.filter(
      (item) => item.category == heading || item.brand == heading
    );
    isProduct = true;
    if(type=='Brands'){
      let findBrand=brands.find(br=>br.name==heading)||heading;
      gBrands=[findBrand];
    }else{
      let findCategory=categories.find(br=>br.name==heading)||heading;
      gCategories=[findCategory];
    }
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
      isProduct=true  
    }
  }

  // Navigate to verification if age validation fails
  useEffect(() => {
    if (!getCookie('ageValidation')||!getCookie('userInfo')) {
      navigate("/verify");
    }
  }, [navigate]);

  return (
    <section>
      <div className={modalStatus ? "modal-div" : ""}></div>
      <ToastContainer />
      <Signup />
      <Header prop={{}} />
      {retrievedUserInfo ? (
        <Homogeneous  prop={{ allData: data, isProduct, heading, setModalStatus,gBrands,gCategories }}/>
      ) : (
        <h1>Please Login First</h1>
      )}
    </section>
  );
}
