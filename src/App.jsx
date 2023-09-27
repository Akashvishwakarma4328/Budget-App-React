import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import Expences from './Components/Expences';
import ExpenseList from './Components/ExpenseList';
import AddExpenceForm from './Components/AddExpenceForm';
const App = () => {
  return (
    <div>
      <div className='container'>
        <h3 className='mt-3'> Akash`s Budget Tracker</h3>

        <div className='rom mt-3'>
          <div className='col-sm'>
            <Budget/>
          </div>

          <div className='col-sm'>
            <Remaining/>
          </div>

          <div className='col-sm'>
            <Expences/>
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList/>
            </div>
          </div>
        <h3 className='mt-3'>Add Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenceForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App