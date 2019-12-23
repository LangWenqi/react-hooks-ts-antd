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
		<Layout className={ClassNames('index__Layout__outer')}>
			<HeaderBar/>
			<Layout className={ClassNames('index__Layout__inner')}>
				<LeftMenuSider/>
				<Content>
					{ props.children }
				</Content>
			</Layout>
		</Layout>
	);
}

export default Connect(Index);