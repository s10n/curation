import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as boardActions from '../actions/board'
import { slugify } from '../helpers/utils'
import BoardAdd from '../components/BoardAdd'

const propTypes = {
  boards: PropTypes.array.isRequired,
  addBoard: PropTypes.func.isRequired
}

class BoardAddContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', slug: '', error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(title) {
    const { boards } = this.props
    const slug = slugify(title)
    const error =
      _.findIndex(boards, ['slug', slug]) !== -1 ? 'Board already exists' : ''

    this.setState({ title, slug, error })
  }

  handleEnter() {
    const title = this.state.title.trim()
    const { slug, error } = this.state

    if (title && slug && !error) {
      this.props.addBoard({ title, slug })
      this.setState({ title: '', slug: '' })
    }
  }

  render() {
    const { title, error } = this.state

    return (
      <BoardAdd
        title={title}
        error={error}
        onChange={this.handleChange}
        onEnter={this.handleEnter}
      />
    )
  }
}

BoardAddContainer.propTypes = propTypes

const mapDispatchToProps = dispatch =>
  bindActionCreators(boardActions, dispatch)

export default connect(null, mapDispatchToProps)(BoardAddContainer)
