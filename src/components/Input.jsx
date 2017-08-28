import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  type: 'text',
  value: '',
  placeholder: ''
}

const Input = ({ type, value, placeholder, onChange, onEnter }) =>
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={event => onChange(event.target.value)}
    onKeyPress={event => event.key === 'Enter' && onEnter()}
  />

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
