import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../actions/article'
import Header from '../components/Header'
import ArticleAdd from '../components/ArticleAdd'

const propTypes = {
  addArticle: PropTypes.func.isRequired
}

const App = ({ addArticle }) =>
  <main>
    <Header />
    <ArticleAdd onAdd={addArticle} />
  </main>

App.propTypes = propTypes

const mapDispatchToProps = dispatch => bindActionCreators(articleActions, dispatch)

export default connect(null, mapDispatchToProps)(App)
