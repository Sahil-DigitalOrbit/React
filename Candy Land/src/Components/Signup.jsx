import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { globalContext } from "../utils/context";
import { useFirebase } from "../firebase/firebase";
import {  setCookie } from "../utils/cookies";

export default function Signup() {
  let {  signupShow,  setSignUpStatus,  isSignupPage,  updateSignupContent,setUserInfo,userInfo} = useContext(globalContext);
  let [login,setLogin]=useState(false);
  
  //firebase instance
  const firebase = useFirebase();
  let [formDetails, setDetails] = useState({
    uName: "",
    uContact: "",
    uMail: "",
    uPassword: "",
  });
  let [loginWithMail, setLoginWithMail] = useState(false);
  let [toPassword, setToPassword] = useState(false);
  let[load,setLoad]=useState(false);

  //for change in content
  function updateValue(e) {
    let oldData = { ...formDetails };
    oldData[e.target.name] = e.target.value;
    setDetails(oldData);
  }

  //to add user to data
  async function addUser(e) {
    e.preventDefault();
    setLoad(true);
    if (isSignupPage) {
      try {
        await firebase.signupUserWithEmailPassword(
          formDetails.uMail,
          formDetails.uPassword
        );
        await firebase.setUserSignupDetails(formDetails.uMail,formDetails.uName,formDetails.uContact);  
        toast.success("Account created! Now please login...");
        
      } catch (err) {
        toast.error("User Exist! Please try login...");
      }
    } else {
      try {
        await firebase.signinUserWithEmailPassword(  formDetails.uMail,  formDetails.uPassword);
        let userInfo=await firebase.setUserSignupDetails(formDetails.uMail,formDetails.uName,formDetails.uContact);
        setCookie('userInfo', JSON.stringify(userInfo));
        toast.success(`Welcome! ${userInfo.name}`);
        setLogin(true);
        setSignUpStatus(false);
        setUserInfo(userInfo)
      } catch (err) {
        toast.error("User Credentials not valid!");
      }
    }
    setLoad(false)
    setToPassword(false);
    setDetails({ uName: "", uContact: "", uMail: "", uPassword: "" });
  }

  //sign up with google
  const signupWithGoogle = async () => {
    setLoad(true)
    try {
      let user = await firebase.signupUserWithGoogle();
      let userInfo=await firebase.setUserSignupDetails(user.email,user.displayName);
      setCookie('userInfo', JSON.stringify(userInfo));
      toast.success(`Welcome! ${userInfo.name}`);
      setLogin(true);
      setSignUpStatus(false)
      setUserInfo(userInfo);
    } catch (err) {
      toast.error("Login failed! try different method");
    }
    setLoad(false)
  };

  //----------------------container content-------------------------------
  return (
    <section>
      <div className={signupShow && !login ? "modal-div" : ""}></div>
      <div className={load?"active-spinner":'hide'}><img src="./spinnerr.gif" /></div>
      <UnifiedAuthSection  prop={{  isSignupPage,  loginWithMail,  updateValue,  formDetails,  setLoginWithMail,  updateSignupContent,  setToPassword,  setSignUpStatus,  toPassword,  signupShow,  addUser,  firebase,  signupWithGoogle,  userInfo}}/>
    </section>
  );
}
function UnifiedAuthSection({ prop }) {
  const {  isSignupPage,  loginWithMail,  updateValue,  formDetails,  setLoginWithMail,  updateSignupContent,  setToPassword,  setSignUpStatus,  toPassword,  signupShow,  userInfo,  addUser,  signupWithGoogle,} = prop;

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const enterPasswordFunc = (e) => {
    e.preventDefault();
    setToPassword(true);
  };

  const switchContent = () => {
    updateSignupContent(!isSignupPage);
    setToPassword(false);
  };

  return (
    <form
      onSubmit={toPassword ? addUser : enterPasswordFunc}
      className={
        signupShow && !userInfo
          ? "login-signup-section active"
          : "login-signup-section"
      }
    >
      <div className="signup-section-header">
        <h2>{isSignupPage ? "Sign Up" : "Login"}</h2>
        <h2 className="close-botton-h2" onClick={() => setSignUpStatus(false)}>
          &#10006;
        </h2>
      </div>

      {/* Form Fields */}
      {toPassword ? (
        <>
          {/* Password Section */}
          <div className="signup-input-div my-1">
            <label>{isSignupPage ? "Create Password" : "Enter Password"}</label>
            <input
              type={showPassword ? "text" : "password"}
              name="uPassword"
              onChange={updateValue}
              value={formDetails.uPassword || ""}
              required
            />
            <div
              onClick={handlePasswordToggle}
              className="signup-input-term-div my-2"
            >
              <input
                type="checkbox"
                className="check-box-signup"
                name="uShowPassword"
                checked={showPassword}
              />
              <label>Show Password</label>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Sign-Up or Login Section */}
          {isSignupPage ? (
            <>
              <div className="signup-input-div">
                <label>Full Name</label>
                <input
                  type="text"
                  name="uName"
                  onChange={updateValue}
                  value={formDetails.uName || ""}
                  required
                />
              </div>
              <div className="signup-input-div">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="uContact"
                  onChange={updateValue}
                  value={formDetails.uContact || ""}
                  required
                />
              </div>
              <div className="signup-input-div">
                <label>User Email ID</label>
                <input
                  type="text"
                  name="uMail"
                  onChange={updateValue}
                  value={formDetails.uMail || ""}
                  required
                />
              </div>
              <div className="signup-input-term-div">
                <input
                  type="checkbox"
                  className="check-box-signup"
                  name="uTerms"
                  required
                />
                <label>
                  I agree to Candies's Terms of Service, Privacy Policy and
                  Content Policies
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
                  value={
                    loginWithMail
                      ? formDetails.uMail || ""
                      : formDetails.uContact || ""
                  }
                  required
                />
              </div>
            </>
          )}
        </>
      )}

      {/* Buttons */}
      <div className="signup-button-div">
        <button type="submit" className="signup-bottons sign-in-button">
          {toPassword
            ? isSignupPage
              ? "Create Account"
              : "Login"
            : isSignupPage
            ? "Continue"
            : "Login"}
        </button>
        {!isSignupPage && !toPassword && (
          <button
            type="button"
            className="signup-bottons"
            onClick={() => setLoginWithMail(!loginWithMail)}
          >
            {loginWithMail ? "Continue with Contact" : "Continue with Email"}
          </button>
        )}
        <p>or</p>
        <button onClick={signupWithGoogle} className="signup-bottons">
          Sign In with Google
        </button>
      </div>

      {/* Footer */}
      <div className="signup-login-div">
        {isSignupPage ? "Already have an account?" : "New to Candies?"}{" "}
        <span onClick={switchContent}>
          {isSignupPage ? "Log In" : "Create account"}
        </span>
      </div>
    </form>
  );
}
