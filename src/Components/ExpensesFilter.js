import React from "react";
import "../css/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterYearHandler = (e) => {
    //can simply take value as e.target.value
    const selectedIndex = e.target.options.selectedIndex;
    props.onYearChange(e.target.options[selectedIndex].outerText);
  };

  return (
    <div className="expenses-filter" onChange={filterYearHandler}>
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select>
          <option>Default</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
