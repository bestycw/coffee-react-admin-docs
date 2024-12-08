export const redirects = JSON.parse("{\"/docs/advance/person.html\":\"/docs/advance/person\",\"/docs/guide/directory.html\":\"/docs/guide/directory\",\"/docs/guide/introduction.html\":\"/docs/guide/introduction\",\"/docs/guide/layout.html\":\"/docs/guide/layout\",\"/docs/guide/permission.html\":\"/docs/guide/permission\",\"/docs/guide/request.html\":\"/docs/guide/request\",\"/docs/guide/router.html\":\"/docs/guide/router\",\"/docs/guide/start.html\":\"/docs/guide/start\",\"/docs/other/question.html\":\"/docs/question/common\",\"/docs/sponsor/sponsor.html\":\"/docs/sponsor/sponsor\"}")

export const routes = Object.fromEntries([
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"React Admin Antd"} }],
  ["/docs/advance/business.html", { loader: () => import(/* webpackChunkName: "docs_advance_business.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/advance/business.html.js"), meta: {"title":""} }],
  ["/docs/advance/person", { loader: () => import(/* webpackChunkName: "docs_advance_person.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/advance/person.html.js"), meta: {"title":"赞助与合作"} }],
  ["/docs/guide/directory", { loader: () => import(/* webpackChunkName: "docs_guide_directory.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/directory.html.js"), meta: {"title":"目录结构"} }],
  ["/docs/guide/introduction", { loader: () => import(/* webpackChunkName: "docs_guide_introduction.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/introduction.html.js"), meta: {"title":"介绍"} }],
  ["/docs/guide/layout", { loader: () => import(/* webpackChunkName: "docs_guide_layout.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/layout.html.js"), meta: {"title":"布局和主题"} }],
  ["/docs/guide/permission", { loader: () => import(/* webpackChunkName: "docs_guide_permission.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/permission.html.js"), meta: {"title":"权限管理"} }],
  ["/docs/guide/request", { loader: () => import(/* webpackChunkName: "docs_guide_request.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/request.html.js"), meta: {"title":"请求配置"} }],
  ["/docs/guide/router", { loader: () => import(/* webpackChunkName: "docs_guide_router.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/router.html.js"), meta: {"title":"路由配置"} }],
  ["/docs/guide/start", { loader: () => import(/* webpackChunkName: "docs_guide_start.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/guide/start.html.js"), meta: {"title":"快速开始"} }],
  ["/docs/question/common", { loader: () => import(/* webpackChunkName: "docs_question_common.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/question/common.html.js"), meta: {"title":"常见问题"} }],
  ["/docs/sponsor/sponsor", { loader: () => import(/* webpackChunkName: "docs_sponsor_sponsor.html" */"/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/docs/.vuepress/.temp/pages/docs/sponsor/sponsor.html.js"), meta: {"title":"赞助与合作"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
