// import { RenderContext } from '@fmfe/genesis-core';
import axios from 'axios'
import api from './api'


/**
 * 封装一层 axios
 */
class Request {
    constructor(renderContext) {
        /**
         * 将当前渲染请求带过来的请求头，转发给 api 调用的请求
         */
        // const headersArr = [
        //     'http-host',
        //     'remote-host',
        //     'user-agent',
        //     'referer',
        //     'cookie',
        //     'x-forwarded-for',
        //     'authorization',
        //     'if-none-match',
        //     'accept-language',
        //     'lang',
        //     'origin'
        // ];
        // const headers = {};
        /**
         * 在服务器端是，将渲染上下文传递进来
         */
        // if (renderContext?.req) {
        //     headersArr.forEach((k) => {
        //         const v = renderContext?.req?.headers[k];
        //         if (v) {
        //             headers[k] = v;
        //         }
        //     });
        // }
        this._axios = axios.create({
            // headers: headers,
            // 在服务器端请求的时候，需要设置请求的基本地址
            baseURL: '/api',
            timeout: 5000,
            validateStatus: () => true
        });
		//http request 请求拦截器，有token值则配置上token值
        this._axios.interceptors.request.use(async (config) => {
            console.log(`${config.method} ${config.url}`);
            return config;
		}, 
		err => {
			return Promise.reject(err);
		});
		// http response 拦截器 ,拦截401状态（token过期），重新登录
		this._axios.interceptors.response.use(
			response => {
				if (response.data.is_succ) {
					return response.data;
				}
				// 报错TODO
				// message.info(response.data.message);
				if (response.data.code >= 100100 && response.data.code <= 100199) {
					// 去登录
					// setCookie({ name: "token", value: "", expires: -1 });
					// setCookie({ name: "user_code", value: "", expires: -1 });
					// router.push({
					// 	path: 'login'
					// })
					return response.data;
				}
				return response.data;
			},
			error => {
				console.log('网络错误，请稍后重试', error?.message);
				if (error.response) {
					switch (error.response.status) {
						case 401: // 返回 401 
		
					}
				}
				return Promise.reject(error.response.data) // 返回接口返回的错误信息
			}
		);
    }
    /**
     * 处理请求成功
     */
    // _success(res){
    //     return res.data;
    // }
    /**
     * 处理请求失败
     */
    // async _error(err){
    //     console.log('request error', err?.message);
    //     return {
    //         is_succ: false,
    //         message: '请求失败',
    //         data: null
    //     };
    // }

	_http(url, method, params = {}){
		if (method === 'GET') {
			return this._axios({
				method,
				url,
				params
			})
            // .then(this._success)
            // .catch(this._error);
		}
		return this._axios({
			method,
			url,
			data: params
		})
		// .then(this._success)
		// .catch(this._error);
	}



	// http请求
	/**
	* @name 登陆接口
	* @desc /api/v3/login
	* 
	* @params
	* @result
	* 
	*/
	// login(params) {
	// 	return this._http(api.loginApi, 'POST', params)
	// }
}



/**
 * 创建一个请求对象
 */
const createRequest = (renderContext) => {
    return new Request(renderContext);
};

export default createRequest