// 左侧菜单 配置信息
import { ImenuInterface } from './typings';
export const mapMenu: ImenuInterface[] = [
	{
		name: 'parent1',
		module: 'module1',
		routes: [
			{
				name: 'child1',
				module: 'module1',
				select: 'home',
				path: '/home'
			}
		]
	}
];