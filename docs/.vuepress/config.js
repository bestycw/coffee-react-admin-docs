import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Coffee Admin',
  description: '一个现代化的开箱即用的 React 中后台管理系统模板',
  base: '/react-admin-antd/',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/logo.png',
    // repo: 'yourusername/react-admin-antd',
    docsDir: 'docs',
    editLink: true,
    sidebarDepth: 2,
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    searchPlaceholder: "快速搜索",

    // 导航栏配置
    navbar: [
      {
        text: '文档',
        link: '/docs/guide/introduction',
        children: [
          {
            text: '核心',
            link: '/docs/guide/introduction',
            children: [
              { text: "介绍", link: "/docs/guide/introduction" },
              { text: "快速开始", link: "/docs/guide/start" },
              { text: "目录结构", link: "/docs/guide/directory" },
              { text: "布局和主题", link: "/docs/guide/layout" },
              { text: "路由配置", link: "/docs/guide/router" },
              { text: "权限配置", link: "/docs/guide/permission" },
              { text: "请求配置", link: "/docs/guide/request" },
            ]
          },
          {
            text: '其他',
            link: '/docs/other/question',
            children: [
              { text: "常见问题", link: "/docs/other/question" },
            ]
          }

        ]
      },
      {
        text: '进阶服务',
        link: '/docs/advance/index',
      },

      {
        text: '赞助',
        link: '/docs/sponsor/sponsor'
      },
      // {
      //   text: 'GitHub',
      //   link: 'https://github.com/bestycw/react-admin-antd' ,
      // },
    ],

    // 侧边栏配置
    sidebar: {
      '/docs/guide/': [
        {
          text: '指南',
          children: [
            {
              text: '基础',
              // collapsible: true,
              children: [
                {
                  text: '介绍',
                  link: '/docs/guide/introduction',
                },
                {
                  text: '快速开始',
                  link: '/docs/guide/start',
                },
                {
                  text: '目录结构',
                  link: '/docs/guide/directory',
                },
                {
                  text: '布局和主题',
                  link: '/docs/guide/layout',
                },
                {
                  text: '路由配置',
                  link: '/docs/guide/router',
                },
                {
                  text: '权限配置',
                  link: '/docs/guide/permission',
                },
                {
                  text: '请求配置',
                  link: '/docs/guide/request',
                },

                // ... 其他文档
              ]
            },
            // 可以添加更多分组
          ]
        }
      ]
    },
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "coffee-admin", // 必需
      href: "https://github.com/bestycw", // 可选的
    },
  }),

})