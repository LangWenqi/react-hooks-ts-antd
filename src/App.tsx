import React, { FunctionComponent, ReactElement }  from 'react';
import {Provider} from 'react-redux';
import store from '@/store'; 
import Router from '@/router';
import moment from 'moment';
import 'moment/locale/zh-cn';
import history from '@/history';
import './styles/mixin.scss'
import './styles/variable.scss'
import './styles/base.scss';
import './styles/antd.scss';
import './styles/flex.scss';
import { IrouterBeforeEach, IrouterAfterEach } from '@/config/typings';

moment.locale('zh-cn');
history.routerBeforeEach = ({ next, from, to }: IrouterBeforeEach):void => {
	console.log(from.pathname, to.pathname);
	next();
};
history.routerAfterEach = ({ from ,to }: IrouterAfterEach): void => {
	console.log('routerAfterEach', from.pathname, to.pathname);
};

const App: FunctionComponent = (): ReactElement => {
  return (
    <Provider store={store}>
			<Router/>
		</Provider>
  );
}

export default App;
