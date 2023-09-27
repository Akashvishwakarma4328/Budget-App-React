import React from 'react'
import { TiDelete } from 'react-icons/ti'

const Expense = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.expense}
            <div>
                <span className='badge rounded-pill bg-primary mt-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5rem'></TiDelete>
            </div>
        </li>
    );
};

export default Expense;
