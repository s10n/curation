import React from 'react'
import PropTypes from 'prop-types'
import Lists from './Lists'
import ListAdd from '../containers/ListAdd'

const propTypes = {
  board: PropTypes.object.isRequired,
  lists: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired
}

const Board = ({ board, lists, articles }) =>
  <article>
    <h1 style={{ marginBottom: '1em' }}>
      {board.title}
    </h1>
    <Lists lists={lists} articles={articles} board={board} />
    <ListAdd board={board} />
  </article>

Board.propTypes = propTypes

export default Board
