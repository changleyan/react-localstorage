import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const tasksTableRow = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} toggleTask={toggleTask} key={task.name} />
      ));
  };

  return (
    <table className="table table-striped table-bordered table-hover  table-dark border-secondary">
      <thead>
        <tr className="table-header table-primary">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{tasksTableRow(showCompleted)}</tbody>
    </table>
  );
};
