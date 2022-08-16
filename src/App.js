import { useState } from "react";
import { ToDoList } from "./components/ToDo/ToDoList";
import "./App.css";

export const App = () => {
  const [ToDo, setToDo] = useState([]);
  const [checkbox, setCheckbox] = useState(true);
  const [input, setInput] = useState("");

  const handleAddInput = () => {
    setToDo();
  };

  const handleCheckbox = () => {};

  const handleChangeInput = (evt) => {
    // console.log(evt.target.value);
    setToDo(evt.target.value);
  };

  const handleDeleteBtn = (evt) => {
    setToDo(evt.target.delete);
  };
  return (
    <div className="App">
      <ToDoList ToDoList={ToDoList} />;
      <ToDo ToDo={ToDo} />
    </div>
  );
};
