import React, { useState } from "react";
import Expense from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./css/NewExpense/NewExpense.css";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "A New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2019, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenseItems, setExpenseItems] = useState(DUMMY_EXPENSES);

  const newExpenseData = (newData) => {
    setExpenseItems((prevItems) => {
      return [newData, ...prevItems];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpenseData} />
      <Expense expensesData={expenseItems} />
    </div>
  );
};

export default App;
