import React from 'react'
import PropTypes from 'prop-types'
import Lists from './Lists'
import Articles from '../components/Articles'
import ListAdd from '../components/ListAdd'

const propTypes = {
  board: PropTypes.object.isRequired,
  lists: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  addList: PropTypes.func.isRequired
}

const Board = ({ board, lists, articles, addList }) =>
  <main>
    <Lists lists={lists} />
    <Articles articles={articles} />
    <ListAdd onAddList={addList} board={board} />
  </main>

Board.propTypes = propTypes

export default Board
