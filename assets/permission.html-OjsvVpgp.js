import{_ as o,c as d,a as c,o as l}from"./app-CcfVGgk4.js";const a={};function i(s,e){return l(),d("div",null,e[0]||(e[0]=[c(`<p>权限是后台管理系统的重点，所以在这块尽量做的完善、配置也简单。</p><h2 id="权限配置" tabindex="-1"><a class="header-anchor" href="#权限配置"><span>权限配置</span></a></h2><p>权限模型是依据<code>RBAC</code>模型，即<code>Role-Based Access Control</code>，角色访问控制。权限配置和<a href="/docs/guide/router" target="_blank" rel="noopener noreferrer">路由配置</a>是息息相关的，</p><h3 id="角色控制" tabindex="-1"><a class="header-anchor" href="#角色控制"><span>角色控制</span></a></h3><p>每个用户都会设置一个<code>roles</code>属性，<code>roles</code>属性是一个数组，数组中每个元素都是一个角色。同时，在设置路由的时候，也会有个字段<code>roles</code>。当两者存在交集的时候，说明当前用户可以访问该路由。 例如：</p><ul><li>当前用户<code>roles</code>为<code>[&#39;admin&#39;]</code>，设置路由的时候，设置<code>roles: [&#39;admin&#39;]</code>，则当前用户可以访问该路由。如果设置<code>roles: [&#39;user&#39;]</code>，则当前用户也可以访问该路由。</li></ul><p>注意：</p><ul><li>如果当前用户没有设置<code>roles</code>属性，则默认能访问所有没有配置<code>roles</code>的路由。</li></ul><h3 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由"><span>动态路由</span></a></h3><p>这里提到动态路由，实际上是给用户设置了<code>dynamicRoutes</code>属性，<code>dynamicRoutes</code>属性是一个数组，数组中每个元素都是一个路由的<code>path</code>。当用户登录后，会根据<code>dynamicRoutes</code>属性，过滤路由。 例如：</p><ul><li>当前用户<code>dynamicRoutes</code>为<code>[&#39;/table&#39;，&#39;/table/basic&#39;]</code>，则当前用户只能访问<code>/table</code>和<code>/table/basic</code>路径。 注意：</li><li><code>dynamicRoutes</code>默认值为<code>[/]</code>,表示的根路由，可以访问所有。</li><li>与角色控制相辅相成，会先通过角色过滤一遍，然后在根据动态路由进行过滤。 其实说白了，动态路由需要考后台控制，这适合<code>角色较多，且角色经常变动的</code>场景。</li></ul><h3 id="按钮权限" tabindex="-1"><a class="header-anchor" href="#按钮权限"><span>按钮权限</span></a></h3><p>现在按钮权限还未完全实现，基本功能已经实现。因为现在采用Antd的组件，秉着侵入性较小的原则，并没有重写组件。而且外层套一层<code>Permission</code>组件。 通过判断用户中的<code>permissions</code>属性，来决定按钮是否显示。 按钮权限的格式为<code>[&#39;router:roles:button&#39;]</code>，<code>router</code>为路由，<code>roles</code>为角色，<code>button</code>为按钮。 例如：</p><ul><li>当前用户<code>permissions</code>为<code>[&#39;table:admin:add&#39;]</code>，则当前用户可以访问<code>table</code>路径，admin角色可以访问<code>add</code>按钮。</li></ul><p>注意：</p><ul><li>如果当前用户没有设置<code>permissions</code>属性或者默认<code>[&#39;*:*:*&#39;]</code>，则默认拥有所有权限。</li></ul><h2 id="后续规划" tabindex="-1"><a class="header-anchor" href="#后续规划"><span>后续规划</span></a></h2><pre><code>权限这块非常重要，后续也需要仔细的打磨，尽量满足多种场景。目前已知需要做的：
1. 按钮级别权限，感觉目前实现的有点冗余，在想一种更合理的实现方式
2. 数据权限还未实现 ，可能更需要后端的配合
</code></pre>`,18)]))}const r=o(a,[["render",i],["__file","permission.html.vue"]]),t=JSON.parse('{"path":"/docs/guide/permission","title":"权限管理","lang":"zh-CN","frontmatter":{"title":"权限管理","article":false,"date":"2024-12-08T00:00:00.000Z","permalink":"/docs/guide/permission"},"headers":[{"level":2,"title":"权限配置","slug":"权限配置","link":"#权限配置","children":[{"level":3,"title":"角色控制","slug":"角色控制","link":"#角色控制","children":[]},{"level":3,"title":"动态路由","slug":"动态路由","link":"#动态路由","children":[]},{"level":3,"title":"按钮权限","slug":"按钮权限","link":"#按钮权限","children":[]}]},{"level":2,"title":"后续规划","slug":"后续规划","link":"#后续规划","children":[]}],"git":{"updatedTime":1733671290000,"contributors":[{"name":"yangcw","email":"yangcw@glodon.com","commits":1,"url":"https://github.com/yangcw"}]},"filePathRelative":"docs/guide/permission.md"}');export{r as comp,t as data};