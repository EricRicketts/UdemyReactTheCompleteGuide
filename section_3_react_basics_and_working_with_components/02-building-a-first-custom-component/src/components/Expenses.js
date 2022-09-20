import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        jamount={props.expenses[0].amount}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </div>
  )
}