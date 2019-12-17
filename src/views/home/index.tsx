import React, { FunctionComponent, ReactElement } from 'react';
import Connect, { IReduxProps } from './redux';
interface Iprops extends IReduxProps {
	[propName: string]: any;
}
const Home: FunctionComponent<Iprops> = (props: Iprops): ReactElement => {
  return (
		<div>
			sadfdsaf
		</div>
	);
}

export default Connect(Home);