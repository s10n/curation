import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import api from '../config/api'

const propTypes = {
  onAdd: PropTypes.func.isRequired
}

class ArticleAdd extends Component {
  constructor(props) {
    super(props)
    this.state = { url: '', data: {}, error: {} }
  }

  requestParse() {
    const url = api.url + this.state.url
    const headers = { 'Content-Type': 'application/json', 'x-api-key': api.key }

    axios
      .get(url, { headers })
      .then(({ data }) => this.setState({ data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <input
        value={this.state.url}
        onChange={event => this.setState({ url: event.target.value }, () => this.requestParse())}
        onKeyPress={event => event.key === 'Enter' && this.props.onAdd(this.state.data)}
      />
    )
  }
}

ArticleAdd.propTypes = propTypes

export default ArticleAdd
