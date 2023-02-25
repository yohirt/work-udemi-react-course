import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated');
    console.log("Clicked!!!");
  }

  // TODO 
  // Co onzacza że w wyrażeniu onClick={clickHandler} nie zastosowano nawiazów?
  // -- jest to wskaźnik do wywołania fukcji. Jesli były by nawiasy to funkcja ta wywołałaby się wcześniej
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
