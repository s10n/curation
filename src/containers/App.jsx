import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as articleActions from '../actions/article'
import { setStorage } from '../helpers/data'
import Header from '../components/Header'
import Articles from '../components/Articles'
import ArticleAdd from '../components/ArticleAdd'

const propTypes = {
  articles: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
}

class App extends Component {
  componentWillMount() {
    this.props.getArticles()
  }

  componentDidUpdate(prevProps) {
    setStorage(prevProps, this.props)
  }

  render() {
    const { articles, addArticle } = this.props

    return (
      <main>
        <Header />
        <Articles articles={articles} />
        <ArticleAdd onAdd={addArticle} />
      </main>
    )
  }
}

App.propTypes = propTypes

const mapStateToProps = ({ articles }) => ({ articles })
const mapDispatchToProps = dispatch => bindActionCreators(articleActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
