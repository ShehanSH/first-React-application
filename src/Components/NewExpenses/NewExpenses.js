import React, { useState } from 'react';

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { isVisible } from "@testing-library/user-event/dist/utils";


const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  //create function for get form inputs and save that inputs and show.
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {

      ...enteredExpenseData,
      id: Math.random().toString()

    };
    props.onAddExpense(expenseData);
   
  };

  const AddExpenseBtnHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='new-expense'> 
    <button onClick={AddExpenseBtnHandler}>Add Expense</button>
    {isEditing && (
      <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/> 
    )}
    
    </div>
  );
};

export default NewExpenses;
