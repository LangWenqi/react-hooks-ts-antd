// import React from 'react';
// import {inject, observer} from 'mobx-react';
// import { Layout } from 'antd';
// const { Content, Header } = Layout;

// @inject('$router')
// @observer

// class PageContainer extends React.Component {
//     render() {
// 				const {$route} = this.props.$router;
//         return (
//           <Layout>
//             <Header style={{ background: '#fff', padding: 0 }}>
//             </Header>
//             <Content style={{
//               margin: $route.routeConfig && $route.routeConfig.noMargin ? '0':'20px',
//               minHeight: 280,
//             }}
//             >
// 							<React.Fragment>
// 								{this.props.children}								
// 							</React.Fragment>
//             </Content>
//         </Layout>
//         );
//     }
// }
// export default PageContainer;