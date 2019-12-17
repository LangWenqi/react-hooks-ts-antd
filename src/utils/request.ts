import axios from 'axios';
// import { Message } from 'element-ui';
import { getType, qs } from '@/utils/object';
import { BASE_URL, ACCESS_TOKEN} from '@/utils/variable';
axios.interceptors.request.use(function (config) {
	return config;
}, function (error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
	if (getType(response) === 'object') {
		let res = response.data;
		return res;
	}
	return response;
}, function (error) {
	if (error && error.response && error.response.status === 401) {

	}
	return Promise.reject(error);
});

interface Iparams  {
	[propName: string]: any;
}

interface Iconfig  {
	[propName: string]: any;
}
function Http({
	url = '',
	data = {},
	method = 'get',
	type = 'json',
	fullPath = false,
	responseType = 'json'
}: Iparams) {
	let fullUrl = fullPath ? url : BASE_URL + url;
	
	let config: Iconfig = {
		method: method,
		url: fullUrl,
		responseType,
	};
	config.headers = {
		[ACCESS_TOKEN]: ''
	};
	if (method === 'get' || method === 'GET') {
		Object.assign(config, {
			params: data
		});
	} else {
		if (type === 'form') {
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
			Object.assign(config, {
				data: qs.stringify(data)
			});
		} else if (type === 'json') {
			config.headers['Content-Type'] = 'application/json';
			Object.assign(config, {
				data: data
			});
		} else if (type === 'formData') {
			let formData = new FormData();
			Object.keys(data).forEach((key: string):void => {
				formData.append(key, data[key]);
			});
			config.headers['Content-Type'] = 'multipart/form-data';
			Object.assign(config, {
				data: formData
			});
		} else if (type === 'oss') {
			config.headers['Content-Type'] = data.type;
			Object.assign(config, {
				data: data
			});
		}
	}
	return new Promise((resolve, reject) => {
		axios(config).then((response) => {
			resolve(response);
		}, (error) => {
			reject(error);
		}).catch((error) => {
			reject(error);
		});
	});
};
export default Http;