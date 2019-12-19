import React, { FunctionComponent, ReactElement } from 'react';
import Connect, { IReduxProps } from '@/views/home/redux';
interface Iprops extends IReduxProps {
	[key: string]: any;
}

const Home: FunctionComponent<Iprops> = (props: Iprops): any => {
  return (
		<div>

		</div>
	);
}

export default Connect(Home);