import './ExpenseDate.css';
import React from "react";

//create ExpenseDate component for use multipul component
const ExpenseDate = (props) => {
    const month = props.date.getMonth();
    const day = props.date.getDate();
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month"> {month} </div>
            <div className="expense-date__year"> {year} </div>
            <div className="expense-date__day"> {day} </div>
        </div>
    );
}

export default ExpenseDate;