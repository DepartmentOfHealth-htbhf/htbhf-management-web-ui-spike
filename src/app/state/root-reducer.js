import { combineReducers } from 'redux'
import { reducer as claims } from './claims'
import { reducer as claim } from './claim'

const rootReducer = combineReducers({
  claims,
  claim
})

export {
  rootReducer
}
