import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
