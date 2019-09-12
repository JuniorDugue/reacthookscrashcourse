import React, {useState} from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo";
import "./styles.css";

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Learn Hooks",
      isCompleted: false,
    },
    {
      text: "Catch up in React",
      isCompleted: false,
    },
    {
      text: "Ace the sprint challenge this weekend!",
      isCompleted: false,
    },
  ])
  
  return (
    <div className="App">
      <h1>ToDo List</h1>
      {todos.map((todo, index)=> {
        <Todo key={index} index={index} todo={todo} />
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
