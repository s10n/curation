import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import api from '../config/api'
import Input from './Input'
import Article from './Article'

const propTypes = {
  onAdd: PropTypes.func.isRequired
}

class ArticleAdd extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {}, error: {} }
  }

  requestParse(url) {
    const headers = { 'Content-Type': 'application/json', 'x-api-key': api.key }

    axios
      .get(api.url + url, { headers })
      .then(({ data }) => this.setState({ data, error: {} }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { data, error } = this.state

    return (
      <section>
        <Input
          onChange={_.debounce(url => url && this.requestParse(url), 250)}
          onEnter={() => data.url && this.props.onAdd(data)}
        />
        {error.message || (data.url && <Article {...data} />)}
      </section>
    )
  }
}

ArticleAdd.propTypes = propTypes

export default ArticleAdd