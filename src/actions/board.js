import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const getBoards = () => {
  const boards = JSON.parse(localStorage.getItem('boards')) || {}
  return { type: types.FETCH_BOARDS, boards }
}

export const addBoard = board => {
  const key = uuidv4()
  return { type: types.ADD_BOARD, key, board: { ...board, key } }
}
