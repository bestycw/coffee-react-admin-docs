<template><div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock"><span>Mock</span></a></h2>
<p>平台配置了Mock的方法，可以方便的进行前后端分离开发。并可以通过环境变量来控制是否开启Mock</p>
<details class="hint-container details"><summary>点击查看</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// .env.development</span></span>
<span class="line"><span class="token constant">VITE_USE_MOCK</span><span class="token operator">=</span><span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>Mock请求的方法</p>
<details class="hint-container details"><summary><code v-pre>Get</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'/api/auth/info'</span><span class="token punctuation">,</span> <span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">        message<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">        data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>Post</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">'/api/auth/login'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">        message<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span></span>
<span class="line">        data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            token<span class="token operator">:</span> <span class="token string">'1234567890'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="请求设置" tabindex="-1"><a class="header-anchor" href="#请求设置"><span>请求设置</span></a></h2>
<p>平台分别封装了<code v-pre>Axios</code>、<code v-pre>Fetch</code>、<code v-pre>WebSocket</code>三种请求方式，并内置了丰富的功能。默认采用<code v-pre>Axios</code>请求。</p>
<h3 id="axios和fetch" tabindex="-1"><a class="header-anchor" href="#axios和fetch"><span>Axios和Fetch</span></a></h3>
<ul>
<li>支持<code v-pre>Get</code>、<code v-pre>Post</code>、<code v-pre>Put</code>、<code v-pre>Delete</code>四种请求方式</li>
<li>支持<code v-pre>FormData</code>、<code v-pre>Json</code>、<code v-pre>Urlencoded</code>三种请求格式</li>
<li>支持<code v-pre>拦截器</code>、<code v-pre>超时</code>、<code v-pre>取消请求</code>、<code v-pre>请求重试</code>等功能的设置</li>
<li>支持<code v-pre>响应拦截</code>、<code v-pre>错误重定向</code>、<code v-pre>错误信息提示</code>等功能</li>
<li>支持 <code v-pre>axios</code>和<code v-pre>fetch</code>下载进度监控和并发请求</li>
<li>支持 <code v-pre>fetch</code> 上传进度监控</li>
<li>支持 <code v-pre>fetch</code> 流式传输</li>
</ul>
<details class="hint-container details"><summary><code v-pre>Get</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        params<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>Post</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>Put</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>Delete</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'/api/test'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        params<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>请求重试</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test-retry'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    retry<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    retryDelay<span class="token operator">:</span> <span class="token number">1000</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>上传</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">'/api/upload'</span><span class="token punctuation">,</span> formData<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span>progress<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> percent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>progress <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">'准备上传...'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'Upload'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">              message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">                content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">上传进度 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>percent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> </span>
<span class="line">                key<span class="token operator">:</span> <span class="token string">'Upload'</span> </span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>下载</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">'/api/download'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token punctuation">(</span>progress<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> percent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>progress <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>并发请求</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">const</span> api <span class="token operator">=</span> type <span class="token operator">===</span> <span class="token string">'axios'</span> <span class="token operator">?</span> axiosRequest <span class="token operator">:</span> fetchRequest<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">allLimit</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/test2'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="hint-container details"><summary><code v-pre>流式传输</code>方法</summary>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token keyword">await</span> fetchRequest<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token string">'/api/stream'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">onMessage</span><span class="token operator">:</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h3>
<ul>
<li>支持<code v-pre>心跳检测</code>、<code v-pre>断线重连</code>、<code v-pre>消息重发</code>等功能</li>
<li>支持<code v-pre>消息队列</code>、<code v-pre>消息过滤</code>、<code v-pre>消息缓存</code>等功能</li>
</ul>
</div></template>


