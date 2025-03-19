import React from 'react'
import Button from './Button'
import Register from './Register'
import CustomerCard from './CustomerCard'
const Card = () => {
  return (
    <div className=' grid grid-cols-4 space-x-4'>
      
        <div className=''></div>
        <div className=''>
          <Button label='Register' />
        </div>
        <div className=''>
          <Button label='Export' />
        </div>
        <div className=''>
          <Button label='Layout' />
        </div>
    </div>
  )
}

export default Card