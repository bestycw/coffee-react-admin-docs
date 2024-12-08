<template><div><p>因为本人懒，非常厌烦路由的重复配置，所以采用了约定式路由的方式，即：只要按照规定在<code v-pre>@page</code>目录下创建文件，就能自动生成菜单和路由。并且尽量开放最大的自由度，可以随意搭配。</p>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2>
<p>目录结构是约定式路由的关键。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">@page</span>
<span class="line">├── dashboard</span>
<span class="line">│   └── index.tsx</span>
<span class="line">├── about</span>
<span class="line">│   └── about.tsx</span>
<span class="line">├── user</span>
<span class="line">│   ├── index.config.tsx</span>
<span class="line">│   ├── profile</span>
<span class="line">│   │   └── index.tsx</span>
<span class="line">│   └── settings</span>
<span class="line">│       └── settings.tsx</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是目前支持的约定式路由的方式：
1.page下面必须创建对应的<code v-pre>文件夹</code>，暂时不支持page下面的<code v-pre>文件</code>
2.如果只有一级路由，则<code v-pre>index.config.tsx</code>可以省略。但文件名称必须是<code v-pre>index.tsx</code>或者和文件夹保持同名。
3.如果多级路由，则需要创建<code v-pre>index.config.tsx</code>文件，该文件配置是父级路由的配置，如果没有，则默认使用文件夹的名称。子路由则符合上面的规则。
4.在所有的<code v-pre>组件</code>和<code v-pre>index.config.tsx</code>中，需要导出如下的路由配置.
5.文件夹下的<code v-pre>components</code>会被忽略，不会作为路由。</p>
<h2 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置"><span>路由配置</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">RouteConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>   <span class="token comment">//路由名称 </span></span>
<span class="line">  icon<span class="token operator">?</span><span class="token operator">:</span> ReactNode  <span class="token comment">//图标</span></span>
<span class="line">  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//是否在layout中</span></span>
<span class="line">  element<span class="token operator">?</span><span class="token operator">:</span> ReactNode <span class="token operator">|</span> LazyExoticComponent <span class="token comment">//组件</span></span>
<span class="line">  roles<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//权限角色</span></span>
<span class="line">  sort<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">//排序</span></span>
<span class="line">  hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//是否隐藏</span></span>
<span class="line">  hiddenInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token comment">//是否在菜单中隐藏</span></span>
<span class="line">  <span class="token comment">// 可以添加更多配置项</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>用户管理<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routeConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  title<span class="token operator">:</span> <span class="token string">'用户管理'</span><span class="token punctuation">,</span></span>
<span class="line">  icon<span class="token operator">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  layout<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">as</span> RouteConfig<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有这个配置文件，则会采用文件夹的名称作为路由名称。其余采用默认值。</p>
<h2 id="常见疑问" tabindex="-1"><a class="header-anchor" href="#常见疑问"><span>常见疑问</span></a></h2>
<ol>
<li>
<p>为什么没有重定向的功能？
重定向功能已经内置，在生成路由的时候，已经对于需要重定向的地方增加了redirect属性。默认使用子路由中默认第一个带有<code v-pre>element</code>属性的组件。
但是因为<code v-pre>react-router-dom</code>的限制，无法在<code v-pre>Route</code>中使用<code v-pre>redirect</code>属性，所以只能在<code v-pre>Route</code>外层包裹一层组件<code v-pre>AuthBoundary</code>，来实现重定向。</p>
<ul>
<li>根路径的重定向，会根据是否登录，自动重定向到登录页或者首页。</li>
<li>子路径的重定向，会根据子路径的<code v-pre>redirect</code>属性进行重定向。</li>
</ul>
</li>
<li>
<p>为什么采用约定式路由？
开头说过，因为懒！哈哈哈哈，主要是为了减少重复配置，提高开发效率。路由很多时候都是重复配置，所以采用约定式路由，可以减少很多重复配置。</p>
</li>
<li>
<p>动态路由怎么配置
实际意义上，这里的路由都是全量生成，因为是否是动态路由，前端都得有对应的页面去匹配。而动态路由主要的意义是权限，虽然没有动态路由，但是本身可以根据权限进行配置。具体配置见<a href="/docs/guide/permission">权限管理</a>。</p>
</li>
<li>
<p>如何配置404、登录页这种不在layout页面中的
非常简单，只需要<code v-pre>layout=false</code>即可。</p>
</li>
</ol>
<h2 id="后续规划" tabindex="-1"><a class="header-anchor" href="#后续规划"><span>后续规划</span></a></h2>
<p>现在是1.0版本，很多功能还不完善，后续会慢慢完善。
目前已知的需要假如的功能：</p>
<ol>
<li>不支持<code v-pre>pages</code>目录下的<code v-pre>文件</code></li>
<li>不支持<code v-pre>jsx</code></li>
<li>文件夹下<code v-pre>index.tsx</code>和<code v-pre>example.tsx</code>同时存在时，会不符合规则。</li>
<li>还有什么规则，欢迎大家来提。
...</li>
</ol>
</div></template>


