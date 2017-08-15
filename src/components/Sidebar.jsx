import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const propTypes = {
  boards: PropTypes.array.isRequired,
  variant: PropTypes.object,
  addBoard: PropTypes.func.isRequired
}

const defaultProps = {
  variant: {}
}

const Sidebar = ({ boards, variant, addBoard }) =>
  <aside style={variant}>
    <nav>
      {boards.map(board =>
        <Link to={'/anonymous/' + board.slug} style={{ display: 'block' }} key={board.key}>
          {board.title}
        </Link>
      )}
    </nav>

    <BoardAdd boards={boards} onAddBoard={addBoard} />
  </aside>

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar
