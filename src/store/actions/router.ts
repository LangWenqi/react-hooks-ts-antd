import { SET_ROUTE } from '@/store/constants/router';
import { I_SET_ROUTE_ACTION, I_INIT_STATE } from '@/store/interface/router';

export const $setRoute = (route: I_INIT_STATE): I_SET_ROUTE_ACTION => ({
    type: SET_ROUTE,
		route
});
