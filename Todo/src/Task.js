import { useState } from "react";

export default function Task({ dataDetails, index, allTasks, updateTask }) {
  let [isComplete, setStatus] = useState(false);

  return (
    <div className="task-tile">
      <p
        className={isComplete ? "task-done" : ""}
        onClick={() => setStatus(!isComplete)}
      >
        {dataDetails}
      </p>
      <span onClick={() => updateTask(removeTask(allTasks, index))}>X</span>
    </div>
  );
}
function removeTask(tasks, idx) {
  return tasks.filter((value, index) => !index == idx);
}
