import React from "react";
import { useState, useRef } from "react";
import { ToDoList, ToDo } from "./components/ToDo/ToDoList";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  // Add To Do (and edit?)
  const handleAddInput = (evt) => {
    evt.preventDefault();
    const name = inputRef.current.value;
    if (name === "") return;
    setToDos((toDo) => {
      return [...toDo, { id: uuidv4(), name, completed: false }];
    });
    inputRef.current.value = "";
  };

  function handleEdit({ edit }) {
    const newToDo = toDos.map((toDo) => {
      if (edit.target.id === toDo.id) {
        return { ...toDo, name: edit.target.value };
      }
    });
  }

  // Delete To Do
  const handleDelete = () => {
    const newToDos = toDos.filter((toDo) => toDo.complete);

    setToDos((toDo) => {
      if (!toDo.complete) return;
      console.log("made it");
      return [...newToDos, { id: uuidv4(), toDo, completed: false }];
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleAddInput}>
        <input id="task" ref={inputRef} type="text" />

        <button id="add">Add a task</button>
        <button onClick={handleDelete} id="delete">
          Delete
        </button>
        <ToDoList toDos={toDos} />
      </form>
    </div>
  );
};
