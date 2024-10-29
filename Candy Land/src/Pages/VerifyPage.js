import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function VerifyPage({ ageValidationChange }) {
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
        <img className="verify-page-background-image-top" src="https://s3-alpha-sig.figma.com/img/0939/3b48/56483b2e33f8c83648b77908d09d7335?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKa2TG6q9ueWGeCly3mztSM1Z1YOeh4BSVzSxRByWXcQ2xwkD9xvAE0BeykhuDpqSsEOU-Z7b0unZ7~cXIoQ4pbdOin4SBRf3eqFcDNrE173DTvFgmzWJtW6ns-1kKuZPZMFvLxYUszBFAmAzlItvg8ziJ2u~uGG1ZhQszg8QYB4AliHX2Hz6FEfuEPxz5niL4CB0T89j8DmZY0cwD~3MAreKMHcRE1NzoWqiJ~58EbxO-EBI4PVFvDi6B19pAjaTJLKB-Gx4N1xOtTZWomk4fEVdNdfrGBBM2QBckigai~~P7aeBmhBQnq0pQIuu7uLs-owuIR0O17fxj0b5fEm4w__"></img>
        <img className="verify-page-background-image-bottom" src="https://s3-alpha-sig.figma.com/img/0939/3b48/56483b2e33f8c83648b77908d09d7335?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKa2TG6q9ueWGeCly3mztSM1Z1YOeh4BSVzSxRByWXcQ2xwkD9xvAE0BeykhuDpqSsEOU-Z7b0unZ7~cXIoQ4pbdOin4SBRf3eqFcDNrE173DTvFgmzWJtW6ns-1kKuZPZMFvLxYUszBFAmAzlItvg8ziJ2u~uGG1ZhQszg8QYB4AliHX2Hz6FEfuEPxz5niL4CB0T89j8DmZY0cwD~3MAreKMHcRE1NzoWqiJ~58EbxO-EBI4PVFvDi6B19pAjaTJLKB-Gx4N1xOtTZWomk4fEVdNdfrGBBM2QBckigai~~P7aeBmhBQnq0pQIuu7uLs-owuIR0O17fxj0b5fEm4w__"></img>
      <div>
        <div>
          <img
            className="verify-page-logo"
            src="https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU-Z6H2OM5E~HeN5ikIHjMc8L1caqDJ0S6qIRLtSfloP7JCSGZUfJMIxTwZxWSLpFN~ck6yJrKf0GfHiF-sCYXAnu2y7pgW4j5uWGAeMKo1j9XBzX4N1VOxc4ciiyyOToE1tOEBVU9Dgp3gKZZeSVG2zBxD5n8h-jMh8WTBfH8t7t0n-zKJc7EjvigE-f~sOJewx27qt1ld8kXA0~RVrbk-i8sX3wWwGZAHn~txHG3MjYma1vIBW2fCcEDMxi49Ms-NC7MECz2tFmB2bWSQEgjRzN57JZ5TWZqgGJwSZKWIoFgY4lGjBe8zpxi7B0oH0fHbf5~pNy55S-5qLQaJ14Q__"
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
