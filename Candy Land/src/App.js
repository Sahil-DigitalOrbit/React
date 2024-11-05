import "./Styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VerifyPage from "./Pages/VerifyPage";
import { useState } from "react";
import PopularPage from "./Pages/PopularPage";
import BestSellersPage from "./Pages/BestSellerspage";
import CategoriesPage from "./Pages/CategoriesPage";
import BrandsPage from "./Pages/BrandsPage";
import { Customers } from "./Data/Data";
import CartPage from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";

function App() {
  let [ageValidation, ageValidationChange] = useState(false);
  let [isLoggedIn, setLogin] = useState(false);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([...Customers]);
  let [cartItems,updateCart]=useState([]);
  let [wishlistItems,updateWishlist]=useState([]);
  
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart}}/>,
    },
    {
      path: "/verify",
      element: <VerifyPage ageValidationChange={ageValidationChange} />,
    },
    {
      path:'/popular',
      element:<PopularPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist ,cartItems,updateCart}}/>
    },
    {
      path:'/best-sellers',
      element:<BestSellersPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart}}/>
    },
    {
      path:'/categories',
      element:<CategoriesPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,cartItems,updateCart}} />
    },
    {
      path:'/brands',
      element:<BrandsPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,cartItems,updateCart}} />
    },
    {
      path:'/cart',
      element:<CartPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart}} />
    },{
      path:'/wishlist',
      element:<WishlistPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList,wishlistItems,updateWishlist,cartItems,updateCart}} />
    }

  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
