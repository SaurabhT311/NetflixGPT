import React from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom';
import LogIn from './Login';
import { RouterProvider } from 'react-router-dom';

const Body = () => {

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

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body