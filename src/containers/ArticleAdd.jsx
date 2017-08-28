import _ from 'lodash'
import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../actions/article'
import axios from 'axios'
import api from '../config/api'
import { pathsToOmit } from '../helpers/data'
import ArticleAdd from '../components/ArticleAdd'

const propTypes = {
  board: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  addArticle: PropTypes.func.isRequired
}

class ArticleAddContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { url: '', data: {}, error: {}, isFetching: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.requestParse = _.debounce(this.requestParse, 250)
  }

  handleChange(url) {
    this.setState({ url })
    url.startsWith('http') &&
      this.setState({ isFetching: true }, () => this.requestParse(url))
  }

  handleEnter() {
    const { board, list, addArticle } = this.props
    const { data } = this.state

    if (data.url) {
      const article = {
        board: board.key,
        list: list.key,
        date_added: moment().format('YYYY-MM-DD'),
        snippet: _.omit(data, pathsToOmit)
      }

      addArticle(article) && this.setState({ url: '', data: {} })
    }
  }

  requestParse(url) {
    const headers = { 'Content-Type': 'application/json', 'x-api-key': api.key }

    axios
      .get(api.url + url, { headers })
      .then(({ data }) =>
        this.setState(
          data.error
            ? { error: { message: data.messages }, isFetching: false }
            : { data, error: {}, isFetching: false }
        )
      )
      .catch(error => this.setState({ error, isFetching: false }))
  }

  render() {
    const { url, data, error, isFetching } = this.state

    return (
      <ArticleAdd
        url={url}
        article={data}
        error={isFetching ? '...' : error.message}
        onChange={this.handleChange}
        onEnter={this.handleEnter}
      />
    )
  }
}

ArticleAddContainer.propTypes = propTypes

const mapDispatchToProps = dispatch =>
  bindActionCreators(articleActions, dispatch)

export default connect(null, mapDispatchToProps)(ArticleAddContainer)
