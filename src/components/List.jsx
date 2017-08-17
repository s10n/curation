import React from 'react'
import PropTypes from 'prop-types'
import Articles from './Articles'
import ArticleAdd from '../containers/ArticleAdd'

const propTypes = {
  list: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  board: PropTypes.object.isRequired
}

const List = ({ list, articles, board }) =>
  <article>
    <h2>
      {list.title}
    </h2>

    <Articles articles={articles} />
    <ArticleAdd board={board} list={list} />
  </article>

List.propTypes = propTypes

export default List
