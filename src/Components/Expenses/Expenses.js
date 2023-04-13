import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 

  let expenseContent =  <p style = {{color : 'white'}}> No Expenses found. </p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense)=>(
      <ExpenseItem
      key = {expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />

    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
