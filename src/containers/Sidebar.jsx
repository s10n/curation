import _ from 'lodash'
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

const mapStateToProps = ({ boards }) => ({ boards: _.values(boards) })

export default connect(mapStateToProps)(Sidebar)
