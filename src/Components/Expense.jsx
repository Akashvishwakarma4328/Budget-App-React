import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

const Expense = (props) => {
    const {dispatch} = useContext(AppContext);
    const onDelete =()=>{
        dispatch({
            type:'Delete_expense',
            payload:props.id
        })
    }
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.expense}
            <div>
                <span className='badge rounded-pill bg-primary mt-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5rem' onClick={onDelete}></TiDelete>
            </div>
        </li>
    );
};

export default Expense;
