import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const propTypes = {
  children: PropTypes.string
}

const defaultProps = {
  children: 'Curation'
}

const Header = ({ children }) => (
  <header>
    <h1 style={{ fontSize: '1rem' }}>
      <Link to="/" style={style.Link}>
        {children}
      </Link>
    </h1>
  </header>
)

Header.propTypes = propTypes
Header.defaultProps = defaultProps

const style = {
  Link: { color: 'black', display: 'block', padding: '.5rem 1rem' }
}

export default Header
