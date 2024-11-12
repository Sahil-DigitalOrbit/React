
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoImage } from "../../assests/images/images";
import{ SignUpSection,  HamburgerSection,LoggedInSection } from "./sections/HeaderSections";

export default function Header({ prop }) {
  let {
    setSignUpStatus,
    isLoggedIn,
    setLogin,
    cartPage,
    wishlistPage,
    isAccountPage,
    usersList,
    updateUsersList,
    wishlistItems,
    updateWishlist,
    cartItems,
    updateCart,
    orderHistory,
    updateOrderHistory,
  } = prop;
  let [searchInput, setInput] = useState("");
  let [showHamburder, setHamburger] = useState(false);
  let [showSearch, setSearchBar] = useState(false);
  const navigate = useNavigate();


  const handlerRouting = (route) => {
    navigate(route);
  };

  function navBarInAction(showFunc, prevInput) {
    setHamburger(false);
    setSearchBar(false);
    showFunc(!prevInput);
  }
  
  function updateValue(e) {
    let input = e.target.value;
    setInput(input);
  }

  const logoutUser = () => {
    let allUserList = [...usersList];
    let userIndex = allUserList.findIndex((user) => user.uMail == isLoggedIn);
    allUserList[userIndex].cart = cartItems;
    allUserList[userIndex].wishlist = wishlistItems;
    allUserList[userIndex].orders = orderHistory;
    updateOrderHistory([]);
    updateUsersList(allUserList);
    updateWishlist([]);
    updateCart([]);
    setLogin(false);
  };
  return (
    <>
      <nav>
        <div className="col-2" onClick={() => handlerRouting("/")}>
          <img
            className="header-logo"
            src={logoImage}
          />
        </div>
        <div className="nav-container-section">
          {isLoggedIn ? (
            <LoggedInSection prop={{handlerRouting,navBarInAction,searchInput,updateValue,cartPage,isAccountPage,wishlistPage,logoutUser,setSearchBar,showSearch,setHamburger,showHamburder}}/>
          ) : (
            <SignUpSection prop={{setSignUpStatus}}/>
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
        {showHamburder &&(
          <HamburgerSection prop={{handlerRouting}}/>
        ) }
        {showSearch && (
          <div>
            <input  className="search-bar"  type="text"  placeholder="Search"  value={searchInput}  onChange={updateValue}></input>
          </div>
        )}
      </div>
    </>
  );
}





