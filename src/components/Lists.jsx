import React from 'react'
import PropTypes from 'prop-types'
import List from './List'

const propTypes = {
  lists: PropTypes.array.isRequired
}

const Lists = ({ lists }) =>
  <section>
    {lists.map(list => <List {...list} key={list.key} />)}
  </section>

Lists.propTypes = propTypes

export default Lists
