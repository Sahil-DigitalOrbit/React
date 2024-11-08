import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ prop }) {
  let { setSignUpStatus, isLoggedIn,setLogin,cartPage,wishlistPage,isAccountPage,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart ,orderHistory,updateOrderHistory} = prop;
  let [searchInput,setInput]=useState('');
  const navigate=useNavigate();

  function updateValue(e) {
    let input = e.target.value;
    setInput(input);
  }

  const handleAccountButton = () => {
    navigate("/account");
  };

  const logoutUser=()=>{
    let allUserList=[...usersList];
    let userIndex=allUserList.findIndex(user=>user.uMail==isLoggedIn);
    allUserList[userIndex].cart=cartItems;
    allUserList[userIndex].wishlist=wishlistItems;
    allUserList[userIndex].orders=orderHistory;
    updateOrderHistory([]);
    updateUsersList(allUserList);
    updateWishlist([]);
    updateCart([]);
    setLogin(false);
  }
  return (
    <nav>
      <div>
        <img
          className="header-logo"
          src="https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU-Z6H2OM5E~HeN5ikIHjMc8L1caqDJ0S6qIRLtSfloP7JCSGZUfJMIxTwZxWSLpFN~ck6yJrKf0GfHiF-sCYXAnu2y7pgW4j5uWGAeMKo1j9XBzX4N1VOxc4ciiyyOToE1tOEBVU9Dgp3gKZZeSVG2zBxD5n8h-jMh8WTBfH8t7t0n-zKJc7EjvigE-f~sOJewx27qt1ld8kXA0~RVrbk-i8sX3wWwGZAHn~txHG3MjYma1vIBW2fCcEDMxi49Ms-NC7MECz2tFmB2bWSQEgjRzN57JZ5TWZqgGJwSZKWIoFgY4lGjBe8zpxi7B0oH0fHbf5~pNy55S-5qLQaJ14Q__"
        />
      </div>
      <div>
      {isLoggedIn ? (
          <>
        <input className="search-bar" type="text" placeholder='Search' value={searchInput} onChange={updateValue}></input> 
        {cartPage?<button className="mx-2"><Link style={{textDecoration:'none',color:'#eb3d31',height:'100%',width:'100%'}} to={'/'}>Home</Link></button>       
        :<button className="mx-2"><Link style={{textDecoration:'none',color:'#eb3d31',height:'100%',width:'100%'}} to={'/cart'}>Shop</Link></button>
        }
        {wishlistPage?<Link style={{textDecoration:'none',color:'#eb3d31'}} to={'/'}>Home</Link>       
        :<Link style={{textDecoration:'none',color:'#eb3d31'}} to={'/wishlist'}>Wishlist</Link>
        
        }
        <button   className={isAccountPage?'selected-button mx-2 ':'mx-2 border-0'}  onClick={handleAccountButton}>Account</button>
          
          <button className="sign-in-button mx-2" onClick={logoutUser}>
          Logout
        </button></>
        ) : (
          <>
        <button>Get the App</button>
        <button onClick={() => setSignUpStatus(true)}>
          Create Account
        </button>
        <button
          onClick={() => setSignUpStatus(true)}
          className="sign-in-button"
        >
          Sign In
        </button>
          </>
        )}
      </div>
    </nav>
  );
}
