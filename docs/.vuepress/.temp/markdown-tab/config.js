import { CodeTabs } from "/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/bestycw/Desktop/private/react-admin/react-admin-antd/react-admin-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
