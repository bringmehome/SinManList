import { combineReducers } from 'redux'
import todos from './todos'
console.debug("reduce-->index.js");
const rootReducer = combineReducers({
  todos
})

export default rootReducer