import {
  T_todo
} from './model'

enum actionNames {
  todos_add = 'todos_add',
  todos_delete = 'todos_delete',
  todos_toggle = 'todos_toggle',
}



const todos_add = ( newTodo:T_todo ) => ({
  type: actionNames.todos_add as actionNames.todos_add,
  payload: { newTodo }
})
const todos_delete = (id:string) => ({
  type: actionNames.todos_delete as actionNames.todos_delete,
  payload: { id }
})
const todos_toggle = (id:string) => ({
  type: actionNames.todos_toggle as actionNames.todos_toggle,
  payload: { id }
})


const actions = {
  todos_add,
  todos_delete,
  todos_toggle
}


type T_actions =
  ReturnType<typeof actions.todos_add> |
  ReturnType<typeof actions.todos_delete> |
  ReturnType<typeof actions.todos_toggle>


export {
  actionNames,
  actions,

  T_actions
}

