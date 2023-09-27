import React from 'react'
import Expense from './Expense'

const ExpenseList = () => {
    const Expenses = [
        {
            id: 1,
            expense: "Khana Kha lliye bhai",
            cost: 4000
        },
        {
            id: 2,
            expense: "Daru Pii lliye bhai",
            cost: 2000
        },
        {
            id: 3,
            expense: "Russian la lliye bhai",
            cost: 6000
        },
        {
            id: 4,
            expense: "Pizza Kha lliye bhai",
            cost: 4000
        }
    ]
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
