
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { globalContext } from "../utils/context";
export default function VerifyPage() {
  let{ageValidationChange}=useContext(globalContext)
  let navigate = useNavigate();
  function handleNoButton() {
    toast("ACCESS IS RESTRICTED!");
  }
  function handleYesButton() {
    ageValidationChange(true);
    navigate("/");
  }
  return (
    <section className="verify-page-sextion">
        <img className="verify-page-background-image-top" src="https://s3-alpha-sig.figma.com/img/0939/3b48/56483b2e33f8c83648b77908d09d7335?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UV~ZU11CC0QyRLqy3pAWiv6-OHNQAHe15nojDDid2kImiCIYT2WiaBWdfXkZsbBWwz7~a1H~eBlHf9XNIHSJ~sQ0Fu8BKvIUle8cKpEIKWL4GPVsqSbXZRrH~6Sp3IygK93pOaKHhbh88nSSQ3cNY9gj6xa19EfnCQ85v3j6LKoslDVzCTeIordoOrNAiynovmuWnLw6~xMNNJnFzLRnqBITDIxjQ3D0mKf1giJ5ZAHiww2QtOZYC4A0pYhoEuDu-38DlAqnXbwQzQeJK4JpdyJKw6d0h-5MK3jpqJA2Xiuh7j1OHB42vd86u1UgufFRgU56oD16b3fQ7iPLAjzO1Q__"></img>
        <img className="verify-page-background-image-bottom" src="https://s3-alpha-sig.figma.com/img/0939/3b48/56483b2e33f8c83648b77908d09d7335?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UV~ZU11CC0QyRLqy3pAWiv6-OHNQAHe15nojDDid2kImiCIYT2WiaBWdfXkZsbBWwz7~a1H~eBlHf9XNIHSJ~sQ0Fu8BKvIUle8cKpEIKWL4GPVsqSbXZRrH~6Sp3IygK93pOaKHhbh88nSSQ3cNY9gj6xa19EfnCQ85v3j6LKoslDVzCTeIordoOrNAiynovmuWnLw6~xMNNJnFzLRnqBITDIxjQ3D0mKf1giJ5ZAHiww2QtOZYC4A0pYhoEuDu-38DlAqnXbwQzQeJK4JpdyJKw6d0h-5MK3jpqJA2Xiuh7j1OHB42vd86u1UgufFRgU56oD16b3fQ7iPLAjzO1Q__"></img>
      <div className="verify-page-sextion-container">
        <div>
          <img
            className="verify-page-logo"
            src="https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HStRYWPJH9QHPDnoQJ667j2H~xk1BM~SSwuwGumO3rR8cca5ydkj9DFlmMNgheUfUiWXRd7wUA1aEn7h4WGfCNIZXsyMdXiAKiulEx6p2eFgcPXngkBnibbCeaXpnTVXQYAmOtXTqX8tdUgelRieSVY36qO1ROwgER9KYT84suVRFmZfdCqxNU~K4vxwnYUwjHGSzGBK-o12lnU4r3EZuY3j1UvYQ3WjM86Rkgtozb7Jt4x5C03WGY46L-WvNIT8ccQSCD4fX8VGbtmGroElfU29fcu4RU0xzP7W53LM34jXTB-NymIwNBC415-alLkNF25EkXfl90dta4zEcUxevQ__"
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
