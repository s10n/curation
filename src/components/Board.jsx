import React from 'react'
import PropTypes from 'prop-types'
import Lists from './Lists'
import Articles from './Articles'
import ListAdd from '../containers/ListAdd'

const propTypes = {
  board: PropTypes.object.isRequired,
  lists: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired
}

const Board = ({ board, lists, articles }) =>
  <main>
    <Lists lists={lists} />
    <Articles articles={articles} />
    <ListAdd board={board} />
  </main>

Board.propTypes = propTypes

export default Board
