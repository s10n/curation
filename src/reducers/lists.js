import types from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LISTS:
      return action.lists

    case types.ADD_LIST:
      return { ...state, [action.key]: action.list }

    default:
      return state
  }
}
