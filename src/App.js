import React from "react";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoList } from "./components/ToDo/ToDoList";

// const BASE_URL = "http://jsonplaceholder.typicode.com/todos";
// const URL = `${BASE_URL}/todos/${id}`;

export const App = () => {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  // const [endpoint, setEndpoint] = useState(URL);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      // if res.ok statement, throw new Error- watch 9/13 class video

      .then((data) => setToDos(data))
      .catch((err) => console.error(err));
  }, []);

  // Add To Do input
  const handleAddInput = (evt) => {
    fetch("http://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),

        setToDos((toDo) => {
          return [...toDo, { id: uuidv4(), title, completed: false }];
        })
      );

    evt.preventDefault();
    const title = inputRef.current.value;
    if (title === "") return;

    inputRef.current.value = "";
  };

  // toggle to complete
  const toggleToDo = (id) => {
    //this wil be a PUT

    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),

        setToDos((t) =>
          t.map((toDoItem) => {
            if (toDoItem.id !== id) return toDoItem;
            return {
              ...toDoItem,
              completed: !toDoItem.completed,
            };
          })
        )
      );
  };

  // Clear all complete toDos
  function handleClear() {
    const newToDos = toDos.filter((toDo) => !toDo.completed);
    setToDos(newToDos);
  }

  // Delete individual toDos
  const handleDelete = (id) => {
    // API use a delete method here
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });

    setToDos((toDoList) => toDoList.filter((toDo) => toDo.id !== id));
  };

  //
  const handleUpdate = (id, title) => {
    // PUT method here
    fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: "",
        title: "",
        completed: "",
      }),
    })
      .then((res) => res.json())
      .then(
        (json) => console.log(json),

        setToDos((toDoList) =>
          toDoList.map((toDoItem) => {
            if (toDoItem.id !== id) return toDoItem;

            return { ...toDoItem, title };
          })
        )
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
