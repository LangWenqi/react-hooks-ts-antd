import React, { FunctionComponent, ReactElement, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Connect, { IReduxProps } from '@/views/index/redux';
import { Layout } from 'antd';
import HeaderBar from '@/components/layouts/HearderBar';
import LeftMenuSider from '@/components/layouts/LeftMenuSider';
import IndexStyle from './styles/index.module.scss';
import classNames from 'classnames/bind';
const ClassNames = classNames.bind(IndexStyle);
const { Content } = Layout;
interface Iprops extends IReduxProps {
	[key: string]: any;
}
const Index: FunctionComponent<Iprops> = (props: Iprops): ReactElement => {
	
  return (
		<div>
			<HeaderBar/>
			<Layout className={ClassNames('index__Layout__out')}>
				<Content>
					<Layout>
						<LeftMenuSider/>
						{ props.children }
					</Layout>
				</Content>
			</Layout>
		</div>
	);
}

export default Connect(Index);