import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const getArticles = () => {
  const articles = JSON.parse(localStorage.getItem('articles')) || {}
  return { type: types.FETCH_ARTICLES, articles }
}

export const addArticle = article => {
  const key = uuidv4()
  return { type: types.ADD_ARTICLE, key, article: { ...article, key } }
}
