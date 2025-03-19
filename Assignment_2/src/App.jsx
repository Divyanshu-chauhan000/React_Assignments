import React from 'react'
import Card from '../src/components/Card'
import CustomerCard from './components/CustomerCard'
import Parent_card from './components/Parent_card'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <><Card/><Register /></>,
  //   }
  // ])
  return (
   <>
         
        {/* <RouterProvider router={router} /> */}
    <div className='h-screen flex justify-center items-center'>
    <Parent_card/>
    </div>
   </>
  )
}

export default App
