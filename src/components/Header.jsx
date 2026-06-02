import React, { use, useEffect, useRef, useState } from "react";
import { IMGNetflixLogo, IMGUserIcon } from "../assets";
import MyProfile from "./MyProfile";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchview } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/languageSlice";

const Header = ({ isSignInForm }) => {
  const [userPopup, setUserPopup] = useState(false);
  const [isNewlySignedUp, setIsNewlySignedUp] = useState(false);
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAccount = useSelector((state) => state.userSlice.new_account);
  const showGptSearch = useSelector(
    (state) => state.gptSlice.showGptSearchView,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (isNewAccount) {
          navigate("/sign-in");
          setIsNewlySignedUp(false);
        } else {
          const { uid, email, displayName } = user;
          dispatch(
            setUser({
              uid: uid,
              email: email,
              displayName: displayName,
            }),
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

  const handleGptSearch = () => {
    // navigate("/gpt-search");
    dispatch(toggleGptSearchview());
  };

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    dispatch(changeLanguage(selectedLang));
  };

  return (
    <>
      <div className="absolute flex py-6 px-8 bg-gradient-to-b from-black z-15 w-full justify-between">
        <img className="w-36 stroke-red-500" src={IMGNetflixLogo} alt="logo" />
        {!isSignInForm && (
          <div className="flex gap-4 items-center">
            {showGptSearch && (
              <select
                className="p-2 text-white bg-gray-700 rounded-md cursor-pointer"
                onChange={handleLangChange}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="cursor-pointer py-2 px-4 bg-purple-800 text-white rounded-lg"
              onClick={() => handleGptSearch()}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="h-10 cursor-pointer"
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
