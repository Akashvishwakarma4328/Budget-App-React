import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { Budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBudget, setEditedBudget] = useState(Budget);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    dispatch({ type: 'SET_BUDGET', payload: editedBudget });
    setIsEditing(false);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    setEditedBudget(Budget);
  };

  return (
    <div className='alert alert-primary' style={{ position: 'relative' }}>
      {isEditing ? (
        <div>
          <input
            type='number'
            value={editedBudget}
            onChange={(e) => setEditedBudget(e.target.value)}
          />
          <button className='btn btn-success' onClick={onSave}>
            Save
          </button>
          <button className='btn btn-danger' onClick={onCancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <span>Budget: {Budget}</span>
          <button
            className='btn btn-primary'
            onClick={onEdit}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Budget;
