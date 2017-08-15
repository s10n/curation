import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  value: ''
}

const Input = ({ value, onChange, onEnter }) =>
  <input
    value={value}
    onChange={event => onChange(event.target.value)}
    onKeyPress={event => event.key === 'Enter' && onEnter()}
  />

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
