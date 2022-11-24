import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 299.86,
      date: new Date(2021, 10, 25),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 299.86,
      date: new Date(2021, 3, 22),
    },
    {
      id: "e3",
      title: "Health Insurance",
      amount: 299.86,
      date: new Date(2021, 8, 3),
    },
    {
      id: "e4",
      title: "Term Insurance",
      amount: 299.86,
      date: new Date(2021, 5, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("Inside App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
