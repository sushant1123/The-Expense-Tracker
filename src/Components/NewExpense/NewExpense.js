import React, { useState } from "react";

import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [isAddExpenseClicked, setIsAddExpenseClicked] = useState(false);

  const expenseHandler = (expenseData) => {
    props.onAddExpense({ ...expenseData, id: Math.random().toString() });

    setIsAddExpenseClicked(false);
  };

  const handleAddNewExpenseHandler = () => {
    setIsAddExpenseClicked(true);
  };

  const cancelAddNewExpenseHandler = () => {
    setIsAddExpenseClicked(false);
  };

  return (
    <div className="new-expense">
      {!isAddExpenseClicked && (
        <button onClick={handleAddNewExpenseHandler}>Add New Expense</button>
      )}

      {isAddExpenseClicked && (
        <NewExpenseForm
          onSubmitNewExpense={expenseHandler}
          onCancelExpenseClicked={cancelAddNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
