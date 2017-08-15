import { combineReducers } from 'redux'
import boards from './boards'
import lists from './lists'
import articles from './articles'

export default combineReducers({ boards, lists, articles })
