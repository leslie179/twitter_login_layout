import Image from "next/image";
import apple from "../public/icons/apple.png";
import google from "../public/icons/google.png";
import x from "../public/icons/x.jpg";

export default function Home() {
  return (
    <main className="page">
      <div className="shadow-xl border m-2 p-2 rounded-md">
        <div className="login-container">
          <div className="logo">
            <Image src={x} alt="x" width={50} height={50} />
          </div>
          <h1 className="title">Sign into X</h1>
          <div className="w-full flex gap-2 flex-col py-10">
            <button className="social-button">
              <div className="icon-container">
                <Image src={google} alt="google" width={24} height={24} />
                Sign in with Google
              </div>
            </button>
            <button className="social-button">
              <div className="icon-container">
                <Image src={apple} alt="apple" width={24} height={24} />
                Sign in with Apple
              </div>
            </button>
            <div className="separator">
              <div className="lines">
                <span className="sep-title">or</span>
              </div>
            </div>
            <input
              className="sign-in-input"
              placeholder="Phone, email, or username"
            />
            <button className="next">Next</button>
            <button className="forgot">Forgot password?</button>
          </div>
          <div className="register">
            Dont have an account?
            <span className="sign-up">Sign up</span>
          </div>
        </div>
      </div>
    </main>
  );
}
