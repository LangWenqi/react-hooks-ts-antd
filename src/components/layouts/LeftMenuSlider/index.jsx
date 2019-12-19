// import React, {Component} from 'react';
// import { Layout, Menu, Icon } from 'antd';
// import { mapMenu } from '@/config/menuConfig';
// import {inject, observer} from 'mobx-react';
// import '@/styles/base.scss';
// import history from '@/history';
// const { Sider } = Layout;
// @inject('$router')
// @observer

// class LeftMenuSlider extends Component {
// 		constructor(props){
// 			super(props);
// 			this.state = {
// 				collapsed: false
// 			};
// 		}
//     componentDidMount() {
//     }
// 		navToLink({path, key}) {
// 			history.replace(path);
// 		}
//     render() {
// 				const { routeConfig } = this.props.$router.$route;
// 				const { collapsed } = this.state;
//         return (
//             <Sider trigger={null} collapsible collapsed={ collapsed }>
//                 <div className="logo" >
//                     <Icon
//                     type='robot'
//                     />
//                     {!collapsed && <span>产品中心</span> }
//                 </div>
                
//                 <Menu theme="dark" mode="inline" selectedKeys={[routeConfig.module]}>
//                 {
//                     mapMenu.map((item) => {
//                         return (
//                             <Menu.Item key={item.key}>
//                                 <div onClick={this.navToLink.bind(this, item)} >       
//                                    <Icon type={item.icon} />
//                                     <span>{item.name}</span>
//                                 </div>  
//                             </Menu.Item>                           
//                         );
//                     })
//                 }
//                 </Menu>
//             </Sider>
//         );
//     }
// };

// export default LeftMenuSlider;