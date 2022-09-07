import React from "react";

import { ToDo } from "./ToDo";

export const ToDoList = ({
  toDos,
  handleClear,
  handleAddInput,
  toggleToDo,
  handleUpdate,
  handleDelete,
}) =>
  toDos.map((toDo) => (
    <ToDo
      key={toDo.id}
      toDo={toDo}
      handleClear={handleClear}
      handleAddInput={handleAddInput}
      toggleToDo={toggleToDo}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  ));
