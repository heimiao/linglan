import { combineReducers } from 'redux'
const selectedReddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case 'SELECT_REDDIT':
      return action.reddit
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedReddit
})

export default rootReducer
