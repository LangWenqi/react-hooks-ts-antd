// class模式的引用
// import React, { Component,  FunctionComponent } from 'react';
// hooks模式的引用
import React, {  FunctionComponent, ReactElement, useState, useEffect } from "react";
import { Icomponent } from '@/config/typings';
import Connect, { IReduxProps } from '@/middleware/AsyncComponentRedux';
import history from '@/history';

interface Iprops  {
	[key: string]: any;
};
type IasyncProps = IReduxProps & Iprops;

// hooks模式
export default function asyncComponent(importComponent: () => Promise<Icomponent>, loading:boolean = true): FunctionComponent<Iprops> {
	const AsyncComponent: FunctionComponent<IasyncProps> = (props: Iprops): ReactElement | null => {
		const [C, setC] = useState<FunctionComponent<Iprops> | null>(null);
	
		useEffect(() => {
			initFuc();
  	}, []);

		useEffect(() => {
			if(C) {
				handleRouteAfterEach();
			}
  	}, [C]);

		const initFuc = async () => {
			await handleRouteBeforeEach();
			await handleBeforeRouteEnter();
			const { default: component }: { default: FunctionComponent<Iprops> } =  await importComponent();
			console.log(component)
			setCurrentRoute();
			// 函数组件设置到 useState Hooks 之后会变成函数组件的返回值，所以包装一层（被react-redux的高阶组件connect包裹的组件可以不需要）
			setC(() => component);
		}
		// routerConfig中路由进入之前钩子
		const handleBeforeRouteEnter = (): Promise<any> => {
			const {$route, route} = props;
			const { beforeRouteEnter } = route;
			return new Promise(next => {
				if ( !beforeRouteEnter ) {
					next(route);
					return;
				}
				const from = $route.routeConfig;
				const to = route;
				beforeRouteEnter({ next, from, to });
			});
		}
		// 每个页面中路由进入之前钩子
		const handleRouteBeforeEach = (): Promise<any> => {
			const {$route, route} = props;
			const { routeBeforeEach } = history;
			return new Promise(next => {
				if ( !routeBeforeEach ) {
					next($route);
					return;
				}
				const from = $route.routeConfig;
				const to = route;
				routeBeforeEach({ next, from, to });
			});
		}
		// 每个页面中路由进入之后钩子
		const handleRouteAfterEach = (): void => {
			const {$route, route} = props;
			const { routeAfterEach } = history;
			if ( !routeAfterEach ) return;
			const from = $route.routeConfig;
			const to = route;
			routeAfterEach({ from, to });
		}

		const setCurrentRoute = (): void => {
			const {$setRoute, match, route} = props;
			$setRoute({
				fullPathname: window.location.href,
				pathname: history.location.pathname,
				query: history.getQuery(),
				params: match.params,
       routeConfig: route,
       state: history.location.state
			});
		} 

		return (C ? <C {...props}/> : null); 
	}
  return Connect(AsyncComponent);
}

// class模式
// interface Istate  {
// 	component: FunctionComponent | null;
// 	[key: string]: any;
// };

// 如果不用redux，return的函数类型是ComponentClass，
// Connect是FunctionComponent，如果使用redux，return的函数类型是FunctionComponent
// 或者统一使用ComponentType
/*type ComponentType = ComponentClass | FunctionComponent*/

// export default function asyncComponent(importComponent: () => Promise<Icomponent>, loading:boolean = true): FunctionComponent<Iprops> {
//   class AsyncComponent extends Component<IasyncProps, Istate> {
// 		state: Istate = {
// 			component: null
// 		}
//     async componentDidMount() {
// 			await this.handleRouteBeforeEach();
// 			await this.handleBeforeRouteEnter();
//       const { default: component }: { default: FunctionComponent<Iprops> } =  await importComponent();
// 			this.setCurrentRoute();
//       this.setState({
//         component: component
//       }, () => {
// 				this.handleRouteAfterEach();
// 			});
//     }
// 		// routerConfig中路由进入之前钩子
// 		handleBeforeRouteEnter (): Promise<any> {
// 			const {$route, route} = this.props;
// 			const { beforeRouteEnter } = route;
// 			return new Promise(next => {
// 				if ( !beforeRouteEnter ) {
// 					next(route);
// 					return;
// 				}
// 				const from = $route.routeConfig;
// 				const to = route;
// 				beforeRouteEnter({ next, from, to });
// 			});
// 		}
// 		// 每个页面中路由进入之前钩子
// 		handleRouteBeforeEach (): Promise<any> {
// 			const {$route, route} = this.props;
// 			const { routeBeforeEach } = history;
// 			return new Promise(next => {
// 				if ( !routeBeforeEach ) {
// 					next($route);
// 					return;
// 				}
// 				const from = $route.routeConfig;
// 				const to = route;
// 				routeBeforeEach({ next, from, to });
// 			});
// 		}
// 		// 每个页面中路由进入之后钩子
// 		handleRouteAfterEach (): void  {
// 			const {$route, route} = this.props;
// 			const { routeAfterEach } = history;
// 			if ( !routeAfterEach ) return;
// 			const from = $route.routeConfig;
// 			const to = route;
// 			routeAfterEach({ from, to });
// 		}

// 		setCurrentRoute (): void {
// 			const {$setRoute, match, route} = this.props;
// 			$setRoute({
// 				fullPathname: window.location.href,
// 				pathname: history.location.pathname,
// 				query: history.getQuery(),
// 				params: match.params,
//         routeConfig: route,
//         state: history.location.state
// 			});
// 		} 
//     render() {
//       const C = this.state.component;
//       return C ? <C {...this.props} /> : null;
//     }
//   }

//   return Connect(AsyncComponent);
// }

