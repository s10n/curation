import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../actions/article'
import Header from '../components/Header'
import Articles from '../components/Articles'
import ArticleAdd from '../components/ArticleAdd'

const propTypes = {
  articles: PropTypes.object.isRequired,
  addArticle: PropTypes.func.isRequired
}

const App = ({ articles, addArticle }) =>
  <main>
    <Header />
    <Articles articles={articles} />
    <ArticleAdd onAdd={addArticle} />
  </main>

App.propTypes = propTypes

const mapStateToProps = ({ articles }) => ({ articles })
const mapDispatchToProps = dispatch => bindActionCreators(articleActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
