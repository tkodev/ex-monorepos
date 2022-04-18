import React from 'react'
import {render, fireEvent, within, getNodeText} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from '../reducer'
import {ConnectedApp} from '../app'

function renderWithStore(
  ui: React.ReactNode
) {
  const store = createStore(reducer)
  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  )
}


describe('Todo App',()=>{
  const regex_newTodoLabel = /enter\stodo/i

  test('Render a "Adding todo" input field', () =>{
    const {
      getByLabelText,
    } = renderWithStore(<ConnectedApp/>)

    getByLabelText(regex_newTodoLabel)
  })


  test('Add todo input take user values', () =>{
    const {
      getByLabelText,
    } = renderWithStore(<ConnectedApp/>)

    const newTodoInput = getByLabelText(regex_newTodoLabel)

    const todo = 'learn react'
    userEvent.type(newTodoInput, todo)
    expect(newTodoInput).toHaveAttribute('value', todo)
  })


  test('Can create todos [Operations: Create, Read]', () =>{
    const {
      getByLabelText,
      getByTestId,
    } = renderWithStore(<ConnectedApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')
    const todoList = getByTestId('todo-list')

    todoTexts.forEach(todoText=>{
      expect(todoList).not.toHaveTextContent(todoText)
    })

    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    todoTexts.forEach(todoText=>{
      expect(todoList).toHaveTextContent(todoText)
    })
  })



  // ============================================
  // The remaining tests test the CRUD operation
  // ============================================

  test('Can update todos [Operation: update]', () =>{
    const {
      getByLabelText,
      getByText,
      getByTestId,
      getAllByTestId
      } = renderWithStore(<ConnectedApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    // We want to update the todo item with the following text.
    // To update we mean to check and complted the todo item.
    const todoText_toUpdate = todoTexts[1]  // 'learn redux'

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')

    // create todo items
    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    // now todoItems has been created
    expect(getAllByTestId('todo-item')).toHaveLength(3)

    // get the checkbox;
    const checkboxToCheck = getByLabelText(todoText_toUpdate) as HTMLInputElement

    // pre test:
    expect(checkboxToCheck.checked).toBe(false)

    // click it:
    const todoItemToClick = getByText('learn redux')
    fireEvent.click(todoItemToClick)

    // test it:
    expect(checkboxToCheck.checked).toBe(true)

    // click again:
    fireEvent.click(todoItemToClick)

    // test it:
    expect(checkboxToCheck.checked).toBe(false)
  })


  test('Can deleted todos [Operation: delete]', () =>{
    const {
      getByLabelText,
      getByTestId,
      getAllByTestId
      } = renderWithStore(<ConnectedApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    // We want to remove the todo item with the following text
    const todoText_toDelete = todoTexts[1]  // 'learn redux'

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')
    const todoList = getByTestId('todo-list')

    // create todo items
    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    // now todo items has been created
    expect(getAllByTestId('todo-item')).toHaveLength(3)


    // get all the todo items
    const todoItems = getAllByTestId('todo-item')

    // Since delete button is not inside label element:
    //
    //   <div data-testid="todo-item">
    //     <button>X</button>
    //     <label htmlFor={`todo-${todo.id}`} >
    //       <input type="checkbox" id={`todo-${todo.id}`} />
    //       {todo.text}
    //     </label>
    //   </div>
    //
    // we cannot use getByText('learn redux') to reach our targeted
    // delete button <button>X</button>.
    //
    // To get the targeted delete button we have to search among
    // all our data-testid="todo-item":

    const todoItemsToDelete = todoItems.filter( (todoItem)=>{
      const label = todoItem.querySelector('label')
      return (label)? getNodeText(label) === todoText_toDelete : false
      // the predicate of this filter look for label
      // with text node that has the text we want.
    })

    // Now we have the item, we can "go within" to get the delete button:
    const deleteTodoButton = within(todoItemsToDelete[0]).getByText('X')

    // delete it:
    fireEvent.click(deleteTodoButton)

    // test it:
    expect(todoList).not.toHaveTextContent(todoText_toDelete)
  })
})
