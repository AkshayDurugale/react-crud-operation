import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editform = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const taskToEdit = tasks.find((t) => t.id === parseInt(id));

    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDesc(taskToEdit.desc);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTask = {
      id: parseInt(id),
      title,
      desc,
    };

    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default Editform;
