import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.string
}

const defaultProps = {
  children: 'Curation'
}

const Header = ({ children }) =>
  <header>
    <h1>
      {children}
    </h1>
  </header>

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
