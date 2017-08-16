import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { slugify } from '../helpers/utils'
import Input from './Input'

const propTypes = {
  board: PropTypes.object.isRequired,
  onAddList: PropTypes.func.isRequired
}

class ListAdd extends Component {
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
      this.props.onAddList({ title, slug, board: board.key })
      this.setState({ title: '', slug: '' })
    }
  }

  render() {
    const { title } = this.state

    return (
      <section>
        <Input value={title} onChange={this.handleChange} onEnter={this.handleEnter} />

        {title &&
          <h2>
            {title}
          </h2>}
      </section>
    )
  }
}

ListAdd.propTypes = propTypes

export default ListAdd
