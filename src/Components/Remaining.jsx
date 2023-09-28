import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Remaining = () => {
  const {Expenses , Budget} = useContext(AppContext);
  const totalExpense = Expenses.reduce((total , curr)=>{
    return (total +=curr.cost)
  },0)
  const remaining_value =Budget-totalExpense

  const alertType= remaining_value >0 ?'alert-success':'alert-danger'
  return (
    <div className={`alert ${alertType}`}>
        <span>Remaining :{remaining_value}</span>
    </div>
  )
}

export default Remaining