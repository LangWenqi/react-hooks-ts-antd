import { INCREMENT, DECREMENT } from '../constants/data';
import { I_INCREMENT_ACTION, I_DECREMENT_ACTION } from '../interface/data';

export const increment = (): I_INCREMENT_ACTION => ({
    type: INCREMENT,
})

export const decrement = (): I_DECREMENT_ACTION => ({
    type: DECREMENT
})
