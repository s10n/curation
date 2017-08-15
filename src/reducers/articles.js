import types from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return { ...state, [action.key]: action.article }

    default:
      return state
  }
}
