import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired
}

const List = ({ title }) =>
  <h2>
    {title}
  </h2>

List.propTypes = propTypes

export default List
