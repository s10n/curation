import React from 'react'
import PropTypes from 'prop-types'
import Lists from './Lists'
import Articles from '../components/Articles'
import Add from '../components/Add'

const propTypes = {
  board: PropTypes.object.isRequired,
  lists: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  addList: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
}

const Board = ({ board, lists, articles, addList, addArticle }) =>
  <main>
    <Lists lists={lists} />
    <Articles articles={articles} />
    <Add onAddList={addList} onAddArticle={addArticle} board={board} />
  </main>

Board.propTypes = propTypes

export default Board
