import { INCREMENT, DECREMENT } from '@/store/constants/data';

export interface I_INIT_STATE {
	counter: number
}
export interface I_INCREMENT_ACTION {
    type: INCREMENT;
}

export interface I_DECREMENT_ACTION {
    type: DECREMENT;
}

export type MODIFY_ACTION = I_INCREMENT_ACTION | I_DECREMENT_ACTION;
