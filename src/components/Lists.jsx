import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import List from './List'

const propTypes = {
  lists: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  board: PropTypes.object.isRequired
}

const Lists = ({ lists, articles, board }) => (
  <section>
    {lists.map(list => (
      <List
        list={list}
        articles={_.filter(articles, ['list', list.key])}
        board={board}
        key={list.key}
      />
    ))}
  </section>
)

Lists.propTypes = propTypes

export default Lists
