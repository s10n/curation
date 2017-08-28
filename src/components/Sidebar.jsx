import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BoardAdd from '../containers/BoardAdd'

const propTypes = {
  boards: PropTypes.array.isRequired
}

const Sidebar = ({ boards }) =>
  <nav>
    {boards.map(board =>
      <Link to={'/anonymous/' + board.slug} style={style.Link} key={board.key}>
        {board.title}
      </Link>
    )}

    <BoardAdd boards={boards} />
  </nav>

Sidebar.propTypes = propTypes

const style = {
  Link: { color: 'black', display: 'block', padding: '.5rem 1rem' }
}

export default Sidebar
