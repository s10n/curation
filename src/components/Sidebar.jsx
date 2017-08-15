import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BoardAdd from './BoardAdd'

const propTypes = {
  boards: PropTypes.object.isRequired,
  variant: PropTypes.object,
  onAddBoard: PropTypes.func.isRequired
}

const defaultProps = {
  variant: {}
}

const Sidebar = ({ boards, variant, onAddBoard }) =>
  <aside style={variant}>
    <nav>
      {Object.keys(boards).map(key =>
        <Link to={'/anonymous/' + boards[key].slug} style={{ display: 'block' }} key={key}>
          {boards[key].title}
        </Link>
      )}
    </nav>

    <BoardAdd boards={boards} onAddBoard={onAddBoard} />
  </aside>

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar
