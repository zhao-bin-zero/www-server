// import { NUMEMPTY } from "@/common/constant";
// 设置cookies
/**
 * @param 
        *      name: 名字
        *      value: 
        *      expires: 过期时间 单位天
        *      path
 */
export const setCookie = ({ name, value, expires = 30, domain = getDomain(), path = '/', secure }) => {
    let cookieText = "";
    cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);

    // expires
    let oDate = new Date();
    oDate.setTime(oDate.getTime() + (expires * 24 * 60 * 60 * 1000));
    cookieText += "; expires=" + oDate.toGMTString();

    // path
    cookieText += "; path=" + path;
    cookieText += "; domain=" + domain;
    if (secure) {
        cookieText += "; secure";
    }
    document.cookie = cookieText;
}
// 获取cookies
export const getCookie = (name) => {
    let cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = "";
    if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
// 删除cookie
export const delCookie = ({ name, domain, path, secure }) => {
    let value = '';
    let expires = Date(0)
    setCookie({ name, value, expires, domain, path, secure });
}

// 截取域名
// params
// p : 结果是否用于拼接
export const getDomain = (p) => {
    let domain;
    if (location.hostname === 'localhost') {
        if (p) {
            domain = '.beihaiwang123.com';
        } else {
            domain = 'localhost';
        }
    } else {
        domain = '.' + location.hostname.split('.').slice(-2).join('.');
    }
    // console.log(url.match(/\.\w+\.com/)[0]);
    return domain;
}
export const isLocation = (prefix) => {
    const domain = getDomain();
    if (domain === 'localhost') {
        return prefix
    }
    return ''
}

// 上传图片base64
// 返回64位imgCode
export const fileImgUploadBase = (e) => {
    return new Promise((reslove) => {
        // 利用fileReader对象获取file
        let file = e.target.files[0];
        let filesize = file.size;
        let filename = file.name;
        // 2,621,440   2M
        if (filesize > 2101440) {
            // 图片大于2MB
        }
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
            let imgcode = e.target.result;
            reslove(imgcode)
        };
    })
}
// 判断url是否含有参数
export const setUrlParam = (url) => {
    if (url.split('?').length == 1) {
        return url + '?'
    } else {
        return url + '&'
    }
}

/*获取Url查询字段 返回Object*/
export const getSearch = (loca, type) => {
    let search = () => location.href.indexOf('?') === -1 ? '' : location.href.slice(location.href.indexOf('?'));
    let url = loca || location.search || search();
    if (type === 'string') {
        return url
    }
    /*获取url中"?"符后的字串*/
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.split('?')[1];
        let strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

export const isAndriod = () => {
    let bIsAndroid = navigator.userAgent.toLowerCase().match(/android/i) == "android";
    return bIsAndroid;
}
export const isWindows = () => {
    let np = navigator.platform;
    return ((np == "Win32") || (np == "Windows"))
}
export const isIOS = () => {
    return /like Mac OS X/.test(navigator.userAgent);
}
export const isWX = () => {
    let userAgent = navigator.userAgent;
    return (/MicroMessenger/gi.test(userAgent));
}

export const isMobile = (req) => {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
}

/******获取当前网络类型****/
export const getNetworkType = () => {
    let network;
    let ua = navigator.userAgent;
    let networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other'; networkStr = networkStr.toLowerCase().replace('nettype/', '');

    switch (networkStr) {
        case 'wifi':
            network = 'WIFI';
            break;
        case '4g':
            network = '4G';
            break;
        case '3g':
            network = '3G';
            break;
        case '3gnet':
            network = '3G';
            break;
        case '2g':
            network = '2G';
            break;
        default:
            network = '其他';
    }
    return network;
}

// 判断浏览器
export const browser = () => {
    let b_version = navigator.appVersion;
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isOpera = userAgent.indexOf("Opera") > -1;
    //判断是否Opera浏览器
    if (isOpera) {
        return "Opera";
    }
    //判断是否Firefox浏览器
    else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    }
    //判断是否chorme浏览器
    else if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    //判断是否Safari浏览器
    else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    //判断是否IE浏览器
    else if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }
    //判断是否Edge浏览器
    else if (userAgent.indexOf("Trident") > -1) {
        return "Edge";
    }
    else if (userAgent.indexOf('UCBrowser') > -1) {
        return ("uc");
    } else {
        return "暂无抓取";
    }
}

//js 加法计算
//调用：accAdd(arg1,arg2)
//返回值：arg1加arg2的精确结果
export const accAdd = (arg1, arg2) => {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return +((arg1 * m + arg2 * m) / m).toFixed(Math.max(r1, r2));
}

//js 减法计算
//调用：subtr(arg1,arg2)
//返回值：arg1减arg2的精确结果
export const subtr = (arg1, arg2) => {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return +((arg1 * m - arg2 * m) / m).toFixed(Math.max(r1, r2));
}

//js 乘法函数
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
export const accMul = (arg1, arg2) => {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

//js 除法函数
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
export const accDiv = (arg1, arg2) => {
    let t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1);
}

export const secondTimestamp = (date) => {
    if (date) {
        return Math.round(new Date(date) / 1000)
    } else {
        return Math.round(new Date() / 1000)
    }
}

//js 余数函数
//调用：accRem(arg1,arg2)
//返回值：arg1%arg2的精确结果
export const accRem = (arg1, arg2) => {
    let t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return ((r1 * Math.pow(10, t2)) % (r2 * Math.pow(10, t1))) / Math.pow(10, t2 + t1);
}


// export const zeroToFixed = (num, digits) => {
//     if (typeof num == 'number' && !isNaN(num)) {
//         return num.toFixed(digits)
//     } else {
//         return NUMEMPTY
//     }
// }
// 格式化时间本项目使用moment，原因ant翻译依赖moment
// const padLeftZero = (str) => {
//     return ('00' + str).substr(str.length)
// }
// export const formatDate = (date, fmt) => {
//     if (/(y+)/.test(fmt)) {
//         fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//     }
//     let o = {
//         'M+': date.getMonth() + 1,
//         'd+': date.getDate(),
//         'h+': date.getHours(),
//         'm+': date.getMinutes(),
//         's+': date.getSeconds()
//     }
//     for (let k in o) {
//         if (new RegExp(`(${k})`).test(fmt)) {
//             let str = o[k] + ''
//             fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
//         }
//     }
//     return fmt
// }

//Guid
export const new_guid = () => {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}


// 深拷贝
export const deepCopy = (obj) => {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]);   //递归复制
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

// 对象合并
// @params
// deep   是否深复制
// {}...    要被合并的对象
export const extend = function () {
    let options,          //目标对象，指向参数
        name,             //目标对象中的属性(键)
        src,              //源对象的属性值（值）
        copy,             //目标对象的属性值
        copyIsArray,      //判断属性值是否为数组（布尔值）
        clone,            //源对象的属性值（值）
        target = arguments[0] || {},//源对象
        i = 1,
        length = arguments.length,//参数数量
        deep = false;     //是否深度合并，默认false

    // 处理深拷贝
    if (typeof target === "boolean") {
        deep = target;

        //源对象指向第二个参数， 遍历时跳过第一个参数
        target = arguments[i] || {};
        i++;
    }
    // Handle case when target is a string or something (possible in deep copy)
    // 当源对象为字符串或其他非基础数据类型时执行（此时可能在深拷贝过程中）
    if (typeof target !== "object" && Object.prototype.toString.call(target) != "[object Function]") {
        target = {};
    }

    // 如果只传递一个参数，则扩展到本身。此时为源对象
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {

        // 程序不处理 null或undefined 参数
        if ((options = arguments[i]) != null) {

            // 遍历目标对象
            for (name in options) {
                src = target[name];
                copy = options[name];

                // 防止无限循环
                if (target === copy) {
                    continue;
                }

                // 目标对象的属性值若为 Object 或 Array ，进行递归 
                if (deep && copy && (Object.prototype.toString.call(copy) === '[object Object]' ||
                    (copyIsArray = Array.isArray(copy)))) {

                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];

                    } else {
                        clone = src && Object.prototype.toString.call(src) === '[object Object]' ? src : {};
                    }

                    // 递归遍历
                    target[name] = extend(deep, clone, copy);

                    // 若为基础数据类型且不为undefined,赋值即可
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    // 返回修改后的源对象，若不想修改传入的对象，可以把 {} 作为源对象传入
    return target;
};


// 复制text到剪切板
export const copyText = (text) => {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = 'fixed'
    textArea.style.background = 'transparent';
    textArea.style.boxShadow = 'none';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        let successful = document.execCommand('copy');
        let msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
        console.log(msg);
    } catch (err) {
        console.log('该浏览器不支持点击复制到剪贴板,请手动复制');
    }

    document.body.removeChild(textArea);
}


/* eslint-disable */
//native和h5通讯
export const callNative = (oAction) => {
    let sAction = JSON.stringify(oAction);
    //IOS和Android均会在页面写入该对象。只是调用方法略不同
    if (isIOS()) {
        TigerwitNative(sAction);
    } else {
        TigerwitNative.jsCall(sAction);
    }
    return true;
}

//第三方native和h5通讯
export const openThirdNative = (oAction) => {
    try {
        let sAction = JSON.stringify(oAction);
        //IOS和Android均会在页面写入该对象。只是调用方法略不同
        if (isIOS()) {
            CallThirdNative(sAction);
        } else {
            CallThirdNative.jsCall(sAction);
        }
        return true;
    } catch (e) {
        return false;
    }

}
/* eslint-enable */

// 通知app未登录
export const toLogin = () => {
    setTimeout(function () {
        try {
            callNative({
                type: "login"
            });
        } catch (e) { }
        try {
            openThirdNative({
                type: "login"
            });
        } catch (e) { }
    }, 1000);
}




//检测 Demo or Live
export const isLive = () => {
    if (/localhost|dev|demo/ig.test(location.hostname)) {
        return false;
    } else {
        return true;
    }
}


// 分享
// 分享到新浪微博
// {
//     url: url || location.href,
//     /*分享地址(可选)*/
//     type: '3',
//     count: '1',
//     /** 是否显示分享数，1显示(可选)*/
//     appkey: '',
//     /** 您申请的应用appkey,显示分享来源(可选)*/
//     title: title,
//     /** 分享的文字内容(可选，默认为所在页面的title)*/
//     pic: pic || '',
//     /**分享图片的路径(可选)*/
//     ralateUid: '',
//     /**关联用户的UID，分享微博会@该用户(可选)*/
//     rnd: new Date().valueOf()
// }
export const shareToSinaWeiBo = (params) => {
    params = {
        url: location.href,
        /*分享地址(可选)*/
        type: '3',
        count: '1',
        /** 是否显示分享数，1显示(可选)*/
        appkey: '',
        /** 您申请的应用appkey,显示分享来源(可选)*/
        title: '',
        /** 分享的文字内容(可选，默认为所在页面的title)*/
        pic: '',
        /**分享图片的路径(可选)*/
        ralateUid: '',
        /**关联用户的UID，分享微博会@该用户(可选)*/
        rnd: new Date().valueOf(),
        ...params
    }
    var temp = [];
    for (var p in params) {
        temp.push(p + '=' + encodeURIComponent(params[p] || ''))
    }
    var targetUrl = 'http://service.weibo.com/share/share.php?' + temp.join('&');
    window.open(targetUrl, 'sinaweibo', 'height=800, width=800');
}

//   分享到QQ
// {
//     url: url || location.href,
//     /*分享地址*/
//     desc: '',
//     /*分享理由(可选)*/
//     title: title || '',
//     /*分享标题(可选)*/
//     summary: '',
//     /*分享描述(可选)*/
//     pics: pic || '',
//     /*分享图片(可选)*/
//     flash: '',
//     /*视频地址(可选)*/
//     site: '' /*分享来源 (可选) */
// }
export const shareToQQ = (params) => {
    params = {
        url: location.href,
        /*分享地址*/
        desc: '',
        /*分享理由(可选)*/
        title: '',
        /*分享标题(可选)*/
        summary: '',
        /*分享描述(可选)*/
        pics: '',
        /*分享图片(可选)*/
        flash: '',
        /*视频地址(可选)*/
        site: '', /*分享来源 (可选) */
        ...params
    }
    var s = [];
    for (var i in params) {
        s.push(i + '=' + encodeURIComponent(params[i] || ''));
    }
    var targetUrl = "https://connect.qq.com/widget/shareqq/index.html?" + s.join('&');
    window.open(targetUrl, '_blank', 'height=520, width=720');
}

//   分享到qq空间
// const params = {
//     url: url || location.href,
//     /*分享地址(可选)*/
//     desc: '',
//     /*分享理由(可选)*/
//     title: title || '',
//     /*分享标题(可选)*/
//     summary: '',
//     /*分享描述(可选)*/
//     pics: pic || '',
//     /*分享图片(可选)*/
//     flash: '',
//     /*视频地址(可选)*/
//     site: '' /*分享来源 (可选) */
// };
export const shareToQZon = (params) => {
    params = {
        url: location.href,
        /*分享地址(可选)*/
        desc: '',
        /*分享理由(可选)*/
        title: '',
        /*分享标题(可选)*/
        summary: '',
        /*分享描述(可选)*/
        pics: '',
        /*分享图片(可选)*/
        flash: '',
        /*视频地址(可选)*/
        site: '', /*分享来源 (可选) */
        ...params
    }
    var temp = [];
    for (var p in params) {
        temp.push(p + '=' + encodeURIComponent(params[p] || ''))
    }
    var targetUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + temp.join('&');
    window.open(targetUrl, 'sinaweibo', 'height=800, width=800');
}
//   分享到微信
// QRCode.toDataURL(location.href, {
//     width: '100',
//     scale: 1
// })
//     .then(url => {
//         $('#shareToWx').find('img').prop('src', url)
//     })
//     .catch(err => {
//         console.error(err)
//     })


