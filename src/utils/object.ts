/**
 * @author: langwenqi
 * @describe: get type of data
 * @params:{all} data
 */

export function getType(data: any) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
/**
 * @author: langwenqi
 * @describe: shallow clone
 * @params:{Object or Array} data
 * @return: {all} the result
 */

export function clone(data: any) {
    const type = getType(data);
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
 */

export function deepClone(data: any) {
    const type = getType(data);
    if (type === 'array') {
        return data.map((el: any) => deepClone(el));
    } else if (type === 'object') {
        const obj: { [key: string]: any } = {};
        Object.keys(data).forEach((key: string) => {
            obj[key] = deepClone(data[key]);
        });
        return obj;
    }
    return data;
};
/**
 * @author: langwenqi
 * @describe: deep extend
 * @params:{Object or Array} obj1
 * @params:{Object or Array} obj2
 * @return:{Object or Array} the result
 */
export function deepExtend(obj1: any = {}, obj2: any = {}) {
    if (getType(obj1) === 'object' && getType(obj2) === 'object') {
        Object.keys(obj2).forEach((key: string) => {
            if (!obj1[key]) {
                obj1[key] = obj2[key];
            } else {
                obj1[key] = deepExtend(obj1[key], obj2[key]);
            }
        });
    } else if (getType(obj1) === 'array' && getType(obj2) === 'array') {
        obj1 = obj1.concat(obj2);
    } else {
        obj1 = obj2;
    }
    return obj1;
}
/**
 * @author: langwenqi
 * @describe: to judge if an object or an array is empty or not
 * @param {Object or Array} target
 * @return {Boolean} the result
 */

export function isEmpty(data: any) {
    const type = getType(data);
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
 */

export function isObjectArray(data: unknown) {
    return getType(data) === 'object' || getType(data) === 'array';
}
/**
 * @author: langwenqi
 * @describe: to judge if an object or an array is equal or not
 * @param {all} a
 * @param {all} a
 * @return {Boolean} the result
 */

export function isEqual(a: any, b: any) {
    if (getType(a) !== getType(b)) {
        return false;
    }
    if ((!isObjectArray(a)) && (!isObjectArray(b))) {
        return a === b;
    }
    const aProps = Object.keys(a);
    const bProps = Object.keys(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (const key of aProps) {
        if (isObjectArray(a[key]) && isObjectArray(b[key])) {
            if (!isEqual(a[key], b[key])) {
                return false;
            }
        } else if (a[key] !== b[key]) {
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
 */
interface QsInterface {
  stringify: (obj: { [key: string]: any }, ifEncode?: boolean) => string;
  parse: (str: string, ifDecode?: boolean) => { [key: string]: any };
}
interface ParamInterface  {
    [key: string]: any;
}

export const qs: QsInterface = {
    stringify(obj = {}, ifEncode = true) {
        return Object.keys(obj).map((el, index) => {
            return `${el}=${ifEncode ? encodeURIComponent(obj[el]) : obj[el]}`;
        }).join('&');
    },
    parse(str = '', ifDecode = true) {
        const param: ParamInterface = {};
        const arr = str ? str.split('&') : [];
        arr.forEach((el, index) => {
            param[el.split('=')[0]] = ifDecode ? decodeURIComponent(el.split('=')[1]) : el.split('=')[1];
        });
        return param;
    }
};

