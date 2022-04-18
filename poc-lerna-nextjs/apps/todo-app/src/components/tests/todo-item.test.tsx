import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {exampleData_todos} from '../../model'
import {TodoItem} from '../todo-item'

describe('[TodoItem]', ()=>{
  it('can render a todo; delete button and toggle button works', ()=>{
    const todo =  exampleData_todos[0]
    const deleteTodoCallback = jest.fn()
    const toggleTodoCallback = jest.fn()

    const {
      getByTestId,
      getByText,
      getByLabelText
    } = render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoCallback}
        toggleTodo={toggleTodoCallback}
      />
    )

    // todo-item exist:
    getByTestId('todo-item')

    // todo item text exit:
    getByText(todo.text)

    // can fire delete button:
    const deleteButton = getByText('X')
    fireEvent.click(deleteButton)
    expect(deleteTodoCallback).toHaveBeenCalled()

    // can toggle todo:
    const clickableTodoLabel = getByLabelText(todo.text)
    fireEvent.click(clickableTodoLabel)
    expect(toggleTodoCallback).toHaveBeenCalled()
  })
})
