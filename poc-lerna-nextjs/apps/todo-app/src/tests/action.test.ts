import { actionNames, actions } from '../action'


describe('[Todo action creator]', ()=>{
  it('Should create an action to add new todo', () => {
    const newTodo = {id: 'newID', timeStamp:12345, text:'learn react', completed:false}

    const expectedAction = {
      type: actionNames.todos_add,
      payload: { newTodo }
    }

    expect(actions.todos_add(newTodo)).toEqual(expectedAction)
   })

  it('Should create an action to delete a todo', () => {
    const idToDelete = 'idToDelete'

    const expectedAction = {
      type: actionNames.todos_delete,
      payload: { id:idToDelete }
    }

    expect(actions.todos_delete(idToDelete)).toEqual(expectedAction)
   })

  it('Should create an action to toggle a todo', () => {
    const idToToggle = 'idToggle'

    const expectedAction = {
      type: actionNames.todos_toggle,
      payload: { id:idToToggle }
    }

    expect(actions.todos_toggle(idToToggle)).toEqual(expectedAction)
   })
})
