import { FunctionComponent, ComponentClass } from 'react';
// 懒加载函数
export interface Icomponent  {
	default: FunctionComponent;
	[key: string]: any; 
}
// 懒加载函数
export interface IclassComponent  {
	default: ComponentClass;
	[key: string]: any; 
}
// 路由
export interface IrouterMapInterface {
	pathname: string;
	module?: string;
	select?: string;
	component: FunctionComponent;
	redirect?: string;
	to?: any;
	exact?: boolean;
	beforeRouteEnter?: ({ next, from ,to }: IrouterBeforeEach) => void;
	routes?: Array<IrouterMapInterface>;
}
export interface ImenuInterface {
	name: string;
	module: string;
	routes: Array<{
		name: string;
		module: string;
		select: string;
		path: string;
	}>
}
// history跳转query参数
export interface IhistoryQuery {
	[key: string]: string | number
}
// history跳转所有参数
export interface historyParams {
	pathname: string;
	query?: IhistoryQuery;
	[key: string]: any;
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