import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const getLists = () => {
  const lists = JSON.parse(localStorage.getItem('lists')) || {}
  return { type: types.FETCH_LISTS, lists }
}

export const addList = list => {
  const key = uuidv4()
  return { type: types.ADD_LIST, key, list: { ...list, key } }
}
