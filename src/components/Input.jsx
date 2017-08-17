import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  value: '',
  placeholder: ''
}

const Input = ({ value, placeholder, onChange, onEnter }) =>
  <input
    value={value}
    placeholder={placeholder}
    onChange={event => onChange(event.target.value)}
    onKeyPress={event => event.key === 'Enter' && onEnter()}
  />

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
