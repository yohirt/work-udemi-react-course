function ExpenseDate(props) {
  const month = props.date.toLocaleString('pl-PL', {month: 'long'})
  const day = props.date.toLocaleString('pl-PL', {day: '2-digit'})
  const year = props.date.getFullYear()
  const emicon = props.emicon
  return (
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> 
  );
}

export default ExpenseDate;
