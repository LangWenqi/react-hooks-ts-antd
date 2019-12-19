import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react';
import { Layout, Avatar, Menu, Icon, Dropdown, Button } from 'antd';


// scss cssModules使用方法
import IndexStyle from './styles/index.module.scss';
import classNames from 'classnames/bind';
const CassNames = classNames.bind(IndexStyle);
// scss 普通使用方法
// import IndexStyle from './styles/index.scss';
// import ClassNames from 'classnames';
// 放到className中
// ClassNames('container', { 'wrapper': true })

const { Header } = Layout;

interface Iprops {
	userInfo?: {
		user?: {
			picture?: string;
			[key: string]: any;
		}
		[key: string]: any;
	}
}
const HeaderBar: FunctionComponent<Iprops> = ({ userInfo = {} }: Iprops): ReactElement => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	useEffect(()=>{
		init();
	});
	const init = (): void => {

	}
	const handleLogout = (): void => {

	}
	
	const toggleCollapsed = (): void => {
		setCollapsed(!collapsed);
	}
	const menu = (
		<Menu>
			<Menu.Item key="0">
				<Button type="link" onClick={() => handleLogout}>
						退出
				</Button>
			</Menu.Item>          
		</Menu>
	);
	return (
		<Header style={{ background: '#fff', padding: 0 }}>
				<Dropdown overlay={menu}>
					<div className="header__dropdown">
						<Avatar src={userInfo.user? userInfo.user.picture: ''} />
						<span className="hearder-name">{ userInfo.user?  userInfo.user.name : '--' } </span> 
						<Icon type="down" />
					</div>
				</Dropdown>
		</Header>
	)
}

export default HeaderBar;