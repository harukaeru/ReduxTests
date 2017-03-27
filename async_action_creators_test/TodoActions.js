import fetch from 'isomorphic-fetch'

const fetchTodosRequest = () => ({
  type: 'FETCH_TODOS_REQUEST'
})

const fetchTodosSuccess = (body) => ({
  type: 'FETCH_TODOS_SUCCESS',
  body
})

const fetchTodosFailure = (ex) => ({
  type: 'FETCH_TODOS_FAILURE',
  ex
})

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(json => dispatch(fetchTodosSuccess(json.body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
}
