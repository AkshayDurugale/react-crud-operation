import React from "react";
import { NavLink } from "react-router-dom";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div className="ms-auto me-auto w-50">
      <li>
        <h3>{task.title}</h3>
        <p>{task.desc}</p>

        <button
          className="btn btn-danger me-5"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <NavLink to={`/edit-task/${task.id}`} state={{ task }}>
          Edit
        </NavLink>
      </li>
    </div>
  );
};

export default TaskItem;
