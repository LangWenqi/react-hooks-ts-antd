import Http from '@/utils/request';

// 示例列表
interface IgetAppList {
	// 添加接口限制
	[propName: string]: any;
}
export const getAppList = (params: IgetAppList): Promise<any> => {
	return Http({
		url: '/api/app/list',
		data: params
	});    
}
