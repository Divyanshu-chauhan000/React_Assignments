import React from 'react'
import Searchcard from './Searchcard.jsx'



const Searchdata = () => {
  const Searchdata = [
    {
      foodName : "Italian Mozzarella Bowl ",
      foodDescription :"Cherry tomatoes, basil, handmade mozzarella bits, optionally add roasted herbs an...",
      foodImage : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33"
    },
    {
      foodName : "Spicy Basil Shrimp ",
      foodDescription :"Hot roasted sweet shrimp, hot honey sauce No Modifications (Vert). Contains...",
      foodImage : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33"
    },
    {
      foodName : "Italian Mozzarella Bowl ",
      foodDescription :"Cherry tomatoes, basil, handmade mozzarella bits, optionally add roasted herbs an...",
      foodImage : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33"
    }
    ]
  return (
    <div className='flex  gap-4 wrap'>
     {
      Searchdata.map((data,index) =>  (
         <Searchcard
         key={index}
         foodName ={data.foodName}
         foodDescription={data.foodDescription}
         foodImage={data.foodImage}
         />
      ))
     }
    </div>
  )
}

export default Searchdata