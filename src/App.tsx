import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: true },
  ]);
  const [filter, setFilter] = useState(false);

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  const showAllTasks = () => {
    setFilter(false);
  };

  const showIncompleteTasks = () => {
    setFilter(true);
  };

  const filteredTasks = filter
    ? tasks.filter((task) => !task.completed)
    : tasks;

  return (
    <div>
      <button onClick={showAllTasks}>Show All</button>
      <button onClick={showIncompleteTasks}>Show Incomplete</button>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
