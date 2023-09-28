import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Expences = () => {
  const {Expenses} = useContext(AppContext);
  const Spend = Expenses.reduce((total , curr)=>{
    return(total +=curr.cost)
  },0);
  return (
    <div className='alert alert-danger'>
        <span> Spend so far :{Spend}</span>
    </div>
  )
}

export default Expences