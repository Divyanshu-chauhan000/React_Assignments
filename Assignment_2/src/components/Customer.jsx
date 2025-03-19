import React from 'react'
import CustomerCard from './CustomerCard'
import { RiExpandUpDownFill } from "react-icons/ri";
const Customer = () => {
 const [showCustomer , setShowCustomer] = React.useState(false);
 const customer = [{ name: "Raj Verma", date: "16/08/24", image: "https://th.bing.com/th/id/OIP.0XkKBWC40U2pz_ADMzQtfQHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7" },
  { name: "Arjun Patel", date: "16/08/24", image: "https://th.bing.com/th/id/OIP.45AOKWJcPBA472z9iMM3owHaHa?w=185&h=184&c=7&r=0&o=5&pid=1.7" },
  { name: "Priya Sharma", date: "17/05/12", image: "https://th.bing.com/th/id/OIP.kppHByCYSp7ErmByLTstGQHaEJ?w=324&h=182&c=7&r=0&o=5&pid=1.7" },
  { name: "Rohit Singh", date: "18/10/30", image: "https://th.bing.com/th/id/OIP.B8EOJQ4fPC0DCXmlizkGmQHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7" },
  { name: "Ananya Gupta", date: "19/04/01", image: "https://th.bing.com/th/id/OIP.NbhyBMyQz_qFT9uGOVqBMQHaHa?w=180&h=194&c=7&r=0&o=5&pid=1.7" },
  { name: "Vikram Desai", date: "20/11/27", image: "https://th.bing.com/th/id/OIP.DQKdYA6bYTWSePGcAyofpgHaHa?w=197&h=195&c=7&r=0&o=5&pid=1.7" },
  { name: "Meera Iyer", date: "21/08/19", image: "https://th.bing.com/th/id/OIP.NHbciQYJC7xDTGg8UXzf4wHaE7?w=290&h=193&c=7&r=0&o=5&pid=1.7" },
  { name: "Karan Mehta", date: "22/03/07", image: "https://th.bing.com/th/id/OIP.v1J7K-8AtJi8mj9FJoxg2AHaHa?w=212&h=212&c=7&r=0&o=5&pid=1.7" },
  { name: "Raj Verma", date: "23/01/14", image: "https://th.bing.com/th/id/OIP.I9s-WrPFCRzGBsOmPjVYYgHaEJ?w=295&h=180&c=7&r=0&o=5&pid=1.7" },
  ] 

  const handleCustomer =()=>{
    setShowCustomer(!showCustomer)
  }
  return (
    <div>
    <div className='grid grid-cols-3 space-x-6 pl-4 mt-4 ml-8  text-xl'>
      <div className='flex items-center gap-1'>Customer <span className='cursor-pointer' onClick={handleCustomer}><RiExpandUpDownFill className={`${showCustomer?"rotate-180 transition-transform":"transition-transform"}`}/></span></div>
      <div>Last Invoice</div>
      <div>Action</div>
    </div>
    {
      showCustomer &&(
        customer.map((customer, index) => (
          <CustomerCard
            key={index}
            name={customer.name}
            date={customer.date}
            pic={customer.image}
          />
        ))
      )
    }
    </div>
  )
}

export default Customer