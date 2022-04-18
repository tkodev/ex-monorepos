import {
  actionNames,
  T_actions
} from './action'

import {
  T_todos
} from './model'


const initialState:T_todos = []


function reducer(
  state:T_todos = initialState,
  action:T_actions
) {
  switch (action.type) {
    case actionNames.todos_add: {
      type Tadd = typeof action
      const newTodo = action && action.payload && action.payload.newTodo
      return [...state, newTodo]
    }
    case actionNames.todos_delete: {
      type Tdelete = typeof action
      const id = action && action.payload && action.payload.id
      return state.filter(prevTodo=>prevTodo.id !==id)
    }
    case actionNames.todos_toggle: {
      type Ttoggle = typeof action
      const id = action && action.payload && action.payload.id
      return state.map(
        prevTodo => {
          if (id===prevTodo.id) {
            return {...prevTodo, completed:!prevTodo.completed}
          }
          return prevTodo
        }
      )
    }
    default:
      type catchall = typeof action
      return state
  }
}

export {
  initialState,
  reducer
}

