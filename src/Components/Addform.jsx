import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addform = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      desc,
    };

    const Tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    Tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(Tasks));

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <div>
          <label className="form-label ms-3 mt-3">Title</label>
          <input
            className="form-control w-50"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="form-label ms-3 mt-3">Description</label>
          <textarea
            className="form-control w-50"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-success ms-3 mt-3" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Addform;
