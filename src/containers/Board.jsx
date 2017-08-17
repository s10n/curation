import _ from 'lodash'
import { connect } from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = ({ boards, lists, articles }, ownProps) => {
  const board = _.find(boards, ['slug', ownProps.match.params.board]) || {}

  return {
    board,
    lists: _.filter(lists, ['board', board.key]),
    articles: _.filter(articles, ['board', board.key])
  }
}

export default connect(mapStateToProps)(Board)
