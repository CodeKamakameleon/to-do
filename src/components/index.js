import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../App";

export { ToDoList } from "./ToDo/ToDoList";
export { ToDo } from "./ToDo/ToDo";
export { HandleToDoClick } from "./ToDo/HandleToDoClick";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
