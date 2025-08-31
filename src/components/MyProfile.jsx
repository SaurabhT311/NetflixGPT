import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../hooks/useOutsideClick";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";

const MyProfile = ({ userPopup, setUserPopup, popupRef }) => {
  const userDetails = useSelector(((state) => state.userSlice.user) || {});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useOutsideClick(popupRef, userPopup, setUserPopup);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        // navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {userPopup && (
        <div
          ref={popupRef}
          className="flex absolute z-10 right-8 top-15 bg-[rgba(0,0,0,0.7)] text-white w-[200px] rounded-[4px]"
        >
          <div className="flex p-2 flex-col w-full gap-2 text-[16px]">
            <p>{userDetails?.displayName}</p>
            <p>{userDetails?.email} </p>
            <p className="text-[16px] cursor-pointer hover:text-red-500 w-full" onClick={handleSignOut}>
              Sign Out{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
