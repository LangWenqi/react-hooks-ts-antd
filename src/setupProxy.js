const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/api', { 
		target: 'http://192.168.xxx.xx:xxxx',
		changeOrigin: true,
		onProxyReq: (proxyReq,req,res) => {
			proxyReq.setHeader('cookie', 'PHPSESSID=vvitdm1njqgdbi3bqevrm8sgi8')
		},
	}));
};
