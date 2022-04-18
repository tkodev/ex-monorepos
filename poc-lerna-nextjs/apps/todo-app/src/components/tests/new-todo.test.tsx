import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewTodo } from '../new-todo'


describe('[New Todo Component]', ()=>{
  const regex_newTodoLabel = /enter\stodo/i


  test('Render a input field', () =>{
    const {
      getByLabelText,
    } = render(<NewTodo newTodoSubmit={()=>jest.fn()}/>)

    getByLabelText(regex_newTodoLabel)
  })


  test('Input field take user values', () =>{
    const {
      getByLabelText,
    } = render(<NewTodo newTodoSubmit={()=>jest.fn()}/>)

    const newTodoInput = getByLabelText(regex_newTodoLabel)

    const todoText = 'learn react'
    userEvent.type(newTodoInput, todoText)
    expect(newTodoInput).toHaveAttribute('value', todoText)
  })


  it('Can submit a todo text, and reset itself', () =>{
    const newTodoSubmitCallback = jest.fn()

    const {
      getByLabelText,
      getByTestId,
    } = render(<NewTodo newTodoSubmit={newTodoSubmitCallback}/>)

    const todoText = 'learn react'
    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')

    userEvent.type(newTodoInput, todoText)
    fireEvent.submit(newTodoForm)

    // Submit the form
    expect(newTodoSubmitCallback).toHaveBeenCalledWith(todoText)

    // Reset the form
    expect(newTodoInput).toHaveAttribute('value', '')
  })
})




