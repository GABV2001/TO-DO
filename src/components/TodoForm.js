import React, { useState, useEffect } from "react";

export default function TodoForm({
  addTodo,
  editTodo,
  selectedTodo,
  cancelEdit,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
      setIsEditMode(true);
    } else {
      setTitle("");
      setDescription("");
      setIsEditMode(false);
    }
  }, [selectedTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      editTodo(selectedTodo.id, { title, description });
    } else {
      addTodo({ title, description });
    }

    setTitle("");
    setDescription("");
    setIsEditMode(false);
  };

  const handleCancel = () => {
    cancelEdit();
    setTitle("");
    setDescription("");
  };

  return (
    <div className=" h-full w-72 border-2 p-7 mt-7 rounded-md">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center font-bold">TO-DO List</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Type description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-1 flex justify-center">
          <button className="btn" type="submit">
            {isEditMode ? "Update" : "Add"}
          </button>
          {isEditMode && (
            <button className="btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
