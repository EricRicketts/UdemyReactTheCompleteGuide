import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label id="form-title">Title</label>
          <input aria-labelledby="form-title" type="text" />
        </div>
        <div className="new-expense__control">
          <label id="form-amount">Amount</label>
          <input aria-labelledby="form-amount" type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label id="form-date">Date</label>
          <input aria-labelledby="form-date" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;