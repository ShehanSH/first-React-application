import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";


//how to use state
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log('Evaluated React');
  // const clickHandler = () => {
  //   setTitle('updated!!');
  //   console.log("clicked!");
  // };

  // here use ExpenseDate component (ex for multipule component)
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
