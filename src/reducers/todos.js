import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'
import {RECEIVE_DATA} from '../actions/shared'

export default function todos (state = [], action) {
  switch (action.type) {

      case ADD_TODO:
          // Array.concat returns a new array
          return state.concat([action.todo])
      case REMOVE_TODO:
          // Array.filter returns a new array
          return state.filter((todo) => todo.id !== action.id)
      case TOGGLE_TODO:
          // Array.map returns a new array
          return state.map(
              (todo) => todo.id !== action.id ? todo: Object.assign({}, todo, {complete: !todo.complete})
          )
      case RECEIVE_DATA:
          return action.todos
      default:
          return state
  }
}
