import uniqueId from 'lodash/uniqueId'


// ======================================
// Example of Todos data shape in reducer
// ======================================
const exampleData_todos = [
  {
    id: '123',
    timeStamp: 1571009860554,
    text: 'do something',
    completed: true
  },
  {
    id: '124',
    timeStamp: 1571009869999,
    text: 'do something',
    completed: true
  }
]



// =======================
// Todos schema in reducer
// =======================
type T_todo = typeof exampleData_todos[0]
type T_todos = ReadonlyArray<T_todo>
//            ^^^^^^^^^^^^^^ Read only,
//            if you need to change it you need to clone it.



// =============
// make new Todo
// =============

const makeNewTodo = (todoText:string) => ({
  id: uniqueId(),
  text: todoText,
  timeStamp: Date.now(),
  completed: false
})


export {
  exampleData_todos,

  makeNewTodo,

  T_todos,
  T_todo
}
