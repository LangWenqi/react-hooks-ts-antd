import React, { ReactElement, Fragment, FunctionComponent } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '@/history';
import { routerMap } from '@/router/routes';
import { IrouterMapInterface } from '@/config/typings';
// RouteComponentProps

const RouteWithSubRoutes = (route: any): ReactElement => (
	<Fragment>
		<Route exact={route.exact}
			path={route.pathname}
				render={props => (
					<route.component {...props} route={{ ...route }} routes={ route.routes }>
						<Fragment>
							{route.routes && route.routes.length > 0 
							?<CreateRouter routes={route.routes} />	
							: null}
							{route.redirect ? <Redirect from={ route.redirect } to={ route.to }></Redirect> : null}
						</Fragment>	
					</route.component>
				)}
		/>
	</Fragment>
);

// const RedirectComponent = ({routes}: { routes:routerMapInterface[] }) =>{
// 	const redirectIndex = routes.findIndex((route:routerMapInterface) => route.redirect);
// 	if (redirectIndex > -1){
// 		return <Redirect from={routes[redirectIndex].redirect} to={routes[redirectIndex].to}></Redirect>;
// 	}else {
// 		return null;
// 	}
// };

const CreateRouter = ({ routes }: { routes: IrouterMapInterface[] }): ReactElement => {
	return (<Switch>
							{routes.map((route: IrouterMapInterface, i: number) =>{
									// return (!route.redirect?<RouteWithSubRoutes key={i} {...route}/>:null);
									return (<RouteWithSubRoutes key={i} { ...route }/>)
							})};
							{/* <RedirectComponent routes={ routes }/> */}
					</Switch>);
};

const Component: FunctionComponent = (): ReactElement => {
    return (
			<Router history={ history }>
					<CreateRouter routes={ routerMap }/>
			</Router>
		);
}
export default Component;