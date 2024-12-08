---
title: 路由配置
article: false
date: 2024-12-08
permalink: /docs/guide/router
---

因为本人懒，非常厌烦路由的重复配置，所以采用了约定式路由的方式，即：只要按照规定在`@page`目录下创建文件，就能自动生成菜单和路由。并且尽量开放最大的自由度，可以随意搭配。

## 目录结构
目录结构是约定式路由的关键。

```
@page
├── dashboard
│   └── index.tsx
├── about
│   └── about.tsx
├── user
│   ├── index.config.tsx
│   ├── profile
│   │   └── index.tsx
│   └── settings
│       └── settings.tsx
```
上面是目前支持的约定式路由的方式：
 1.page下面必须创建对应的`文件夹`，暂时不支持page下面的`文件`
 2.如果只有一级路由，则`index.config.tsx`可以省略。但文件名称必须是`index.tsx`或者和文件夹保持同名。
 3.如果多级路由，则需要创建`index.config.tsx`文件，该文件配置是父级路由的配置，如果没有，则默认使用文件夹的名称。子路由则符合上面的规则。
 4.在所有的`组件`和`index.config.tsx`中，需要导出如下的路由配置.
 5.文件夹下的`components`会被忽略，不会作为路由。


## 路由配置

```ts
interface RouteConfig {
  title?: string   //路由名称 
  icon?: ReactNode  //图标
  layout?: boolean //是否在layout中
  element?: ReactNode | LazyExoticComponent //组件
  roles?: string[] //权限角色
  sort?: number //排序
  hidden?: boolean //是否隐藏
  hiddenInMenu?: boolean //是否在菜单中隐藏
  // 可以添加更多配置项
}
```
例如：
```ts
function User() {
  return <div>用户管理</div>;
}
export const routeConfig = {
  title: '用户管理',
  icon: <UserOutlined />,
  layout: true,
} as RouteConfig;
```
如果没有这个配置文件，则会采用文件夹的名称作为路由名称。其余采用默认值。

## 常见疑问
1. 为什么没有重定向的功能？
   重定向功能已经内置，在生成路由的时候，已经对于需要重定向的地方增加了redirect属性。默认使用子路由中默认第一个带有`element`属性的组件。
   但是因为`react-router-dom`的限制，无法在`Route`中使用`redirect`属性，所以只能在`Route`外层包裹一层组件`AuthBoundary`，来实现重定向。
    * 根路径的重定向，会根据是否登录，自动重定向到登录页或者首页。
    * 子路径的重定向，会根据子路径的`redirect`属性进行重定向。

2. 为什么采用约定式路由？
    开头说过，因为懒！哈哈哈哈，主要是为了减少重复配置，提高开发效率。路由很多时候都是重复配置，所以采用约定式路由，可以减少很多重复配置。

3. 动态路由怎么配置
    实际意义上，这里的路由都是全量生成，因为是否是动态路由，前端都得有对应的页面去匹配。而动态路由主要的意义是权限，虽然没有动态路由，但是本身可以根据权限进行配置。具体配置见[权限管理](/docs/guide/permission)。

4. 如何配置404、登录页这种不在layout页面中的
    非常简单，只需要`layout=false`即可。


## 后续规划
现在是1.0版本，很多功能还不完善，后续会慢慢完善。
目前已知的需要假如的功能：
1. 不支持`pages`目录下的`文件`
2. 不支持`jsx`
3. 文件夹下`index.tsx`和`example.tsx`同时存在时，会不符合规则。
4. 还有什么规则，欢迎大家来提。
...