import React from 'react'
 import Card from './Card'
 import Customer from './Customer'
const Parent_card = () => {
  return (
    <div className='p-10  bg-blue-200'>
     <Card/>
     <Customer/>
    </div>
  )
}

export default Parent_card