import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  variant: {}
}

const Input = ({ type, value, placeholder, variant, onChange, onEnter }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    style={{ ...style.input, ...variant }}
    onChange={event => onChange(event.target.value)}
    onKeyPress={event => event.key === 'Enter' && onEnter()}
  />
)

Input.propTypes = propTypes
Input.defaultProps = defaultProps

const style = {
  input: { display: 'block', width: '100%' }
}

export default Input
