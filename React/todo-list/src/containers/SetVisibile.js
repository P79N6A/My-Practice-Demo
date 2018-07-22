import { connect } from 'react-redux'

const mapStateToProps = state => {
  return state
}

const mapActionToProps = state => {
  return {
    onClick: (filter) => state.dispatch()
  }
}

const FooterLink = connect(
  mapStateToProps,
  mapActionToProps
)()