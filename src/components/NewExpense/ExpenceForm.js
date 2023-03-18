import React from "react";

import './ExpenceForm.css';

const ExpenceForm = () => {
    return <form>
        <div className="new-expence__controls">
            <div className="new-expence__control">
                <label >Title</label>
                <input type="text" />
            </div>
            <div className="new-expence__control">
                <label >Amount</label>
                <input type="text" min="0.01" step="0.01" />
            </div>
            <div className="new-expence__control">
                <label >Date</label>
                <input type="date" min="2019-01-01" max="2023-12-12"/>
            </div>
            <div className="new-expences__action">
                <button type="submit">Add Expence</button>
            </div>
        </div>
    </form>
}

export default ExpenceForm;