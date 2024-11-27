import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "../utils/cookies";
export default function VerifyPage() {
  let navigate = useNavigate();
  function handleNoButton() {
    toast("ACCESS IS RESTRICTED!");
  }
  function handleYesButton() {
    setCookie('ageValidation','True');
    navigate("/");
  }
  return (
    <section className="verify-page-sextion">
        <img className="verify-page-background-image-top" src='border.png'></img>
        <img className="verify-page-background-image-bottom" src="border.png"></img>
      <div className="verify-page-sextion-container">
        <div>
          <img
            className="verify-page-logo"
            src="logo.png"
          />
        </div>
        <div>
          <div>
            Please confirm if you are 21 years of age, or older to enter
          </div>
          <div>
            <button className="verify-age-button" onClick={handleYesButton}>Yes</button>
            <button className="verify-age-button" onClick={handleNoButton}>No</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
