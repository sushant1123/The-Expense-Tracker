import React from "react";
import "../css/expenseDate.css";

const ExpenseDate = (props) => {
  const expenseDateMonth = new Date(props.date).toLocaleDateString("en-in", {
    month: "long",
  });
  const expenseDateDay = new Date(props.date).getDate();
  const expenseDateYear = new Date(props.date).getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDateMonth}</div>
      <div className="expense-date__year">{expenseDateYear}</div>
      <div className="expense-date__day">{expenseDateDay}</div>
    </div>
  );
};

export default ExpenseDate;
