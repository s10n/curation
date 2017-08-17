import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const propTypes = {
  title: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  title: '',
  error: ''
}

const BoardAdd = ({ title, error, onChange, onEnter }) =>
  <section>
    <Input value={title} onChange={onChange} onEnter={onEnter} />

    {error &&
      <p>
        {error}
      </p>}
  </section>

BoardAdd.propTypes = propTypes
BoardAdd.defaultProps = defaultProps

export default BoardAdd
