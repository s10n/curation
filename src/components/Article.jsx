import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string
}

const defaultProps = {
  excerpt: ''
}

const Article = ({ url, title, excerpt }) =>
  <article>
    <h1>
      <a href={url} target="_blank">
        {title}
      </a>
    </h1>

    {excerpt &&
      <p>
        {excerpt}
      </p>}
  </article>

Article.propTypes = propTypes
Article.defaultProps = defaultProps

export default Article
