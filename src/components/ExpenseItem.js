import './ExpenseItem.css'
import ExpenseDate from "./EkspenseDate";

function ExpenseItem(props) {
  const emicon = props.emicon
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div>{emicon}</div>
        <div className='expense-item__price' >{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
