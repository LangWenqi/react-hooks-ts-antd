// 页面 路由 信息
import lazy from "@/middleware/AsyncComponent";
import { IrouterMapInterface } from '@/config/typings';
import { Icomponent } from '@/config/typings';
export const routerMap: IrouterMapInterface[] = [
		{
			pathname: '/',
			module: 'index',
			component: lazy(():Promise<Icomponent> => import('@/views/index')),
			redirect: '/',
			to: '/home',
			routes: [
				{
					pathname: '/home',
					exact: true,
					module: 'home',
					component: lazy(():Promise<Icomponent> => import('@/views/home'))
				}
			]
		},
];