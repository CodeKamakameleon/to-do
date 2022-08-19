import React from "react";

export function ToDo({ toDo, handleDelete, handleEdit }) {
  function handleToDoClick() {
    //change ToDo  (destructure), call handle edit, pass new ToDo with true or false
    const edited = toDo.key;

    // handleEdit = { handleEdit };
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={toDo.complete} />
        {toDo.name}

        {/* Edit button? */}
        <button onClick={handleEdit} className="edit">
          Edit
        </button>
      </label>
    </div>
  );
}
