import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { I_INIT_STATE } from '@/store/interface/data';
import { decrement, increment } from '@/store/actions/data';
export interface IReduxProps {
  counter: number,
  onIncrement: () => void,
  onDecrement: () => void
}

const mapStateToProps = (state: { data: I_INIT_STATE }): { counter: number } => ({
  counter: state.data.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps);