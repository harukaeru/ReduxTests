import reducers from './reducers'

describe('todo reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducers([], {
        type: 'ADD_TODO',
        text: 'Run the tests'
      })
    ).toEqual(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ]
    )

    expect(
      reducers([
        {
          id: 0,
          text: 'Use Redux',
          completed: false
        }
      ], {
        type: 'ADD_TODO',
        text: 'Run the tests',
      })
    ).toEqual([
        {
          id: 1,
          text: 'Run the tests',
          completed: false
        }, {
          id: 0,
          text: 'Use Redux',
          completed: false
        }
      ])
  })
})
