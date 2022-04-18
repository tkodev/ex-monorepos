import React from 'react'
import { connect } from 'react-redux'

import {
  mapAppStateToProps,
  mapDispatchToProps,

  T_mapAppStateToProps,
  T_mapDispatchToProps,
} from './selector'

import { TodoItem } from './components/todo-item'
import { NewTodo } from './components/new-todo'



// =====
//  App
// =====

type T_App_props = {
} & T_mapAppStateToProps & T_mapDispatchToProps


const App = ({
  dispatch_addTodo,
  dispatch_deleteTodo,
  dispatch_toggleTodo,
  todos
}:T_App_props) => {
  const handle_addTodo = (newTodoText:string) => {
    dispatch_addTodo(newTodoText)
  }

  const handle_delete = (id:string) => () => {
    dispatch_deleteTodo(id)
  }

  const handle_toggle = (id:string) => () => {
    dispatch_toggleTodo(id)
  }

  return (
    <div>
      <NewTodo newTodoSubmit={handle_addTodo} />
      <pre><code> {JSON.stringify(todos, null, 2)} </code></pre>
      <div data-testid="todo-list">
        {
          todos.map(
            todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={handle_delete(todo.id)}
                toggleTodo={handle_toggle(todo.id)}
              />
            )
          )
        }
      </div>
    </div>
  )
}



const ConnectedApp = connect(
  mapAppStateToProps,
  mapDispatchToProps
)(App)

export { ConnectedApp }

