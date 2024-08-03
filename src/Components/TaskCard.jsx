import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

import "./TaskCard.css";

const TaskCard = () => {
  return (
    <div className="Task_Card">
      <div>
        <p>Change the delete Icon</p>
      </div>
      <div className="tags">
        <div className="btn_tag">
        <Tag tagName="HTML"></Tag>
        <Tag tagName="CSS"></Tag>
        </div>
        <div>
        <img src={deleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
