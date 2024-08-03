import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  /*Handling the form means the taking input from the user*/
  const [task, setTask] = useState(""); //used to take the

  /**Arrow function to take the user input */
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  //to handle the dropdown

  const [status, setStatus] = useState("Todo");
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const [tag, setTag] = useState("");

  const handleClick = (e) => {
    setTag(e.target.value.click);
  };
  console.log(tag);

  console.log(task, status);
  return (
    <div>
      <header className="app_header">
        <form>
          <div className="Task_Form_input">
            <input
              type="text"
              placeholder="Enter your Task"
              onChange={handleChange}
            />
          </div>
          <div className="task_form_btns">
            <div className="lanugauge_btn" onClick={handleClick}>
              <Tag tagName="HTML"></Tag>
              <Tag tagName="CSS"></Tag>
              <Tag tagName="JS"></Tag>
              <Tag tagName="React"></Tag>
            </div>

            <div className="task-status-btn" onChange={handleStatus}>
              <select name="" id="" className="status_menu">
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <button className="add_task_btn">+ Add Task</button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
