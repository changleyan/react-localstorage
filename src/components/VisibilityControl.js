export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTask,
}) => {
  const handleDeleteTask = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Show Task Done</label>
      </div>

      <button onClick={handleDeleteTask} className="btn btn-danger btn-sm">
        Delete Task
      </button>
    </div>
  );
};
