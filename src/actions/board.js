import uuidv4 from 'uuid/v4'
import types from '../constants/actions'

export const addBoard = board => {
  const key = uuidv4()
  return { type: types.ADD_BOARD, key, board: { ...board, key } }
}
