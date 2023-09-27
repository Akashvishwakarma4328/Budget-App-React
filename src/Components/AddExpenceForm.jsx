import React from 'react';

const AddExpenceForm = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="expense">Expense</label>
              <input
                required="required"
                type="text"
                className="form-control"
                id="expense"
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
