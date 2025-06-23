import React, { useRef, useState } from "react";
import { IMGNetflixLogo, IMGUserIcon } from "../assets";
import MyProfile from "./MyProfile";

const Header = ({isSignInForm}) => {
  const [userPopup, setUserPopup] = useState(false);
  const popupRef = useRef(null);

  return (
    <>
      <div className="absolute flex py-6 px-8 bg-gradient-to-b from-black z-1 w-full justify-between">
        <img className="w-36 stroke-red-500" src={IMGNetflixLogo} alt="logo" />
        {!isSignInForm && <div className="cursor-pointer">
          <img
            alt="user-icon"
            src={IMGUserIcon}
            ref={popupRef}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setUserPopup(!userPopup)}
          />
        </div>}
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
