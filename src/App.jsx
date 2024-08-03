import React from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import toDoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import TaskCard from "./Components/TaskCard";

const App = () => {
  return (
    <>
      <div className="app">
        <TaskForm></TaskForm>
        <main className="app_main">
          <TaskColumn name="To Do" imgIcon={toDoIcon}></TaskColumn>
          <TaskColumn name="Doing" imgIcon={doingIcon}></TaskColumn>
          <TaskColumn name="Done" imgIcon={doneIcon}></TaskColumn>  
        </main>
      </div>
    </>
  );
};

export default App;
