import { CALL_API } from '../middleware/api-service'

const createCallApiAction = ({ method, endpoint, types, body }) => ({
  // TODO type is added as integration test (react testing library) throws an error if type is undefined
  type: CALL_API,
  [CALL_API]: {
    method,
    endpoint,
    types,
    body
  }
})

export {
  createCallApiAction
}
