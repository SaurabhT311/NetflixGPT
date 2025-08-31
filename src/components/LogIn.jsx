import React, { useRef, useState } from "react";
import Header from "./Header";
import { validForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewAccount, setUser } from "../utils/userSlice";
import { IMGBackgroundImg } from "../assets";
import { signOut } from "firebase/auth";

const LogIn = ({ isSignInForm }) => {
  // const [isSignInForm, setIsSignInForm] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [errorMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setLoading(true);
    const name = isSignInForm ? "" : nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const message = validForm(name, email, password, isSignInForm);
    setErrMsg(message);

    if (!message) {
    // setLoading(false);
    return;
  }

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      )
        .then((userCredential) => {
          dispatch(setNewAccount(true));
          const user = userCredential.user;
          console.log("user", user);
          
          
          updateProfile(user, {
            displayName: nameRef.current.value,
          }).then(() => {
            // Force sign out after signup
            dispatch(setNewAccount(true));
            navigate("/sign-in");
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrMsg("Email already in use");
            setLoading(false);
            dispatch(setNewAccount(false));
          }
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          dispatch(setNewAccount(false));
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(
            setUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
           
          navigate("/browse");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setErrMsg("Invalid Login Crendentials");
          } else if (error.code === "auth/too-many-requests") {
            setErrMsg("Too many requests. Please try again later");
          }
          setLoading(false);
        });
    }
  };

  const handleToggleSignIn = () => {
    navigate(isSignInForm ? "/sign-up" : "/sign-in");
  };

  return (
    <div className="flex h-screen">
      <Header isSignInForm={isSignInForm} />
      <div className="flex">
        <img
          className=" w-full h-[100vh] object-cover absolute"
          src={IMGBackgroundImg}
          alt="background-image"
        />
        <div className="absolute bg-black opacity-30 w-full h-full"></div>
      </div>
      <div className="flex items-center justify-center w-[100%] bg-color">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative px-12 py-16 bg-[rgba(0,0,0,0.7)] max-w-[450px] flex flex-col gap-4 rounded-sm text-white"
        >
          <div>
            <h1 className="text-3xl font-bold pb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
          </div>
          {!isSignInForm && (
            <input
              className="py-6 px-2 text-md h-[40px] text-white bg-[rgba(22,22,22,0.7)] w-full border-2 focus:outline-[rgba(128,128,128,0.7)] focus:ring-0 border-[rgba(128,128,128,0.7)] rounded-sm"
              type="text"
              ref={nameRef}
              placeholder="Full Name"
            />
          )}
          <input
            className="py-6 px-2 text-md h-[40px] text-white bg-[rgba(22,22,22,0.7)] w-full border-2 focus:outline-[rgba(128,128,128,0.7)] focus:ring-0 border-[rgba(128,128,128,0.7)] rounded-sm"
            type="email"
            ref={emailRef}
            placeholder="Email-Address"
          />

          <input
            className="py-6 px-2 text-md text-white h-[40px] bg-[rgba(22,22,22,0.7)] w-full border-2 focus:outline-[rgba(128,128,128,0.7)] focus:ring-0 border-[rgba(128,128,128,0.7)] rounded-sm"
            type="password"
            ref={passwordRef}
            placeholder="Password"
          />
          <p className="text-red-500 text-sm w-half">{errorMsg}</p>
          <button
            className="bg-[rgb(229,9,20)] p-2 w-[350px] weight-bold rounded-sm cursor-pointer"
            onClick={handleButtonClick}
          >
            {loading ? "Loading..." : isSignInForm ? "Sign In" : "Sign Up"}
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
