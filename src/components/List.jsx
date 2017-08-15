import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
}

const List = ({ title, level }) => {
  const headings = { 2: 'h2', 3: 'h3' }
  const Heading = headings[level]

  return (
    <Heading>
      {title}
    </Heading>
  )
}

List.propTypes = propTypes

export default List
