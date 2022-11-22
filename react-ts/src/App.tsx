import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

import "./App.css";

function App() {
  // const todosArr = [
  //   new Todo("Learn React"),
  //   new Todo("Learn TypeScript"),
  //   new Todo("Learn JavaScript"),
  // ];

  // storing it in state
  const [myTodos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={myTodos} />
    </div>
  );
}

export default App;
