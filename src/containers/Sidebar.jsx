import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as boardActions from '../actions/board'
import Sidebar from '../components/Sidebar'

const mapStateToProps = ({ boards }) => ({ boards: _.values(boards) })
const mapDispatchToProps = dispatch => bindActionCreators(boardActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
