export const ToDoList = ([tasks]) => {
  <div>
    <div>
      {[...Array(tasks)].map((l, ind) => (
        <div key={tasks} />
      ))}
    </div>
  </div>;
};
