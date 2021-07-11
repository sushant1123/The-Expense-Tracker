import React, { useState } from "react";

import "../../css/NewExpense/NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const expenseChangeHandler = (e) => {
    let { name, value } = e.target;

    setNewExpense((prevValues) => {
      return { ...prevValues, [name]: name === "amount" ? +value : value };
    });
  };

  const submitNewExpenseHandler = (e) => {
    e.preventDefault();
    props.onSubmitNewExpense(newExpense);

    setNewExpense({
      title: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitNewExpenseHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={expenseChangeHandler}
              name="title"
              value={newExpense.title}
              required
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={expenseChangeHandler}
              name="amount"
              value={newExpense.amount}
              required
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={expenseChangeHandler}
              name="date"
              value={newExpense.date}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancelExpenseClicked} type="button">
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
