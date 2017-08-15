import types from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLES:
      return action.articles

    case types.ADD_ARTICLE:
      return { ...state, [action.key]: action.article }

    default:
      return state
  }
}
