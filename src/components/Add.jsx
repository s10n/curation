import _ from 'lodash'
import moment from 'moment'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import api from '../config/api'
import { pathsToOmit } from '../helpers/data'
import Input from './Input'
import Article from './Article'

const propTypes = {
  onAddList: PropTypes.func.isRequired,
  onAddArticle: PropTypes.func.isRequired
}

const initialState = { value: '', title: '', level: 0, data: {}, error: {}, isFetching: false }

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.requestParse = _.debounce(this.requestParse, 250)
  }

  handleChange(value) {
    value.startsWith('http')
      ? this.setState({ ...initialState, value, isFetching: true }, () => this.requestParse(value))
      : this.setState({ ...initialState, value }, () => this.parseList(value))
  }

  handleEnter() {
    const { title, level, data } = this.state
    title && this.addList({ title, level })
    data.url && this.addArticle(data)
  }

  parseList(string) {
    const SPACE = ' '
    const HEADINGS = ['##', '###']
    const level = string.indexOf(SPACE)

    this.setState(
      level > 0 && HEADINGS.includes(string.slice(0, level))
        ? { title: string.slice(level).trim(), level }
        : { title: '', level: 0 }
    )
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

  addList(list) {
    this.props.onAddList(list) && this.setState(initialState)
  }

  addArticle(data) {
    const article = {
      date_added: moment().format('YYYY-MM-DD'),
      snippet: _.omit(data, pathsToOmit)
    }

    this.props.onAddArticle(article) && this.setState(initialState)
  }

  render() {
    const { value, title, level, data, error, isFetching } = this.state
    const headings = { 2: 'h2', 3: 'h3' }
    const Heading = headings[level]

    return (
      <section>
        <Input value={value} onChange={this.handleChange} onEnter={this.handleEnter} />
        {title &&
          <Heading>
            {title}
          </Heading>}
        {isFetching ? '...' : error.message || (data.url && <Article {...data} />)}
      </section>
    )
  }
}

Add.propTypes = propTypes

export default Add
