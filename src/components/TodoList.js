import React from "react";

export default function TodoList({ todos, deleteTodo, handleEditClick }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => handleEditClick(todo)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}
