const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  // icldh8k88eqe4o1uolg0b9upaj
	// vvitdm1njqgdbi3bqevrm8sgi8
  app.use(proxy('/api', { 
		target: 'http://192.168.137.74:9401',
		changeOrigin: true,
		onProxyReq: (proxyReq,req,res) => {
			proxyReq.setHeader('cookie', 'PHPSESSID=vvitdm1njqgdbi3bqevrm8sgi8')
		},
	}));
};