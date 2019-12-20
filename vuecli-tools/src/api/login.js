/**
 * 登录模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块，转化后，axios的content-type会被设置为form-data，否则是json

const login = {
    // 验证token是否过期
    validate () {
        return axios.get(`${base.local}/validate`)
    },
    toLogin ({username, password}) {
        console.log(axios.post);
        return axios.post(`${base.local}/login`, {username, password})
    }
}

export default login;