import React from 'react'

import { T_todo } from '../model'



// ======================
//   TodoItem component
// ======================

interface T_TodoItemProps {
  todo: T_todo
  deleteTodo: () => void
  toggleTodo: () => void
}


const TodoItem = ({todo, deleteTodo, toggleTodo}:T_TodoItemProps) => (
  <div data-testid="todo-item">
    <button onClick={deleteTodo}>X</button>
    <label htmlFor={`todo-${todo.id}`} >
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        onChange={toggleTodo}
        checked={todo.completed}
      />
      {todo.text}
    </label>
  </div>
)


export {TodoItem}
