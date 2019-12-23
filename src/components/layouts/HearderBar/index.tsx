import React, { FunctionComponent, ReactElement, useState, useEffect } from 'react';
import { Layout, Avatar, Menu, Icon, Dropdown, Button } from 'antd';


// scss cssModules使用方法
import IndexStyle from './styles/index.module.scss';
import classNames from 'classnames/bind';
const ClassNames = classNames.bind(IndexStyle);
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
		<Header className={ ClassNames('header__ant') }>
				<div className="flex flex-cross-center flex-main-justify">
					<div>react</div>
					<Dropdown overlay={menu}>
						<div className={ ClassNames('header__dropdown') }>
							<Avatar src={userInfo.user? userInfo.user.picture: ''} />
							<span className={ClassNames('header__user-name')}>{ userInfo.user?  userInfo.user.name : '--' } </span> 
							<Icon type="down" />
						</div>
					</Dropdown>
				</div>
				
		</Header>
	)
}

export default HeaderBar;