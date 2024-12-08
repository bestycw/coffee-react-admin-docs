---
title: 请求配置
article: false
date: 2024-12-08
permalink: /docs/guide/request
---
 ## Mock
平台配置了Mock的方法，可以方便的进行前后端分离开发。并可以通过环境变量来控制是否开启Mock

::: details 点击查看

```ts
// .env.development
VITE_USE_MOCK=true
```
:::

Mock请求的方法

::: details `Get`方法
```ts
Mock.mock('/api/auth/info', 'get', (options: any) => {
    return {
        code: 200,
        message: 'success',
        data: {
            name: 'admin',
        },
    };
});
```
:::

::: details `Post`方法
```ts
Mock.mock('/api/auth/login', 'post', (options: any) => {
    return {
        code: 200,
        message: 'success',
        data: {
            token: '1234567890',
        },
    };
});
```
:::


## 请求设置

平台分别封装了`Axios`、`Fetch`、`WebSocket`三种请求方式，并内置了丰富的功能。默认采用`Axios`请求。

### Axios和Fetch
* 支持`Get`、`Post`、`Put`、`Delete`四种请求方式
* 支持`FormData`、`Json`、`Urlencoded`三种请求格式
* 支持`拦截器`、`超时`、`取消请求`、`请求重试`等功能的设置
* 支持`响应拦截`、`错误重定向`、`错误信息提示`等功能
* 支持 `axios`和`fetch`下载进度监控和并发请求
* 支持 `fetch` 上传进度监控
* 支持 `fetch` 流式传输

::: details `Get`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    const response = await api.get('/api/test', {
        params: {
            name: 'admin',
        },
    });
```
:::

::: details `Post`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    const response = await api.post('/api/test', {
        data: {
            name: 'admin',
        },
    });
```
:::

::: details `Put`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    const response = await api.put('/api/test', {
        data: {
            name: 'admin',
        },
    });
```
:::

::: details `Delete`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    const response = await api.delete('/api/test', {
        params: {
            name: 'admin',
        },
    });
```
:::

::: details `请求重试`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    const response = await api.get('/api/test-retry', {
    retry: 3,
    retryDelay: 1000
    });
```
:::

::: details `上传`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    await api.upload('/api/upload', formData, {
        onUploadProgress: (progress: number) => {
            const percent = Math.round(progress * 100);
            if (progress === 0) {
              message.loading({ content: '准备上传...', key: 'Upload' });
            } else {
              message.loading({ 
                content: `上传进度 ${percent}%`, 
                key: 'Upload' 
              });
            }
          }
        });
```
:::

::: details `下载`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    await api.download('/api/download', {
        onDownloadProgress: (progress: number) => {
            const percent = Math.round(progress * 100);
        }
    });
```
:::

::: details `并发请求`方法
```ts
    const api = type === 'axios' ? axiosRequest : fetchRequest;
    await api.allLimit([
        api.get('/api/test1'),
        api.get('/api/test2')
    ], 2);
```
:::

::: details `流式传输`方法
```ts
    await fetchRequest.stream('/api/stream', {
        onMessage: (message: string) => {
            console.log(message);
        }
    });
```
:::

### WebSocket
* 支持`心跳检测`、`断线重连`、`消息重发`等功能
* 支持`消息队列`、`消息过滤`、`消息缓存`等功能




