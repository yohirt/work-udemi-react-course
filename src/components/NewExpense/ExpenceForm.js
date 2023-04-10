import React, { useState } from "react";

import './ExpenceForm.css';

const ExpenceForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandle = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        console.log(expenseData);

    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    return <form onSubmit={submitHandle}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="text" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2023-12-12" value={enteredDate} onChange={dateHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expence</button>
            </div>
        </div>
    </form>
}

export default ExpenceForm;