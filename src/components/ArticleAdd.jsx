import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import api from '../config/api'
import Input from './Input'

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
      .then(({ data }) => this.setState({ data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <Input
        onChange={_.debounce(url => this.requestParse(url), 250)}
        onEnter={() => this.props.onAdd(this.state.data)}
      />
    )
  }
}

ArticleAdd.propTypes = propTypes

export default ArticleAdd
