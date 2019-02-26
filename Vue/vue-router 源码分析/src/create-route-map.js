/* @flow */

import Regexp from 'path-to-regexp'
import { cleanPath } from './util/path'
import { assert, warn } from './util/warn'

export function createRouteMap (
  routes: Array<RouteConfig>,
  oldPathList?: Array<string>,
  oldPathMap?: Dictionary<RouteRecord>,
  oldNameMap?: Dictionary<RouteRecord>
): {
  pathList: Array<string>;
  pathMap: Dictionary<RouteRecord>;
  nameMap: Dictionary<RouteRecord>;
} {
  // the path list is used to control path matching priority
  // 存放的是路由
  const pathList: Array<string> = oldPathList || []
  // $flow-disable-line
  // 存放路由与路由记录的映射 { path: recordRecord }
  const pathMap: Dictionary<RouteRecord> = oldPathMap || Object.create(null)
  // $flow-disable-line
  // 命名路由map
  const nameMap: Dictionary<RouteRecord> = oldNameMap || Object.create(null)

  // 为每一个路由配置添加路由记录，并添加到路由映射表中
  // 具体等等再看
  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, nameMap, route)
  })

  // ensure wildcard routes are always at the end
  // 确保通配符 * 在最后
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0])
      l--
      i--
    }
  }

  return {
    pathList,
    pathMap,
    nameMap
  }
}

function addRouteRecord (
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
  route: RouteConfig,
  parent?: RouteRecord,
  matchAs?: string
) {
  const { path, name } = route
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, `"path" is required in a route configuration.`)
    assert(
      typeof route.component !== 'string',
      `route config "component" for path: ${String(path || name)} cannot be a ` +
      `string id. Use an actual component instead.`
    )
  }

  const pathToRegexpOptions: PathToRegexpOptions = route.pathToRegexpOptions || {}
  // 格式化路径，获得标准的路径： /abc
  const normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  )

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive
  }

  // 初始化路由记录
  const record: RouteRecord = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  }

  // 如果有嵌套路由
  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(child => /^\/?$/.test(child.path))) {
        warn(
          false,
          `Named Route '${route.name}' has a default child route. ` +
          `When navigating to this named route (:to="{name: '${route.name}'"), ` +
          `the default child route will not be rendered. Remove the name from ` +
          `this route and use the name of the default child route for named ` +
          `links instead.`
        )
      }
    }
    // 为每个嵌套的子路由创建路由记录
    route.children.forEach(child => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
    })
  }

  // 如果有别名
  if (route.alias !== undefined) {
    // alias 可以是 String | Array
    // 此时将它们都变为数组便于统一处理
    const aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias]

    // 为每一个别名都添加路由记录
    // 别名的话，是有个 matchAs 来获取它对应的原名路由
    // 比如 { path: '/a', alias: '/b' }
    // matchAs 就是指 '/a'
    // 而 aliasRoute 创建出的路由记录的 components 是木有的
    aliases.forEach(alias => {
      const aliasRoute = {
        path: alias,
        children: route.children
      }
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      )
    })
  }

  // 将路由记录添加到路由映射表中
  if (!pathMap[record.path]) {
    pathList.push(record.path)
    pathMap[record.path] = record
  }

  // 如果是命名路由
  if (name) {
    // 如果当前名字不存在
    if (!nameMap[name]) {
      // 添加到命名路由映射表
      nameMap[name] = record
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        `Duplicate named routes definition: ` +
        `{ name: "${name}", path: "${record.path}" }`
      )
    }
  }
}

function compileRouteRegex (path: string, pathToRegexpOptions: PathToRegexpOptions): RouteRegExp {
  const regex = Regexp(path, [], pathToRegexpOptions)
  if (process.env.NODE_ENV !== 'production') {
    const keys: any = Object.create(null)
    regex.keys.forEach(key => {
      warn(!keys[key.name], `Duplicate param keys in route with path: "${path}"`)
      keys[key.name] = true
    })
  }
  return regex
}

function normalizePath (path: string, parent?: RouteRecord, strict?: boolean): string {
  // 把最后一个斜杠 / 匹配掉
  // 比如： /abc/ => /abc
  if (!strict) path = path.replace(/\/$/, '')
  // 如果是以 / 开头，说明要以根路径为标准，就直接返回即可
  if (path[0] === '/') return path
  // 如果不是以 / 开头，说明是嵌套路由鸭
  // 但是如果又木有 parent，直接返回 path
  if (parent == null) return path
  // 嵌套路由，返回嵌套后的结果
  // 在这之前会先把双斜杠转为单斜杠： // => /
  return cleanPath(`${parent.path}/${path}`)
}
