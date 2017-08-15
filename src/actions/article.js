import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const addArticle = article => ({ type: types.ADD_ARTICLE, key: uuidv4(), article })
