import "./App.css";
import Task from "./Task";
import { useState } from "react";
function App() {
  let [allTasks, updateTask] = useState([]);
  function addTask(e) {
    e.preventDefault();
    let newTask = e.target.newTask.value;
    console.log(newTask);
    if (!allTasks.includes(newTask)) {
      let arr = [...allTasks, newTask];
      updateTask(arr);
    }
  }
  let List = allTasks.map((value,idx) => {
    return <Task dataDetails={value} index={idx} key={idx} allTasks={allTasks} updateTask={updateTask}/>;
  });

  return (
    <div className="App">
      <h1>TODO</h1>
      <form onSubmit={addTask}>
        <input type="text" name="newTask"></input>
        <button>Add Task</button>
      </form>
      <div className="task-section">
      {List}
      </div>
    </div>
  );
}

export default App;
