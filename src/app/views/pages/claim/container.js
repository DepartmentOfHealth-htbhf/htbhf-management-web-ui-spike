import { connect } from 'react-redux'
import { Claim } from './claim'
import { claim } from '../../../state'

const mapStateToProps = (state, ownProps) => ({
  // TODO use selector to get entity and meta
  claimId: ownProps.match.params.id,
  claim: state.claim.entity,
  meta: state.claim.meta
})

const mapDispatchToProps = (dispatch) => ({
  getClaim: (claimId) => dispatch(claim.actions.getClaim(claimId))
})

const container = connect(mapStateToProps, mapDispatchToProps)(Claim)

export {
  container
}
