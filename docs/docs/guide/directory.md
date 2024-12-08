---
title: 目录结构
article: false
date: 2024-12-06
permalink: /docs/guide/directory
---

[完整版](https://github.com/bestycw/react-admin-antd)目录结构说明:

```
├── .env.*                # 环境变量配置文件
│   ├── .env             # 基础环境变量
│   ├── .env.development # 开发环境变量
│   ├── .env.production  # 生产环境变量
│   └── .env.test        # 测试环境变量
├── mock                 # Mock 数据和接口
│   ├── auth.ts         # 认证相关接口
│   ├── role.ts         # 角色权限接口
│   ├── user.ts         # 用户相关接口
│   └── index.ts        # Mock 配置入口
├── public              # 静态资源
│   └── logo.png        # 系统 Logo
├── scripts             # 构建脚本
│   └── build.sh        # 构建脚本
├── src                 # 源代码
│   ├── assets         # 静态资源
│   │   ├── icons     # 图标资源
│   │   └── images    # 图片资源
│   ├── components     # 公共组件
│   │   ├── AuthBoundary     # 权限边界组件
│   │   ├── AvatarUpload     # 头像上传组件
│   │   ├── Captcha          # 验证码组件
│   │   └── CodeEditor      # 代码编辑器组件
│   ├── hooks          # 自定义 Hooks
│   ├── layout         # 布局组件
│   │   ├── components       # 布局相关组件
│   │   │   ├── Header      # 顶部导航
│   │   │   ├── Menu        # 菜单组件
│   │   │   └── Tab         # 标签页组件
│   │   └── index.tsx        # 布局入口
│   ├── router         # 路由配置
│   │   ├── generator    # 路由生成器
│   │   └── index.tsx    # 路由入口
│   ├── services       # API 服务
│   │   ├── auth.ts         # 认证服务
│   │   └── user.ts         # 用户服务
│   ├── store          # 状态管理
│   │   ├── modules         # 状态模块
│   │   │   ├── user.ts     # 用户状态
│   │   │   ├── menu.ts     # 菜单状态
│   │   │   └── config.ts   # 配置状态
│   │   └── index.ts        # 状态管理入口
│   ├── styles         # 全局样式
│   │   ├── theme.css      # 主题样式
│   │   └── antd-override.css  # Ant Design 样式覆盖
│   ├── types          # TypeScript 类型定义
│   │   ├── api.d.ts        # API 接口类型
│   │   ├── store.d.ts      # 状态管理类型
│   │   └── route.d.ts      # 路由类型
│   ├── utils          # 工具函数
│   │   ├── ...         # 其他工具
│   │   ├── request     # 请求工具
│   │   └── storage      # 存储工具
│   ├── pages          # 页面组件
│   │   ├── dashboard       # 仪表盘页面
│   │   ├── login          # 登录页面
│   │   └── system         # 系统管理页面
│   ├── App.css        # 应用样式
│   ├── App.tsx        # 应用入口组件
│   ├── index.css      # 全局样式
│   └── main.tsx       # 应用入口文件
├── .eslintrc.js       # ESLint 配置
├── .gitignore         # Git 忽略配置
├── index.html         # HTML 模板
├── package.json       # 项目依赖配置
├── postcss.config.js  # PostCSS 配置
├── README.md          # 项目说明文档
├── tailwind.config.ts # TailwindCSS 配置
├── tsconfig.json      # TypeScript 配置
└── vite.config.ts     # Vite 配置

```

## 目录说明

### 1. 环境配置文件 (.env.*)

- `.env`: 基础环境变量配置
- `.env.development`: 开发环境特定配置
- `.env.production`: 生产环境特定配置
- `.env.test`: 测试环境特定配置

### 2. Mock 数据 (mock/)

用于本地开发时模拟后端接口:
- `auth.ts`: 处理登录、注册等认证相关接口
- `role.ts`: 处理角色和权限相关接口
- `user.ts`: 处理用户信息相关接口

### 3. 源代码 (src/)

#### 核心文件

- `App.tsx`: 应用根组件
  - 全局配置提供者(ConfigProvider)
  - 路由配置和权限过滤
  - 全局状态管理集成
  - 主题配置

- `main.tsx`: 应用入口文件
  - React 应用初始化
  - 全局样式引入
  - 状态管理初始化
  - 国际化配置

#### Layout 布局 (layout/)

- 布局组件
  - 顶部导航栏
  - 侧边菜单栏
  - 页面主体区域
  - 页脚

- 布局功能
  - 响应式布局适配
  - 菜单折叠控制
  - 主题切换
  - 面包屑导航

#### 状态管理 (store/)

- 状态模块
  - `UserStore`: 用户信息和权限管理
  - `MenuStore`: 菜单和路由状态管理
  - `ConfigStore`: 全局配置和主题管理

#### 服务层 (services/)

- API 服务封装
  - 统一请求处理
  - 响应拦截
  - 错误处理
  - 权限验证

#### 工具函数 (utils/)

- 通用工具
  - 权限控制
  - 数据处理
  - 缓存管理
  - 请求封装

#### 类型定义 (types/)

- TypeScript 类型
  - 路由类型定义
  - 组件 Props 类型
  - API 接口类型
  - 状态管理类型

### 4. 构建和配置文件

- `scripts/build.sh`: 构建脚本,支持不同环境的构建
- `.eslintrc.js`: ESLint 代码规范配置
- `postcss.config.js`: PostCSS 样式处理配置
- `tsconfig.json`: TypeScript 编译配置

### 5. 项目文档

- `README.md`: 项目说明文档
  - 项目介绍
  - 开发指南
  - 部署说明

## 特点

1. 采用 TypeScript 开发,提供完整的类型支持

2. 使用 React 18 + Ant Design 5.0 构建现代化界面

3. 完善的权限管理系统
   - 路由级别权限控制
   - 组件级别权限控制
   - 动态路由

4. 灵活的环境配置
   - 支持开发、测试、生产多环境
   - 环境变量隔离

5. Mock 数据支持
   - 本地开发不依赖后端
   - 接口数据模拟

6. 组件化开发
   - 公共组件封装
   - 业务组件复用

7. 工程化支持
   - ESLint 代码规范
   - PostCSS 样式处理
   - 自动化构建脚本
```
