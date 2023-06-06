import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: idCounter };
    setTodos([...todos, todoWithId]);
    setIdCounter(idCounter + 1);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...updatedTodo, id: id };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
  };

  const handleCancelEdit = () => {
    setSelectedTodo(null);
  };

  return (
    <div>
      <h1>TO-DO List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} selectedTodo={selectedTodo} cancelEdit={handleCancelEdit} />
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} handleEditClick={handleEditClick} />
      ) : (
        <p>No todos yet.</p>
      )}
    </div>
  );
}
