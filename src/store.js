import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedState = {
  boards: JSON.parse(localStorage.getItem('boards')) || {},
  lists: JSON.parse(localStorage.getItem('lists')) || {},
  articles: JSON.parse(localStorage.getItem('articles')) || {}
}

const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(reduxThunk)))
store.subscribe(() => {
  const { boards, lists, articles } = store.getState()
  localStorage.setItem('boards', JSON.stringify(boards))
  localStorage.setItem('lists', JSON.stringify(lists))
  localStorage.setItem('articles', JSON.stringify(articles))
})

export default store
