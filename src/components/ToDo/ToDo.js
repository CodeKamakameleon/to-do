import React from "react";
import { useState } from "react";

export function ToDo({ toDo, toggleToDo, handleDelete, handleUpdate }) {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {/* Task with checkbox */}
      <input
        type="checkbox"
        checked={toDo.complete}
        onChange={() => toggleToDo(toDo.id)}
      />{" "}
      {edit ? (
        <input
          autoFocus
          onBlur={() => setEdit(false)}
          value={toDo.name}
          onChange={(evt) => handleUpdate(toDo.id, evt.target.value)}
        />
      ) : (
        <span onClick={() => setEdit(true)}>{toDo.name}</span>
      )}
      {/* delete button */}
      <button onClick={() => handleDelete(toDo.id)}>Delete</button>
    </div>
  );
}
