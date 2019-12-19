import { IrouterMapInterface } from '@/config/typings';
import { SET_ROUTE } from '@/store/constants/router';
export interface I_INIT_STATE {
	fullPathname: string;
	pathname: string;
	query: {
		[key: string]: string | number;
	};
	params: {
		[key: string]: string | number;
	};
	routeConfig: IrouterMapInterface | { pathname: string};
	state?: {
		[key: string]: string | number;
	}
}

export interface I_SET_ROUTE_ACTION {
    type: SET_ROUTE;
		route: I_INIT_STATE;
}
export type MODIFY_ACTION = I_SET_ROUTE_ACTION;
