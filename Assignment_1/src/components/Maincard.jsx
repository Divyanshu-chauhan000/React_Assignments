import React from 'react'
import Searchcard from './Searchcard.jsx'
import Searchdata from './Searchdata.jsx'
import Itemdata from './Itemdata.jsx'

const Maincard = () => {
  return (
    <div className='w-full h-screen p-20 flex flex-col mt-12 items-center'>
      <div>
      <h1 className="text-4xl font-bold mb-4 ">Based On your Search</h1>
      <Searchdata/>
      </div>
      <div className='mt-12'>
      <h1 className="text-4xl font-bold mb-4 ">Featured Items</h1>
      <Itemdata/>
      </div>
      
      </div>
  )
}

export default Maincard