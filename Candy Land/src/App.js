import "./assests/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerifyPage from "./pages/LandingPage";
import { useState } from "react";
import { Customers } from "./assests/data/Data";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import AllProductsPage from "./pages/AllProductsPage";
import AccountPage from "./pages/AccountPage";
import ProductDetailsPage from "./pages/ProductDetail";

function App() {
  let [ageValidation, ageValidationChange] = useState(false);
  let [isLoggedIn, setLogin] = useState(false);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([...Customers]);
  let [cartItems,updateCart]=useState([]);
  let [wishlistItems,updateWishlist]=useState([]);
  let[orderHistory,updateOrderHistory]=useState([]);
  let[allRatingReviews,updateratingReviews]=useState([]);
  
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart,orderHistory,updateOrderHistory}}/>,
    },
    {
      path: "/verify",
      element: <VerifyPage ageValidationChange={ageValidationChange} />,
    },
    {
      path:'/about-product',
      element:<ProductDetailsPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,allRatingReviews,orderHistory,updateOrderHistory}} />
    },

    {
      path:'/products',
      element:<AllProductsPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,orderHistory,updateOrderHistory}} />
    },
    {
      path:'/cart',
      element:<CartPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,orderHistory,updateOrderHistory}} />
    },
    {
      path:'/wishlist',
      element:<WishlistPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,orderHistory,updateOrderHistory}} />
    },
    {
      path:'/account',
      element:<AccountPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,orderHistory,allRatingReviews,updateratingReviews,orderHistory,updateOrderHistory}} />
    }

  ]);

  return (
    <div className="App">
      
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
