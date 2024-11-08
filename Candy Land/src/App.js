import "./Styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VerifyPage from "./Pages/VerifyPage";
import { useState } from "react";
import { Customers } from "./Data/Data";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import AllProductsPage from "./Pages/AllProductsPage";
import AccountPage from "./Pages/AccountPage";
import ProductsPage from "./Pages/ProductPage";

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
      element:<ProductsPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart,allRatingReviews,orderHistory,updateOrderHistory}} />
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
