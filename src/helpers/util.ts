// 要想区分对象、数组、函数、单纯使用typeof是不行的。
// 在JS中，可以通过Object.prototype.toString方法，判断某个对象之属于哪种内置类型。
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// 普通对象的判断，非Bolb，formData等
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
