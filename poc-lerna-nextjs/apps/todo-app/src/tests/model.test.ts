import { makeNewTodo } from  '../model'

describe('makeNewTodo', ()=>{
  it('can create time stamp', ()=>{
    const timeBefore = Date.now()
    const todoObj = makeNewTodo('learn react')
    const timeAfter = Date.now()

    expect(timeBefore).toBeLessThanOrEqual(todoObj.timeStamp)
    expect(timeAfter).toBeGreaterThanOrEqual(todoObj.timeStamp)
  })
})
