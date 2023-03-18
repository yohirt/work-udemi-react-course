import React from "react";

import './ExpenceForm.css';

const ExpenceForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input type="text" />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="text" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2023-12-12"/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expence</button>
            </div>
        </div>
    </form>
}

export default ExpenceForm;