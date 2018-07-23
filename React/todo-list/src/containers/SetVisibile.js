import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { getVisbile } from '../actions/filterVisibile'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapActionToProps = (dispatch, ownProps) => {
  return {
    onClick: (filter) => dispatch(getVisbile(filter))
  }
}

const FooterButton = connect(
  mapStateToProps,
  mapActionToProps
)(Footer)

export default FooterButton