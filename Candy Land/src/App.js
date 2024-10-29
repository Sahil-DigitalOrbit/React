import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VerifyPage from "./Pages/VerifyPage";
import { useState } from "react";

function App() {
  let [ageValidation, ageValidationChange] = useState(false);
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage ageValidation={ageValidation} />,
    },
    {
      path: "/verify",
      element: <VerifyPage ageValidationChange={ageValidationChange} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
