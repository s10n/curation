import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

const propTypes = {
  articles: PropTypes.array.isRequired
}

const Articles = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.key}>
        <Article {...article.snippet} />
      </li>
    ))}
  </ul>
)

Articles.propTypes = propTypes

export default Articles
