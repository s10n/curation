import React from 'react'
import PropTypes from 'prop-types'
import Articles from '../components/Articles'
import Add from '../components/Add'

const propTypes = {
  lists: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  addList: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
}

const Board = ({ lists, articles, addList, addArticle }) =>
  <div>
    <Articles articles={articles} />
    <Add onAddList={addList} onAddArticle={addArticle} />
  </div>

Board.propTypes = propTypes

export default Board
