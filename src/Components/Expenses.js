import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "../css/expenses.css";

const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("Default");

  const getYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses =
    selectedYear === "Default"
      ? props.expensesData
      : props.expensesData.filter((singleExpense) => {
          return (
            new Date(singleExpense.date).getFullYear().toString() ===
            selectedYear
          );
        });

  return (
    <div className="expenses">
      <ExpensesFilter onYearChange={getYear} />
      <ExpensesList list={filteredExpenses} />
    </div>
  );
};

export default Expense;
