import React, { useState } from "react";

import './ExpenceForm.css';

const ExpenceForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
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

        console.log(expenseData);

    }

    return <form onSubmit={submitHandle}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="text" min="0.01" step="0.01" onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2023-12-12" onChange={dateHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expence</button>
            </div>
        </div>
    </form>
}

export default ExpenceForm;