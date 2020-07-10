import API from 'goals-todos-api';

const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData (todos, goals) {
  return {
      type: RECEIVE_DATA,
      todos,
      goals
  }
  }

export function handleInitialData () {
    return (dispatch) => {
        return Promise.all([
                API.fetchTodos(),
                API.fetchGoals()
                ]).then(([ todos, goals ]) => {
                    dispatch(receiveData(goals, todos))
            })
    }
}