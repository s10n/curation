import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from '../actions/list'
import { slugify } from '../helpers/utils'
import ListAdd from '../components/ListAdd'

const propTypes = {
  board: PropTypes.object.isRequired,
  addList: PropTypes.func.isRequired
}

class ListAddContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '', slug: '', error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(title) {
    const slug = slugify(title)
    this.setState({ title, slug })
  }

  handleEnter() {
    const { board } = this.props
    const { slug, error } = this.state
    const title = this.state.title.trim()

    if (title && slug && !error) {
      this.props.addList({ title, slug, board: board.key })
      this.setState({ title: '', slug: '' })
    }
  }

  render() {
    const { title } = this.state

    return <ListAdd title={title} onChange={this.handleChange} onEnter={this.handleEnter} />
  }
}

ListAddContainer.propTypes = propTypes

const mapDispatchToProps = dispatch => bindActionCreators({ ...listActions }, dispatch)

export default connect(null, mapDispatchToProps)(ListAddContainer)
