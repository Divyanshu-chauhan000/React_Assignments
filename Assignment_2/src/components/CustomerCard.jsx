import React from 'react'

import {FiEye, FiEdit3, FiMoreVertical} from "react-icons/fi"
const CustomerCard = ({pic, name , date}) => {
  return (
    <div className='grid grid-cols-3 space-x-8 bg-red-200 p-4 rounded-md mt-3'>
     <div className=' flex justify-center items-center gap-4'> 
      <img src={pic} alt="" className='w-12 h-12 rounded-full object-cover object-center' />
      <span>{name}</span>
     </div>
     <div className='flex justify-center items-center'>
      {date}
     </div>
     <div className=' flex gap-4 justify-center items-center'>
      <FiEdit3/>
      <FiEye/>
      <FiMoreVertical/>
     </div>
    </div>
  )
}

export default CustomerCard