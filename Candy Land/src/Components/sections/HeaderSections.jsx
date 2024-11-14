import { faChevronDown,  faBars,  faMagnifyingGlass,  faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { globalContext } from "../../utils/context";

export const SignUpSection=({prop})=>{
    const{setSignUpStatus}=prop;
    let {updateSignupContent}=useContext(globalContext);
    return(<>
      <div className="nav-bar-container">
        <button>Get the App</button>
        <button onClick={() => {
          updateSignupContent(true);
          setSignUpStatus(true)
        }}>
          Create Account
        </button>
        <button
          onClick={() => {
            updateSignupContent(false);
            setSignUpStatus(true)
          }}
          className="sign-in-button"
        >
          Sign In
        </button>
      </div>
      <div className="cell-signin-div">
        <button
          className="sign-in-button"
          onClick={() => setSignUpStatus(true)}
        >
          SignUp/Login
        </button>
      </div>
    </>)
  }


  export const HamburgerSection =({prop})=>{
    const{handlerRouting}=prop;
    return(<>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Category</span>
                  <FontAwesomeIcon
                    className={"hide-drop-icon"}
                    icon={faChevronDown}
                  />
                </h5>
                <span className={"homo-dropDown-weight"}></span>
              </div>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Brand</span>
                  <FontAwesomeIcon
                    className={"hide-drop-icon"}
                    icon={faChevronDown}
                  />
                </h5>
                <span className={"homo-dropDown-weight"}></span>
              </div>
              <div onClick={() => handlerRouting("/account")}>
                <h5 className="homogeneous-filter-controls-head">Account</h5>
              </div>
              <div>
                <h5
                  onClick={() => handlerRouting("/wishlist")}
                  className="homogeneous-filter-controls-head"
                >
                  Wishlist
                </h5>
              </div>
              <div onClick={() => handlerRouting("/cart")}>
                <h5 className="homogeneous-filter-controls-head">Cart</h5>
              </div>
            </>)
  }

  export const LoggedInSection=({prop})=>{
    const {handlerRouting,navBarInAction,searchInput,updateValue,cartPage,isAccountPage,wishlistPage,logoutUser,setSearchBar,showSearch,setHamburger,showHamburder}=prop;
    
    
    
    return(<>
      <div className="nav-bar-container">
        <input  className="search-bar"  type="text"  placeholder="Search"  value={searchInput}  onChange={updateValue}></input>
        
        <button className={cartPage ? "selected-button" : ""}  onClick={() => handlerRouting("/cart")}>Cart</button>
        
        <button className={wishlistPage ? "selected-button" :''} onClick={() => handlerRouting("/wishlist")}>  Wishlist</button>
  
        <button  className={isAccountPage ? "selected-button" : ""}  onClick={() => handlerRouting("/account")}>Account</button>
  
        <button className="sign-in-button mx-2" onClick={logoutUser}>  Logout</button>
      </div>
      <div className="cell-signin-div">
        <button  className="cell-nav-buttons non-border-buttons"  onClick={() => navBarInAction(setSearchBar, showSearch)}><FontAwesomeIcon icon={showSearch ? faX : faMagnifyingGlass}/></button>
        <button  onClick={() => navBarInAction(setHamburger, showHamburder)}  className="cell-nav-buttons non-border-buttons"><FontAwesomeIcon icon={showHamburder ? faX : faBars}/></button>
      </div>
    </>);
  }