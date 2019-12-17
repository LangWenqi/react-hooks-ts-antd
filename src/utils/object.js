/**
 * @author: langwenqi
 * @describe: get type of data
 * @params:{all} data
 **/
export function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
/**
 * @author: langwenqi
 * @describe: shallow clone
 * @params:{Object or Array} data
 * @return: {all} the result
 **/
export function clone(data) {
    let type = getType(data);
    if (type === 'array') {
        return [].slice.call(data);
    }
    if (type === 'object') {
        return Object.assign({}, data);
    }
    return data;
}
/**
 * @author: langwenqi
 * @describe: deep clone
 * @params:{Object or Array} data
 * @return: {all} the result
 **/
export function deepClone(data = {}) {
    let type = getType(data);
    if (type === 'array') {
        return data.map(el=>deepClone(el));
    } else if (type === 'object') {
        let obj={};
        Object.keys(data).forEach(key=>{
            obj[key] = deepClone(data[key]);
        });
    }
    return data;
};
/**
 * @author: langwenqi
 * @describe: deep extend
 * @params:{Object or Array} obj1
 * @params:{Object or Array} obj2
 * @return:{Object or Array} the result
 **/
export function deepExtend(obj1 = {},obj2 = {}){
    if(getType(obj1) === 'object' && getType(obj2) === 'object'){
        Object.keys(obj2).forEach(key=>{
            if(!obj1[key]){
                obj1[key] = obj2[key];
            }else{
                obj1[key] = deepExtend(obj1[key],obj2[key]);
            }
        });
    }else if(getType(obj1) === 'array' && getType(obj2) === 'array'){
        obj1=obj1.concat(obj2);
    }else{
        obj1 = obj2;
    }
    return obj1;
}
/**
 * @author: langwenqi
 * @describe: to judge if an object or an array is empty or not
 * @param {Object or Array} target
 * @return {Boolean} the result
 **/
export function isEmpty(data) {
    let type = getType(data);
    if (type === 'object') {
        return !Object.keys(data).length;
    }
    if (type === 'array') {
        return !data.length;
    }
    return true;
}
/**
 * @author: langwenqi
 * @describe: to judge if an object or an array or not
 * @param {all} data
 * @return {Boolean} the result
 **/
export function isObjectArray (data) {
    return getType(data) === 'object'|| getType(data) === 'array';
}
/**
 * @author: langwenqi
 * @describe: to judge if an object or an array is equal or not
 * @param {all} a
 * @param {all} a
 * @return {Boolean} the result
 **/
export function isEqual(a, b) {
    if(getType(a) !== getType(b)){
        return false;
    }
    if((!isObjectArray(a)) && (!isObjectArray(b))){
        return a === b;
    }
    let aProps = Object.keys(a);
    let bProps = Object.keys(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (let key of aProps){
        if(isObjectArray(a[key]) && isObjectArray(b[key])){
            if(!isEqual(a[key],b[key])){
                return false;
            }
        }else if(a[key] !== b[key]){
            return false;
        }
    }
    return true;
}
/**
 * @author: langwenqi
 * @describe: stringify Object or parse Url
 * @params:{Object} stringify:obj,{String} parse:str
 * @return: {String} stringify:the result,{Object} parse:the result
 **/
export const qs = {
    stringify: function (obj = {}, ifEncode = true) {
        return Object.keys(obj).map((el, index) => {
            return `${el}=${ifEncode ? encodeURIComponent(obj[el]) : obj[el]}`;
        }).join('&');
    },
    parse: function (str = '', ifDecode = true) {
        let param = {};
        const arr = str ? str.split('&') : [];
        arr.forEach((el, index) => {
            param[el.split('=')[0]] = ifDecode ? decodeURIComponent(el.split('=')[1]) : el.split('=')[1];
        });
        return param;
    }
};
// Object.defineProperty(Object, 'is', {
//     value: function(x, y) {
//         if (x === y) {
//             //  针对 +0  不等于 -0 的情况
//             return x !== 0 || 1 / x === 1 / y;
//         }
//         //  针对 NaN 的情况
//         return x !== x && y !== y;
//     },
//     configurable: true,
//     enumerable: false,
//     writable: true
// });
