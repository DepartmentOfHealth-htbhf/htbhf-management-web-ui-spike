import { combineReducers } from 'redux'
import { createReducer, asyncMetaReducer } from '../create-reducer'
import * as types from './types'

/**
 * State shape
 * {
 *   entities: Array,
 *   meta: {
 *     read: Object<Fetch Meta>
 *   }
 * }
 */

const entityHandlers = {
  [types.READ_CLAIMS_SUCCEEDED]: (state, action) => {
    return action.payload.claims
  }
}

const reducer = combineReducers({
  entities: createReducer([], entityHandlers),
  meta: asyncMetaReducer([{ operation: 'read', types: types.READ }])
})

export {
  reducer
}
