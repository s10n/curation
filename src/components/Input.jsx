import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
    this.props.onChange(value)
  }

  handleEnter() {
    this.props.onEnter()
    this.setState({ value: '' })
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={event => this.handleChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && this.handleEnter()}
      />
    )
  }
}

Input.propTypes = propTypes

export default Input
