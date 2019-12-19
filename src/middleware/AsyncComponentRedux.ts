import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { I_INIT_STATE } from '@/store/interface/router';
import { $setRoute } from '@/store/actions/router';
export interface IReduxProps {
  $route: I_INIT_STATE;
  $setRoute: (route: I_INIT_STATE) => void;
}

const mapStateToProps = (state: { router: I_INIT_STATE }): { $route: I_INIT_STATE } => ({
  $route: state.router
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  $setRoute: (route: I_INIT_STATE) => dispatch($setRoute(route))
})

export default connect(mapStateToProps, mapDispatchToProps);