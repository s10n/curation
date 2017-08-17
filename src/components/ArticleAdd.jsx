import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Article from './Article'

const propTypes = {
  url: PropTypes.string,
  article: PropTypes.object,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  url: '',
  article: {},
  error: ''
}

const ArticleAdd = ({ url, article, error, onChange, onEnter }) =>
  <section>
    <Input value={url} onChange={onChange} onEnter={onEnter} />
    {error || (article.url && <Article {...article} />)}
  </section>

ArticleAdd.propTypes = propTypes
ArticleAdd.defaultProps = defaultProps

export default ArticleAdd
