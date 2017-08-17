import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired
}

const defaultProps = {
  title: ''
}

const ListAdd = ({ title, onChange, onEnter }) =>
  <section>
    <Input value={title} onChange={onChange} onEnter={onEnter} />

    {title &&
      <h2>
        {title}
      </h2>}
  </section>

ListAdd.propTypes = propTypes
ListAdd.defaultProps = defaultProps

export default ListAdd
