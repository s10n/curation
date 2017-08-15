import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from '../actions/list'
import * as articleActions from '../actions/article'
import { setStorage } from '../helpers/data'
import Header from '../components/Header'
import Articles from '../components/Articles'
import Add from '../components/Add'

const propTypes = {
  articles: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
}

class App extends Component {
  componentWillMount() {
    this.props.getArticles()
    this.props.getLists()
  }

  componentDidUpdate(prevProps) {
    setStorage(prevProps, this.props)
  }

  render() {
    const { articles, addList, addArticle } = this.props

    return (
      <main>
        <Header />
        <Articles articles={articles} />
        <Add onAddList={addList} onAddArticle={addArticle} />
      </main>
    )
  }
}

App.propTypes = propTypes

const mapStateToProps = ({ lists, articles }) => ({ lists, articles })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...listActions, ...articleActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
