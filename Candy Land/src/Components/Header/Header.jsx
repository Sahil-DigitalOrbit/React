import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoImage } from "../../assests/images/images";
import {
  SignUpSection,
  HamburgerSection,
  LoggedInSection,
} from "../sections/HeaderSections";
import { globalContext } from "../../utils/context";
import { useFirebase } from "../../firebase/firebase";
import { deleteCookie, getCookie } from "../../utils/cookies";

export default function Header({ prop }) {
  let { cartPage, wishlistPage, isAccountPage } = prop;
  let { setSignUpStatus, setBrands,setCategories,updateCart,updateWishlist,updateOrderHistory,products,setUserInfo } = useContext(globalContext);
  let [searchInput, setInput] = useState("");
  let [showHamburder, setHamburger] = useState(false);
  let [showSearch, setSearchBar] = useState(false);
  let [showSearchProducts,setShowSearchProducts]=useState([]);
  
  const navigate = useNavigate();
  const firebase = useFirebase();
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    

  const handlerRouting = (route,state={}) => {
    navigate(route,{state});
  };
  const handlePoductPage = (item) =>
    navigate("/about-product", { state: { item } });


  function navBarInAction(showFunc, prevInput) {
    setHamburger(false);
    setSearchBar(false);
    showFunc(!prevInput);
  }

  function updateValue(e) {
    let input = e.target.value;
    setInput(input);
    if(input==''){
      setShowSearchProducts([]);
      return;
    }else{
      let data=findMatch(input);
      function findMatch(word) {
        let expression = new RegExp(word, "gi");
        return products.filter(
          (x) => x.name.match(expression) || x.brand.match(expression) ||x.category.match(expression)
        );
      }      
      setShowSearchProducts(data);
    }
  }



  const logoutUser = () => {
    firebase.logoutUser();
    setBrands([]);
    setCategories([]);
    updateOrderHistory([]);
    updateCart([]);
    updateWishlist([]);
    deleteCookie('userInfo');
    setUserInfo(null);
  };
  return (
    <>
      <nav>
        <div className="col-2" onClick={() => handlerRouting("/")}>
          <img className="header-logo" src='logo.png' />
        </div>
        <div className="nav-container-section">
          {retrievedUserInfo ? (
            <LoggedInSection  prop={{    handlerRouting,    navBarInAction,    searchInput,    updateValue,    cartPage,    isAccountPage,    wishlistPage,    logoutUser,    setSearchBar,    showSearch,    setHamburger,    showHamburder,  }}/>
          ) : (
            <SignUpSection prop={{ setSignUpStatus }} />
          )}
        </div>
      </nav>
      <div
        className={
          showHamburder || showSearch
            ? "hamburger-section-active"
            : "hamburger-section"
        }
      >
        {retrievedUserInfo&&showHamburder && <HamburgerSection prop={{ handlerRouting,logoutUser }} />}
        {showSearch && (
          <div>
            <input
              className="search-bar"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={updateValue}
            ></input>
          </div>
        )}
        
      </div>
      
      {searchInput && showSearchProducts.length > 0 && (
        <div className="search-products-section">
          {showSearchProducts.map(item => (
            <div onClick={()=>handlePoductPage(item)} key={item.id} className="search-product-tile">
              <div className="search-product-img-div">
                <img className="search-product-img" src={item.image[0]} alt={item.name} />
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
