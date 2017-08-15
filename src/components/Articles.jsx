import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

const propTypes = {
  articles: PropTypes.object.isRequired
}

const Articles = ({ articles }) =>
  <ul>
    {Object.keys(articles).map(key =>
      <li key={key}>
        <Article {...articles[key].snippet} />
      </li>
    )}
  </ul>

Articles.propTypes = propTypes

export default Articles
