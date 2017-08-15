import types from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_BOARD:
      return { ...state, [action.key]: action.board }

    default:
      return state
  }
}
