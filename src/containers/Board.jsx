import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as boardActions from '../actions/board'
import * as listActions from '../actions/list'
import * as articleActions from '../actions/article'
import Board from '../components/Board'

const mapStateToProps = ({ lists, articles }) => ({ lists, articles })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...boardActions, ...listActions, ...articleActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)
