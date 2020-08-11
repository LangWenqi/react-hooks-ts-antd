import {getType, clone} from '@/utils/object.js';

/**
 * @author: langwenqi
 * @describe: the immuable set
 * @param {Object or Array} target
 * @param {String or Array} pathes, like: "a.b.c" , ['a', 'b', 'c']
 * @param {variate} value
 * @param {Object} options
 * (1) options.assign
 *     when the new value and old value are both object,
 *     if the replace is false, program will set the new value by Object.assign({}, old, new)
 *     if the replace is true, program will just set the new value
 * (2) options.autoCreated
 *     if the autoCreated is true and it come to an inexistent path,
 *     it will create new object by pathes, to avoid the error
 */
export const set = (target: any, paths: Array<string | number> | string, value: any, options: { [key: string]: any } = {}) => {
  if (options) {
    options = { assign: true };
  }
  const { assign } = options;
  paths = Array.isArray(paths) ? paths : ('' + paths).split('.');
  const targetType = getType(target)
  const valueType = getType(value);
  const length = paths.length;
  if (!length) {
      return assign && targetType === 'object' && valueType === 'object'
      ? Object.assign({}, target, value)
      : value;
  }
  const nextPath = paths.shift();
  target = clone(target);
  if (target === undefined && options.autoCreated) {
    target = {};
  }
  if (!nextPath) {
    return target;
  }
  if (length === 1 && target[nextPath] === value) {
    return target;
  }
  target[nextPath] = set(target[nextPath], paths, value, options);
  return target;
};

/**
 * @author: langwenqi
 * @describe: the getter of value by path
 * avoid the error: Can't read property '**' of undefined
 * @param {Object or Array} target
 * @param {String or Array} pathes, like: "a.b.c" , ['a', 'b', 'c']
 */
export const get = (target: any, paths: Array<string | number> | string = []) => {
  if (!target) {
    return;
  };
  paths = Array.isArray(paths) ? paths : ('' + paths).split('.');
  paths.some((path) => {
    target = target[path];
    if (target === null || target === undefined) {
      return true;
  } else {
      return false;
    }
  });

  return target;
};

/**
 * @author: langwenqi
 * @describe: the immuable splice for array
 * @param {Object or Array} data
 * @param {String or Array} pathes, like: "a.b.c" , ['a', 'b', 'c']
 * @param {Parameters} args, the same as the splice's parameters
 * @return {Object} the new Object with change
 */
export const splice = (data: any, index: number, howMany: number = 1, paths: Array<string | number> | string = [],  ...args: any[]) => {
  let list = get(data, paths);
  if (!Array.isArray(list)) {
    return list;
  }
  list = list.slice();
  list.splice(index, howMany, ...args);
  return set(data, paths, list, {});
};
