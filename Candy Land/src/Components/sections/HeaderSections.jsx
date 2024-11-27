import { faChevronDown,  faBars,  faMagnifyingGlass,  faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
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
    const{handlerRouting,logoutUser}=prop;
    const{brands,categories}=useContext(globalContext);
    let[brand,setBrand]=useState(false);
    let[category,setCategories]=useState(false);
    let[account,setAccount]=useState(false);
    let allBrands=[...brands].slice(0,4);
    let allCategories=[...categories].slice(0,4);

    return(<>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Category</span>
                  <FontAwesomeIcon
                    className={category?'hide-drop-icon-active':"hide-drop-icon"}
                    icon={faChevronDown}
                    onClick={()=>setCategories(!category)}
                  />
                </h5>
                <span className={category
                      ? "homo-dropDown-weight activeDrop d-flex flex-column w-100"
                      : "homo-dropDown-weight"}>
                {allCategories.map((x,idx) => (
                    <button className="hamburger-buttons"
                    key={idx}
                      onClick={()=>handlerRouting('/products',{ heading: x.name, type: "aslk" })}
                    >
                      {x.name}
                    </button>
                  ))}
                  <button className="hamburger-buttons"
                      onClick={()=>handlerRouting('/products',{ heading: 'Categories' })}
                    >
                      View All
                    </button>
                </span>
              </div>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span>Brand</span>
                  <FontAwesomeIcon
                    className={brand?'hide-drop-icon-active':"hide-drop-icon"}
                    icon={faChevronDown}
                    onClick={()=>setBrand(!brand)}
                  />
                </h5>
                <span className={brand
                      ? "homo-dropDown-weight activeDrop d-flex flex-column w-100"
                      : "homo-dropDown-weight"}>
                {allBrands.map((brand,idx) => (
                    <button className="hamburger-buttons" key={idx}
                      onClick={()=>handlerRouting('/products',{ heading: brand.name, type: "aslk" })}
                    >
                      {brand.name}
                    </button>
                  ))}
                  <button className="hamburger-buttons"
                      onClick={()=>handlerRouting('/products',{ heading: 'Brands' })}
                    >
                      View All
                    </button>
                </span>
              </div>
              <div>
                <h5 className="homogeneous-filter-controls-head">
                  <span onClick={() => handlerRouting("/account")}>Account</span>
                  <FontAwesomeIcon
                    className={account?'hide-drop-icon-active':"hide-drop-icon"}
                    icon={faChevronDown}
                    onClick={()=>setAccount(!account)}
                  />
                </h5>
                <span className={"homo-dropDown-weight"}></span>
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
              <div onClick={logoutUser}>
                <button>Logout</button>
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