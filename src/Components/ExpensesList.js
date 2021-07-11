import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found...</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.list.map((singleExpense) => (
          <ExpenseItem
            key={singleExpense.id}
            id={singleExpense.id}
            title={singleExpense.title}
            amount={singleExpense.amount}
            date={singleExpense.date}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;
