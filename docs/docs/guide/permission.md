---
title: 权限管理
article: false
date: 2024-12-08
permalink: /docs/guide/permission
---

权限是后台管理系统的重点，所以在这块尽量做的完善、配置也简单。

## 权限配置

权限模型是依据`RBAC`模型，即`Role-Based Access Control`，角色访问控制。权限配置和[路由配置](/docs/guide/router)是息息相关的，

### 角色控制
每个用户都会设置一个`roles`属性，`roles`属性是一个数组，数组中每个元素都是一个角色。同时，在设置路由的时候，也会有个字段`roles`。当两者存在交集的时候，说明当前用户可以访问该路由。
例如：
 * 当前用户`roles`为`['admin']`，设置路由的时候，设置`roles: ['admin']`，则当前用户可以访问该路由。如果设置`roles: ['user']`，则当前用户也可以访问该路由。

注意：
 * 如果当前用户没有设置`roles`属性，则默认能访问所有没有配置`roles`的路由。

### 动态路由
这里提到动态路由，实际上是给用户设置了`dynamicRoutes`属性，`dynamicRoutes`属性是一个数组，数组中每个元素都是一个路由的`path`。当用户登录后，会根据`dynamicRoutes`属性，过滤路由。
例如：
 * 当前用户`dynamicRoutes`为`['/table'，'/table/basic']`，则当前用户只能访问`/table`和`/table/basic`路径。
注意：
 * `dynamicRoutes`默认值为`[/]`,表示的根路由，可以访问所有。
 * 与角色控制相辅相成，会先通过角色过滤一遍，然后在根据动态路由进行过滤。
其实说白了，动态路由需要考后台控制，这适合`角色较多，且角色经常变动的`场景。

### 按钮权限
现在按钮权限还未完全实现，基本功能已经实现。因为现在采用Antd的组件，秉着侵入性较小的原则，并没有重写组件。而且外层套一层`Permission`组件。
通过判断用户中的`permissions`属性，来决定按钮是否显示。
按钮权限的格式为`['router:roles:button']`，`router`为路由，`roles`为角色，`button`为按钮。
例如：
 * 当前用户`permissions`为`['table:admin:add']`，则当前用户可以访问`table`路径，admin角色可以访问`add`按钮。

注意：
 * 如果当前用户没有设置`permissions`属性或者默认`['*:*:*']`，则默认拥有所有权限。


## 后续规划
    权限这块非常重要，后续也需要仔细的打磨，尽量满足多种场景。目前已知需要做的：
    1. 按钮级别权限，感觉目前实现的有点冗余，在想一种更合理的实现方式
    2. 数据权限还未实现 ，可能更需要后端的配合
    

