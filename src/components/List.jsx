import React from 'react'
import PropTypes from 'prop-types'
import Articles from './Articles'
import ArticleAdd from '../containers/ArticleAdd'

const propTypes = {
  list: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  board: PropTypes.object.isRequired
}

const List = ({ list, articles, board }) => (
  <article>
    <h2 style={style.title}>{list.title}</h2>

    <Articles articles={articles} />
    <ArticleAdd board={board} list={list} />
  </article>
)

List.propTypes = propTypes

const style = {
  title: { borderBottom: '1px solid hsl(0, 0%, 93%)', marginBottom: '1rem' }
}

export default List
