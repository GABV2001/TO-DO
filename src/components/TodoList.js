import React from "react";

export default function TodoList({ todos, deleteTodo, handleEditClick }) {
  return (
    <div className="w-2/5">
      {todos.length > 0 ? (
        <table className="mt-2 table">
          <thead>
            <th>Title</th>
            <th>Description</th>
            <th>Options</th>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td >
                  <button
                    className="btn btn-info mr-2"
                    onClick={() => handleEditClick(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-2">No todos yet</p>
      )}
    </div>
  );
}
