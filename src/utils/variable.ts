export const ACCESS_TOKEN = 'accessToken';
type ACCESS_TOKEN = typeof ACCESS_TOKEN;
export const BASE_URL = process.env.NODE_ENV === 'production' ? window.location.host : 'https://www.baidu.com';
type BASE_URL = typeof BASE_URL;