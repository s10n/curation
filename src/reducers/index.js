import { combineReducers } from 'redux'
import lists from './lists'
import articles from './articles'

export default combineReducers({ lists, articles })
