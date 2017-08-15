import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from '../actions/list'
import * as articleActions from '../actions/article'
import Board from '../components/Board'

const mapStateToProps = ({ boards, lists, articles }, ownProps) => {
  const board = _.find(boards, ['slug', ownProps.match.params.board]) || {}

  return {
    board,
    lists: _.filter(lists, ['board', board.key]),
    articles: _.filter(articles, ['board', board.key])
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...listActions, ...articleActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
