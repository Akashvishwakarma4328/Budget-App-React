import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid'
const AddExpenceForm = () => {
  const {dispatch} = useContext(AppContext);
  const [expense,setexpense] = useState('');
  const [cost ,setcost] = useState('');
  const onSubmit =(e)=>{
    e.preventDefault();
    const newExpenses ={
      id : uuidv4(),
      expense:expense,
      cost :parseInt(cost)

    };
    dispatch({
      type:'Add_Expense',
      payload :newExpenses,
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="expense">Expense</label>
              <input
                required="required"
                type="text"
                className="form-control"
                id="expense"
                value={expense}
                onChange={(e)=>setexpense(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="cost">Cost</label>
              <input
                required="required"
                type="text"
                className="form-control"
                id="cost"
                value={cost}
                onChange={(e)=>setcost(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="submit">&nbsp;</label>
              <button type="submit" className="btn btn-primary form-control">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenceForm;
