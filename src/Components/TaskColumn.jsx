import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({name, imgIcon}) => {
  return (
    <div className="columns">
      <section className="task_column">
        <img className="todoIcon" src={imgIcon} alt="" />
        {name}

        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
      </section>
    </div>
  );
};

export default TaskColumn;
