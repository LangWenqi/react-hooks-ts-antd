import { INCREMENT, DECREMENT } from '@/store/constants/data';
import { I_INCREMENT_ACTION, I_DECREMENT_ACTION } from '@/store/interface/data';

export const increment = (): I_INCREMENT_ACTION => ({
    type: INCREMENT,
});

export const decrement = (): I_DECREMENT_ACTION => ({
    type: DECREMENT
});
