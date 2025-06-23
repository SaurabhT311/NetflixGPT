import React, { useEffect } from "react";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import LogIn from "./Login";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        // User is signed in,
        const { uid, email, displayName } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      } else {
        //when user is signed out
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
