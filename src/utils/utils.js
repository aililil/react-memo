import { LunerDate } from './enum';

/**
 * @description: 格式化get参数
 * @param {String} path 接口地址
 * @param {Object} data 参数对象
 * @return {String}
 */
export function formatGetParams(path, data) {
  if (!data) return path;
  const KVP = Object.keys(data).map(key => `${key}=${data[key]}`);
  return `${path}?${KVP.join('&')}`;
}

/**
 * @description: YYYYMM转换中文月份
 * @param {String} month
 * @return {String} 中文月份
 */
export function formatMonth(month) {}

/**
 * @description: YYYYMMDD转换阴历日期
 * @param {String} date
 * @return {String} 数字日期
 */
export function formatDate(date) {
  return date.slice(-2);
}

/**
 * @description: YYYYMMDD转换阴历日期
 * @param {String} date
 * @return {String} 中文月份
 */
export function formatLunarDate(date) {
  const numberDate = Number(date.slice(-2));
  return LunerDate[numberDate];
}

/**
 * @description: 格式化组件class
 * @param {*} classArry
 * @return {*}
 */
export function formatReactClass(classObj) {
  return mapObj(classObj, i =>
    Array.isArray(i) ? i.filter(i => i && i !== '').join(' ') : i
  );
}

/**
 * @description: map对象
 * @param {Object} Obj
 * @param {Function} callback should be returnable
 * @return {Object}
 */
export function mapObj(Obj, callback) {
  let res = {};
  Object.keys(Obj).forEach(i => (res[i] = callback(Obj[i])));
  return res;
}
