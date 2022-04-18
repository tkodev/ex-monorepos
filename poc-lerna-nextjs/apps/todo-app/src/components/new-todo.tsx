import React from 'react'

interface T_NewTodo_props {
  newTodoSubmit: (newTodoText:string) => void
}


// ======================
//   New Todo component
// ======================
const NewTodo = ({newTodoSubmit}:T_NewTodo_props) => {
  const [todoInputText, updateTodoInputText] = React.useState<string>('')

  const handle_newTodoChange = (e:React.FormEvent<HTMLInputElement>) => {
    const inputText =  e.currentTarget.value
    updateTodoInputText(inputText)
  }

  const handle_newTodoSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElements = e.currentTarget.elements
    const formElementsExtended = formElements as typeof formElements & {
      'new-todo': {value: string}
    }

    const newTodoText = formElementsExtended['new-todo'].value
    newTodoSubmit( newTodoText )
    updateTodoInputText('')
  }

  return (
    <div>
      <form onSubmit={handle_newTodoSubmit} data-testid="new-todo-form">
        <label htmlFor="new-todo">Enter todo here:{' '}</label>
        <input
          type="text"
          onChange={handle_newTodoChange}
          id="new-todo"
          value={todoInputText}
        />
      </form>
    </div>
  )
}

export {
  NewTodo
}
