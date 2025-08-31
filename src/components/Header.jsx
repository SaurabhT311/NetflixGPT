import React, { useEffect, useRef, useState } from "react";
import { IMGNetflixLogo, IMGUserIcon } from "../assets";
import MyProfile from "./MyProfile";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ isSignInForm }) => {
  const [userPopup, setUserPopup] = useState(false);
  const [isNewlySignedUp, setIsNewlySignedUp] = useState(false);
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAccount = useSelector((state) => state.userSlice.new_account);
  console.log("isNewAccount", isNewAccount);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        if (isNewAccount) {
          log("isNewAccount25", isNewAccount);
          navigate("/sign-in");
          setIsNewlySignedUp(false);
        } else {
          const { uid, email, displayName } = user;
          dispatch(
            setUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
          navigate("/browse");
        }
        // User is signed in,
      } else {
        //when user is signed out
        dispatch(removeUser());
        navigate("/sign-in");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute flex py-6 px-8 bg-gradient-to-b from-black z-1 w-full justify-between">
        <img className="w-36 stroke-red-500" src={IMGNetflixLogo} alt="logo" />
        {!isSignInForm && (
          <div className="cursor-pointer">
            <img
              alt="user-icon"
              src={IMGUserIcon}
              ref={popupRef}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => setUserPopup(!userPopup)}
            />
          </div>
        )}
      </div>
      {userPopup && (
        <MyProfile
          userPopup={userPopup}
          setUserPopup={setUserPopup}
          popupRef={popupRef}
        />
      )}
    </>
  );
};

export default Header;
