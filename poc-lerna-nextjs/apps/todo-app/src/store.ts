import { createStore } from 'redux'

import { 
  reducer
} from './reducer'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:any
  }
}


type T_appState = ReturnType<typeof reducer>


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export {
  store,
  T_appState
}

