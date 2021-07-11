/*eslint-disable */
import React, { useState } from "react";
import "../css/expenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const expenseTitle = props.title;
  const expensePrice = props.amount;

  const [titleChange, settitleChange] = useState(props.title);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleChange}</h2>
        <div className="expense-item__price">💲 {expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
