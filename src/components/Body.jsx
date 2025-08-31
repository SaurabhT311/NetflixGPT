import React, { useEffect } from "react";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import LogIn from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <LogIn />,
    // },
    {
      path: "/" ? "/sign-in" : "",
      element: <LogIn isSignInForm={true} />, // pass prop
    },
    {
      path: "/sign-up",
      element: <LogIn isSignInForm={false} />, // pass prop
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
