import React, { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    console.log("Sign In Form Toggled");
  };

  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex">
        <img
          className=" w-full h-[100vh] object-cover absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
          alt="background-image"
        />
        <div className="absolute bg-black opacity-30 w-full h-full"></div>
      </div>
      <div className="flex items-center justify-center w-[100%] bg-color">
        <form className="relative px-12 py-16 bg-[rgba(0,0,0,0.7)] min-w-[450px] flex flex-col gap-4 rounded-sm text-white">
          <div>
            <h1 className="text-3xl font-bold pb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </div>
          <input
            className="py-6 px-2 text-md h-[40px] text-white bg-[rgba(22,22,22,0.7)] w-full border-2 focus:outline-[rgba(128,128,128,0.7)] focus:ring-0 border-[rgba(128,128,128,0.7)] rounded-sm"
            type="email"
            placeholder="Email-Address"
          />
          <input
            className="py-6 px-2 text-md text-white h-[40px] bg-[rgba(22,22,22,0.7)] w-full border-2 focus:outline-[rgba(128,128,128,0.7)] focus:ring-0 border-[rgba(128,128,128,0.7)] rounded-sm"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[rgb(229,9,20)] p-2 w-full weight-bold rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            {isSignInForm ? (
              <>
                <span className="text-[rgba(255,255,255,0.7)]">
                  New to Netflix?{" "}
                </span>
                <span
                  className="text-[rgb(255,255,255)] cursor-pointer hover:underline"
                  onClick={handleToggleSignIn}
                >
                  Sign Up Now
                </span>
              </>
            ) : (
              <>
                <span className="text-[rgba(255,255,255,0.7)]">
                  Already have an account?{" "}
                </span>
                <span
                  className="text-[rgb(255,255,255)] cursor-pointer hover:underline"
                  onClick={handleToggleSignIn}
                >
                  Sign In
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
