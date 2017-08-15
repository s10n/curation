import types from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BOARDS:
      return action.boards

    case types.ADD_BOARD:
      return { ...state, [action.key]: action.board }

    default:
      return state
  }
}
