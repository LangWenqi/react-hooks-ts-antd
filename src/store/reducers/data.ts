import { INCREMENT, DECREMENT } from '../constants/data';
import { I_INIT_STATE, MODIFY_ACTION } from '../interface/data';

const INIT_STATE: I_INIT_STATE = {
	counter: 0
}
export default (state: I_INIT_STATE = INIT_STATE, action: MODIFY_ACTION): I_INIT_STATE => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + 1 }
      case DECREMENT:
        return { ...state, counter: state.counter - 1 }
      default:
        return state;
    }
}