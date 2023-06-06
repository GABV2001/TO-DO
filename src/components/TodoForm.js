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
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">{isEditMode ? "Update" : "Add"}</button>
      {isEditMode && <button onClick={handleCancel}>Cancel</button>}
    </form>
  );
}
