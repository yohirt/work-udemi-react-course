import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Tutorial",
      amount: 200,
      date: new Date(2022, 12, 12),
      emicon: ";)"
    },
    {
      id: 'e2',
      title: "Car",
      amount: 500,
      date: new Date(2022, 11, 12),
      emicon: ";-)"
    },
    {
      id: 'e3',
      title: "home",
      amount: 300000,
      date: new Date(2023, 12, 12)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} emicon={expenses[0].emicon}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[1].date} emicon={expenses[1].emicon}></ExpenseItem>
    </div>
  );
}

export default App;
