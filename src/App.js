import React from "react";
import { useState, useRef, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { ToDoList } from "./components/ToDo/ToDoList";

const BASE_URL = "http://jsonplaceholder.typicode.com/todos";
const URL = `${BASE_URL}/{id}`;

export const App = () => {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const [endpoint, setEndpoint] = useState(URL);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setToDos(data));
  }, [endpoint]);

  //Add To Do input API
  const handleAddInput = (evt) => {
    evt.preventDefault();
    const name = inputRef.current.value;
    if (name === "") return;
    setEndpoint(BASE_URL);
    inputRef.current.value = "";

    if (!toDos) return "No tasks?";
  };

  // Add To Do input
  // const handleAddInput = (evt) => {
  //   evt.preventDefault();
  //   const name = inputRef.current.value;
  //   if (name === "") return;
  //   setToDos((toDo) => {
  //     return [...toDo, { id: uuidv4(), name, complete: false }];
  //   });
  //   inputRef.current.value = "";
  // };

  // toggle to complete
  // const toggleToDo = (id) => {
  //   setToDos((t) =>
  //     t.map((toDoItem) => {
  //       if (toDoItem.id !== id) return toDoItem;
  //       return {
  //         ...toDoItem,
  //         complete: !toDoItem.complete,
  //       };
  //     })
  //   );
  // };

  //Toggle to complete API
  const toggleToDo = (id) => {
    setEndpoint((t) =>
      t.map((toDoItem) => {
        if (toDoItem.id !== id) return toDoItem;
        return {
          ...toDoItem,
          complete: !toDoItem.complete,
        };
      })
    );
  };

  // Clear all complete toDos
  function handleClear() {
    const newToDos = toDos.filter((toDo) => !toDo.complete);
    setToDos(newToDos);
  }

  // Delete individual toDos
  const handleDelete = (id) => {
    setToDos((toDoList) => toDoList.filter((toDo) => toDo.id !== id));
  };

  //
  const handleUpdate = (id, name) => {
    setToDos((toDoList) =>
      toDoList.map((toDoItem) => {
        if (toDoItem.id !== id) return toDoItem;

        return { ...toDoItem, name };
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleAddInput}>
        <input ref={inputRef} type="text" />

        <button type="submit">Add a task</button>

        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      <ToDoList
        handleDelete={handleDelete}
        toggleToDo={toggleToDo}
        toDos={toDos}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
