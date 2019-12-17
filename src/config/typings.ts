import { FunctionComponent, ComponentClass } from 'react';
// 懒加载函数
export interface Icomponent  {
	default: FunctionComponent;
	[propName: string]: any; 
}
// 懒加载函数
export interface IclassComponent  {
	default: ComponentClass;
	[propName: string]: any; 
}
// 路由
export interface IrouterMapInterface {
	path: string;
	module?: string;
	component: ComponentClass;
	redirect?: string;
	to?: any;
	exact?: boolean;
	routes?: Array<IrouterMapInterface>;
}
// history跳转query参数
export interface IhistoryQuery {
	[propName: string]: string | number
}
// history跳转所有参数
export interface historyParams {
	pathname: string;
	query?: IhistoryQuery;
	[propName: string]: any;
}
// history全局拦截钩子函数参数
export interface IrouterBeforeEach {
	next: () => any;
	from: historyParams
	to: historyParams
}
// history全局拦截钩子函数参数
export interface IrouterAfterEach {
	from: historyParams
	to: historyParams
}