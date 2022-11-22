import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 10, 26);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 299.97;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
