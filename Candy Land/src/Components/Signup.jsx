import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Signup({ prop }) {
  let{signupShow, setSignUpStatus, usersList, updateUsersList, isLoggedIn, setLogin,updateWishlist ,updateCart}=prop;
  let [formDetails, setDetails] = useState({  uName: "",  uContact: "",  uMail: "",});
  let [isSignupPage, updateContent] = useState(true);
  let [loginWithMail, setLoginWithMail] = useState(false);
  
  //for change in content
  function updateValue(e) {
    let oldData = { ...formDetails };
    oldData[e.target.name] = e.target.value;
    setDetails(oldData);
  }

  //to add user to data
  function addUser(e) {
    e.preventDefault();
    if (isSignupPage) {
      let doExist = usersList.find((user) => {
        return (
          user.uMail === formDetails.uMail ||
          user.uContact === formDetails.uContact
        );
      });
      if (!doExist) {
        updateUsersList([...usersList, { ...formDetails }]);
        
        toast.success("Account created! Now please login...");
      } else {
        toast.error("User Exist! Please try login...");
      }
    } else {
      let doExist = usersList.find((user) => {
        return (
          user.uMail === formDetails.uMail ||
          user.uContact === formDetails.uContact
        );
      });
      if (doExist) {
        setLogin(doExist.uMail);
        updateCart(doExist.cart?doExist.cart:[]);
        updateWishlist(doExist.wishlist?doExist.wishlist:[]);
        toast.success(`Welcome ` + doExist.uName+'!');
      } else {
        toast.error("User Not found!");
      }
    }
    setDetails({
      uName: "",
      uContact: "",
      uMail: "",
    });
  }

  //switch b/w signup/login content
  function populateSignupSection() {
    let content = isSignupPage ? (
      <>
        <div className="signup-input-div">
          <label>Full Name</label>
          <input
            type="text"
            name="uName"
            onChange={updateValue}
            value={formDetails.uName}
            required
          ></input>
        </div>
        <div className="signup-input-div">
          <label>Contact Number</label>
          <input
            type="text"
            name="uContact"
            onChange={updateValue}
            value={formDetails.uContact}
            required
          ></input>
        </div>
        <div className="signup-input-div">
          <label>User Email ID</label>
          <input
            type="text"
            name="uMail"
            onChange={updateValue}
            value={formDetails.uMail}
            required
          ></input>
        </div>
        <div className="signup-input-term-div">
          <input
            type="checkbox"
            className="check-box-signup"
            name="uTerms"
            required
          ></input>
          <label>
            I agree to Candies's Terms of Service, Privacy Policy and Content
            Policies
          </label>
        </div>
      </>
    ) : (
      <>
        <div className="signup-input-div">
          <label>{loginWithMail ? "Email" : "Contact Number"}</label>
          <input
            type="text"
            name={loginWithMail ? "uMail" : "uContact"}
            onChange={updateValue}
            value={loginWithMail ? formDetails.uMail : formDetails.uContact}
            required
          ></input>
        </div>
      </>
    );

    return content;
  }

  //----------------------container content-------------------------------
  return (
    <section>
      <div className={signupShow && !isLoggedIn ? "modal-div" : ""}></div>
      <form
        onSubmit={addUser}
        className={
          signupShow && !isLoggedIn ? "login-signup-section active" : "login-signup-section"
        }
      >
        <div className="signup-section-header">
          <h2>{isSignupPage ? "Sign Up" : "Login"}</h2>
          <h2
            className="close-botton-h2"
            onClick={() => setSignUpStatus(false)}
          >
            &#10006;
          </h2>
        </div>
        {populateSignupSection()}
        <div className="signup-button-div">
          <button type="submit" className="signup-bottons sign-in-button">
            {isSignupPage ? "Create Account" : "Login"}
          </button>
          {!isSignupPage ? (
            <button
              type="button"
              className="signup-bottons"
              onClick={() => setLoginWithMail(!loginWithMail)}
            >
              {loginWithMail ? "Continue with Contact" : "Continue with Email"}
            </button>
          ) : (
            ""
          )}
          <p>or</p>
          <button className="signup-bottons">Sign In with google</button>
        </div>
        <div className="signup-login-div">
          {isSignupPage ? "Already have an account?" : "New to Candies?"}{" "}
          <span onClick={() => updateContent(!isSignupPage)}>
            {isSignupPage ? "Log In" : "Create account"}
          </span>
        </div>
      </form>
    </section>
  );
}
