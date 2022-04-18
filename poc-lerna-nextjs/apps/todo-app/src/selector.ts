import { Dispatch } from 'redux'

import { actions } from './action'
import { makeNewTodo } from './model'

import { T_appState } from './store'


const mapAppStateToProps = (appState:T_appState) => {
  // appState = [{}, {}, {}, ...]
  const todos = appState
  return { 
    todos
  }
}



const mapDispatchToProps = (dispatch:Dispatch) => (
  {
    dispatch_addTodo(newTodoText:string) {
      const newTodo = makeNewTodo(newTodoText)
      dispatch(actions.todos_add(newTodo) )
    },
    dispatch_deleteTodo(id:string)   { dispatch( actions.todos_delete(id)   ) },
    dispatch_toggleTodo(id:string)   { dispatch( actions.todos_toggle(id)   ) }
  }
)


type T_mapAppStateToProps = ReturnType<typeof mapAppStateToProps>
type T_mapDispatchToProps = ReturnType<typeof mapDispatchToProps>


export {
  mapAppStateToProps,
  mapDispatchToProps,

  T_mapAppStateToProps,
  T_mapDispatchToProps,

  makeNewTodo
}
