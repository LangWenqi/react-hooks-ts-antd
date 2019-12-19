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
export const set = function(target, paths=[], value, options = {}) {
  if (options === true) {
    options = { assign: true };
  }
  let {assign} = options;
    paths = Array.isArray(paths) ? paths : ('' + paths).split('.');
  let targetType = getType(target),
      valueType = getType(value),
      length = paths.length;
  if (!length) {
      return assign && targetType === 'object' && valueType === 'object'
      ? Object.assign({}, target, value)
      : value;
  }
  let nextPath = paths.shift();
  target = clone(target);
  if (target === undefined && options.autoCreated) {
    target = {};
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
export const get = function(target, paths=[]) {
  if (!target) return;
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
export const splice = function(data, index, howMany = 1, paths=[],  ...args) {
  let list = get(data, paths);
  if (!Array.isArray(list)) {
    return list;
  }
  list = list.slice();
  list.splice(index, howMany, ...args);
  return set(data, paths, list, true);
};
/**
 * @author: langwenqi
 * @describe: set state async(need to insert in React Component)
 * @param {state} React Component state
 * @return {Promise} the result
 */
export const setStateAsync = function(state) {
    return new Promise((resolve) => {
        this.setState(state, resolve);
    });
};
