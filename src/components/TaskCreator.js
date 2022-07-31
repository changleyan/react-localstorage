import { useState } from "react";

export const TaskCreator = ({ creteNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const clearNewTaskName = () => setNewTaskName("");

  const handleSubmit = (event) => {
    event.preventDefault();
    creteNewTask(newTaskName);
    clearNewTaskName();
  };
  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-md-9">
        <input
          type="text"
          placeholder="Enter any task"
          value={newTaskName}
          className="form-control"
          onChange={(event) => setNewTaskName(event.target.value)}
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
