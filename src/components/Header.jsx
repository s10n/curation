import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const propTypes = {
  children: PropTypes.string
}

const defaultProps = {
  children: 'Curation'
}

const Header = ({ children }) =>
  <header>
    <h1>
      <Link to="/" style={{ color: 'black' }}>
        {children}
      </Link>
    </h1>
  </header>

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
