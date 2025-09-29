
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import React from 'react'
import "tailwindcss";
import Login from "./Login";
import Browse from "./Browse";
import Netfliximg from "./Netfliximg";

const Body = () => {
  
    const appRouter=createBrowserRouter([
        
      {
            path:"/",
            element:<Netfliximg/>
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }

              

        
        
        
    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
