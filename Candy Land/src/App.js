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
import { globalContext } from "./utils/context";

function App() {
  let [ageValidation, ageValidationChange] = useState(false);
  let [isLoggedIn, setLogin] = useState(false);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([...Customers]);
  let [cartItems,updateCart]=useState([]);
  let [wishlistItems,updateWishlist]=useState([]);
  let[orderHistory,updateOrderHistory]=useState([]);
  let[allRatingReviews,updateratingReviews]=useState([]);
  let [isSignupPage, updateSignupContent] = useState(true);
  let routes = createBrowserRouter([
    {
      path: "/",
      element:  <HomePage/>,
    },
    {
      path: "/verify",
      element: <VerifyPage/>,
    },
    {
      path:'/about-product',
      element:<ProductDetailsPage />
    },

    {
      path:'/products',
      element:<AllProductsPage/>
    },
    {
      path:'/cart',
      element:<CartPage/>
    },
    {
      path:'/wishlist',
      element:<WishlistPage/>
    },
    {
      path:'/account',
      element:<AccountPage/>
    }

  ]);

  return (
    <div className="App">
      <globalContext.Provider value={{ageValidation,ageValidationChange, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,allRatingReviews,orderHistory,updateOrderHistory,updateratingReviews,isSignupPage, updateSignupContent}}>
      <RouterProvider router={routes} />
      </globalContext.Provider>
    </div>
  );
}

export default App;
