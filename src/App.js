import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { useState, useEffect } from "react";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const saveLocalStorage = (value) =>
    localStorage.setItem("tasks", JSON.stringify(value));

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((elem) =>
        elem.name === task.name ? { ...elem, done: !elem.done } : elem
      )
    );
  };

  const cleanTask = () => {
    setTasksItems(tasksItems.filter((elem) => !elem.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    saveLocalStorage(tasksItems);
  }, [tasksItems]);

  function creteNewTask(taskName) {
    if (!tasksItems.find((elem) => elem.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }
  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <h1 className="AppTitle">Task App</h1>
        <TaskCreator creteNewTask={creteNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />
        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
