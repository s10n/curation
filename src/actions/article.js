import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const addArticle = article => {
  const key = uuidv4()
  return { type: types.ADD_ARTICLE, key, article: { ...article, key } }
}
