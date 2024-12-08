export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"repo\":\"yourusername/react-admin-antd\",\"docsDir\":\"docs\",\"editLink\":true,\"sidebarDepth\":2,\"searchMaxSuggestions\":10,\"searchPlaceholder\":\"快速搜索\",\"navbar\":[{\"text\":\"文档\",\"link\":\"/docs/guide/introduction\",\"children\":[{\"text\":\"核心\",\"link\":\"/docs/guide/introduction\",\"children\":[{\"text\":\"介绍\",\"link\":\"/docs/guide/introduction\"},{\"text\":\"快速开始\",\"link\":\"/docs/guide/start\"},{\"text\":\"目录结构\",\"link\":\"/docs/guide/directory\"},{\"text\":\"布局和主题\",\"link\":\"/docs/guide/layout\"},{\"text\":\"路由配置\",\"link\":\"/docs/guide/router\"},{\"text\":\"权限配置\",\"link\":\"/docs/guide/permission\"},{\"text\":\"请求配置\",\"link\":\"/docs/guide/request\"}]},{\"text\":\"其他\",\"link\":\"/docs/other/question\",\"children\":[{\"text\":\"常见问题\",\"link\":\"/docs/other/question\"}]}]},{\"text\":\"进阶服务\",\"link\":\"/docs/advance/index\"},{\"text\":\"赞助\",\"link\":\"/docs/sponsor/sponsor\"}],\"sidebar\":{\"/docs/guide/\":[{\"text\":\"指南\",\"children\":[{\"text\":\"基础\",\"children\":[{\"text\":\"介绍\",\"link\":\"/docs/guide/introduction\"},{\"text\":\"快速开始\",\"link\":\"/docs/guide/start\"},{\"text\":\"目录结构\",\"link\":\"/docs/guide/directory\"},{\"text\":\"布局和主题\",\"link\":\"/docs/guide/layout\"},{\"text\":\"路由配置\",\"link\":\"/docs/guide/router\"},{\"text\":\"权限配置\",\"link\":\"/docs/guide/permission\"},{\"text\":\"请求配置\",\"link\":\"/docs/guide/request\"}]}]}]},\"author\":{\"name\":\"coffee-admin\",\"href\":\"https://github.com/bestycw\"},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
