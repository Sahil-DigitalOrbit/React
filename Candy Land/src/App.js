import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VerifyPage from "./Pages/VerifyPage";
import { useState } from "react";
import PopularPage from "./Pages/PopularPage";
import BestSellersPage from "./Pages/BestSellerspage";
import CategoriesPage from "./Pages/CategoriesPage";
import BrandsPage from "./Pages/BrandsPage";
import { Customers } from "./Data/Data";

function App() {
  let [ageValidation, ageValidationChange] = useState(false);
  let [isLoggedIn, setLogin] = useState(false);
  let [signupShow, setSignUpStatus] = useState(false);
  let [usersList, updateUsersList] = useState([...Customers]);
  

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList}}/>,
    },
    {
      path: "/verify",
      element: <VerifyPage ageValidationChange={ageValidationChange} />,
    },
    {
      path:'/popular',
      element:<PopularPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList}}/>
    },
    {
      path:'/best-sellers',
      element:<BestSellersPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList}}/>
    },
    {
      path:'/categories',
      element:<CategoriesPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList}} />
    },
    {
      path:'/brands',
      element:<BrandsPage prop={{ageValidation, isLoggedIn,setLogin,signupShow,setSignUpStatus,usersList,updateUsersList}} />
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
