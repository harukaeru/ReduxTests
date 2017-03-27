import * as actions from './AddTodo'

describe('actions', () => {
  it('should create an action to add', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      text
    }

    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})
