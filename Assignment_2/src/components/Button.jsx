import React from 'react'
// import { NavLink} from 'react-router-dom'
const Button = ({label}) => {
  return (
    <div>
      <button type='button' className='p-4 rounded-md  bg-gray-200 font-bold'>{label}</button>
    </div>
  )
}

export default Button