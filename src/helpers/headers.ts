import { isPlainObject } from './util'

// 如果Content-Type没有按照标准的写法书写时，进行标准化；
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  // 如果Content-Type书写规范，就不用做处理，返回规范输入的headers['Content-Type']
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    // data不为null并且没有设置Content-Type，就设置默认Content-Type为utf-8
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}
