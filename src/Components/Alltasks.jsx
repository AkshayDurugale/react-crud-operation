import React from "react";
import { useParams, NavLink } from "react-router-dom";

const AllTasks = () => {
  const { id } = useParams();
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskToView = storedTasks.find((t) => t.id === parseInt(id));

  if (!taskToView) {
    return <p>Task not found.</p>;
  }

  return (
    <div>
      <h2>{taskToView.title}</h2>
      <p>{taskToView.description}</p>

      <NavLink to="/">Back to Task List</NavLink>
    </div>
  );
};

export default AllTasks;
