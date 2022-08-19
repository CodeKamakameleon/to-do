import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ toDos, handleDelete, handleEdit, handleAddInput }) =>
  toDos.map((toDo) => (
    <ToDo
      key={toDo.id}
      toDo={toDo}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleAddInput={handleAddInput}
    />
  ));

//pass handlEdit
//handleDelete
