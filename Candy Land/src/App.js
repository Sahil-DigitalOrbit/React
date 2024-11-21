import "./assests/styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerifyPage from "./pages/LandingPage";
import { useState } from "react";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import AllProductsPage from "./pages/AllProductsPage";
import AccountPage from "./pages/AccountPage";
import ProductDetailsPage from "./pages/ProductDetail";
import { globalContext } from "./utils/context";
import { useFirebase } from "./firebase/firebase";

function App() {
  let firebase = useFirebase();
  let [ageValidation, ageValidationChange] = useState(false);
  let [isLoggedIn, setLogin] = useState();
  let [signupShow, setSignUpStatus] = useState(false);
  let [cartItems, updateCart] = useState([]);
  let [wishlistItems, updateWishlist] = useState([]);
  let [orderHistory, updateOrderHistory] = useState([]);
  let [isSignupPage, updateSignupContent] = useState(true);
  let [products, setProducts] = useState([]);
  let [brands, setBrands] = useState([]);
  let [categories, setCategories] = useState([]);
  
  //curd operations for cart and wishlist
  const handleToggleItem = async (listType, item,quantity=1) => {
    const isItemInList = (list, item) => list.some((x) => x.id === item.id);
  
    const toggleItem = (item, list, updateFunc, addFields = {}) => {
      const updatedList = isItemInList(list, item)
        ? list.filter((c) => c.id !== item.id)
        : [...list, { id: item.id, ...addFields }];
  
      updateFunc(updatedList);
      return updatedList;
    };
  
    if (listType === "cart") {
      const updatedCart = toggleItem(item, cartItems, updateCart, {
        quantity,
        weight: item.weight,
      });
      await firebase.updateCart(isLoggedIn.cartId, updatedCart);
    } else if (listType === "wishlist") {
      const updatedWishlist = toggleItem(item, wishlistItems, updateWishlist);
      await firebase.updateWishlist(isLoggedIn.wishlistId, updatedWishlist);
    }
  };

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/verify",
      element: <VerifyPage />,
    },
    {
      path: "/about-product",
      element: <ProductDetailsPage />,
    },

    {
      path: "/products",
      element: <AllProductsPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/wishlist",
      element: <WishlistPage />,
    },
    {
      path: "/account",
      element: <AccountPage />,
    },
  ]);

  return (
    <div className="App">
      <globalContext.Provider
        value={{
          ageValidation, ageValidationChange,
          isLoggedIn, setLogin,
          signupShow, setSignUpStatus,
          products, setProducts,
          brands,setBrands,
          categories, setCategories,
          wishlistItems, updateWishlist,
          cartItems, updateCart,
          orderHistory, updateOrderHistory,
          isSignupPage, updateSignupContent,
          handleToggleItem
        }}
      >
        <RouterProvider router={routes} />
      </globalContext.Provider>
    </div>
  );
}

export default App;
