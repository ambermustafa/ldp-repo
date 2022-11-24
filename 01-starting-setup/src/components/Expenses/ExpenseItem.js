import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// function ExpenseItem(props) {
//   const expenseDate = new Date(2021, 10, 26);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 299.97;

const ExpenseItem = (props) => {
  console.log(
    "Welcome to ExpenseItem - used as many times as it's declared in Expenses!"
  );
  // const clickHanlder = () => {console.log("Clicked!")};

  // Always returns an array with 2 elements
  // convention [somethingThatDescribesTheValue, setSomethingThatDescribesTheValue]
  // deconstructing because inside App.js, it is given as an object with headings id, title, amount, date ...........imp
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title,":::Will only be printed once because handler works for on FC only at a time")
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
