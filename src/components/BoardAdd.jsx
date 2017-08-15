import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { slugify } from '../helpers/utils'
import Input from './Input'

const propTypes = {
  boards: PropTypes.array.isRequired,
  onAddBoard: PropTypes.func.isRequired
}

class BoardAdd extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', slug: '', error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(title) {
    const { boards } = this.props
    const slug = slugify(title)
    const error = _.findIndex(boards, ['slug', slug]) !== -1 ? 'Board already exists' : ''

    this.setState({ title, slug, error })
  }

  handleEnter() {
    const title = this.state.title.trim()
    const { slug, error } = this.state

    if (title && slug && !error) {
      this.props.onAddBoard({ title, slug })
      this.setState({ title: '', slug: '' })
    }
  }

  render() {
    const { title, error } = this.state

    return (
      <section>
        <Input value={title} onChange={this.handleChange} onEnter={this.handleEnter} />

        <p>
          {title.length > 0 && error}
        </p>
      </section>
    )
  }
}

BoardAdd.propTypes = propTypes

export default BoardAdd
