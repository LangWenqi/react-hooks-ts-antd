import { SET_ROUTE } from '@/store/constants/router';
import { I_INIT_STATE, MODIFY_ACTION } from '@/store/interface/router';

const INIT_STATE: I_INIT_STATE = {
	fullPathname: window.location.href,
	pathname: '/',
	query: {},
	params: {},
	routeConfig: {
		pathname: '/'
	},
	state: {}
}
export default (state: I_INIT_STATE = INIT_STATE, action: MODIFY_ACTION): I_INIT_STATE => {
    switch (action.type) {
      case SET_ROUTE:
        return action.route;
      default:
        return state;
    }
}