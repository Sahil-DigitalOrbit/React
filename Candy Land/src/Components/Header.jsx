export default function Header({ prop }) {
  let { setSignUpStatus, userLogin,setLogin } = prop;
  return (
    <nav>
      <div>
        <img
          className="header-logo"
          src="https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU-Z6H2OM5E~HeN5ikIHjMc8L1caqDJ0S6qIRLtSfloP7JCSGZUfJMIxTwZxWSLpFN~ck6yJrKf0GfHiF-sCYXAnu2y7pgW4j5uWGAeMKo1j9XBzX4N1VOxc4ciiyyOToE1tOEBVU9Dgp3gKZZeSVG2zBxD5n8h-jMh8WTBfH8t7t0n-zKJc7EjvigE-f~sOJewx27qt1ld8kXA0~RVrbk-i8sX3wWwGZAHn~txHG3MjYma1vIBW2fCcEDMxi49Ms-NC7MECz2tFmB2bWSQEgjRzN57JZ5TWZqgGJwSZKWIoFgY4lGjBe8zpxi7B0oH0fHbf5~pNy55S-5qLQaJ14Q__"
        />
      </div>
      <div>
        <button>Get the App</button>
        {userLogin ? (
          <><button className="sign-in-button" onClick={() => setLogin(false)}>
          Logout
        </button></>
        ) : (
          <>
            <button onClick={() => setSignUpStatus(true)}>
              Create Account
            </button>
            <button
              onClick={() => setSignUpStatus(true)}
              className="sign-in-button"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
