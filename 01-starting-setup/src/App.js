import Expenses from "./components/Expenses";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <p>This is also visible</p> */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
