import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import * as boardActions from '../actions/board'
import * as listActions from '../actions/list'
import * as articleActions from '../actions/article'
import { setStorage } from '../helpers/data'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Articles from '../components/Articles'
import Add from '../components/Add'

const propTypes = {
  boards: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired,
  getLists: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
}

class App extends Component {
  componentWillMount() {
    this.props.getBoards()
    this.props.getLists()
    this.props.getArticles()
  }

  componentDidUpdate(prevProps) {
    setStorage(prevProps, this.props)
  }

  render() {
    const { boards, articles, addBoard, addList, addArticle } = this.props

    return (
      <Router>
        <div>
          <Header />
          <main style={{ display: 'flex' }}>
            <Sidebar boards={boards} onAddBoard={addBoard} variant={{ flex: 'none' }} />
            <div style={{ flex: 1 }}>
              <Articles articles={articles} />
              <Add onAddList={addList} onAddArticle={addArticle} />
            </div>
          </main>
        </div>
      </Router>
    )
  }
}

App.propTypes = propTypes

const mapStateToProps = ({ boards, lists, articles }) => ({ boards, lists, articles })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...boardActions, ...listActions, ...articleActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
