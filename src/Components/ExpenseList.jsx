import React from 'react'
import Expense from './Expense'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
const ExpenseList = () => {
    const {Expenses} = useContext(AppContext);
    return (
        <div className='list-group'>
            <ul>
                {Expenses.map((data) => (
                    <Expense key={data.id} id={data.id} expense={data.expense} cost={data.cost} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList
