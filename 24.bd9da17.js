webpackJsonp([24],{43:function(t,n){var s,a;t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},103:function(t,n,s){t.exports=s(43),'<h1>Datetime picker</h1>\n<blockquote>\n<p>日期时间选择器，支持自定义类型。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { DatetimePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(DatetimePicker.name, DatetimePicker);\n</code></pre>\n<h2>例子</h2>\n<p><code>value</code> 属性为组件的绑定值。</p>\n<p><code>type</code> 属性表示 <code>datetime-picker</code> 组件的类型，它有三个可能的值：</p>\n<ul>\n<li><code>datetime</code>: 日期时间选择器，可选择年、月、日、时、分，<code>value</code> 值为一个 <code>Date</code> 对象</li>\n<li><code>date</code>: 日期选择器，可选择年、月、日，<code>value</code> 值为一个 <code>Date</code> 对象</li>\n<li><code>time</code>: 时间选择器，可选择时、分，<code>value</code> 值为一个格式为 <code>HH:mm</code> 的字符串</li>\n</ul>\n<p>将 <code>visible</code> 属性与一个本地变量同步，通过操作这个变量即可控制 <code>datetime-picker</code> 的显示与隐藏。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"time"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"pickerValue"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<p>可以为选项提供自定义模板。模板须为一个包含了 <code>{value}</code> 的字符串，<code>{value}</code> 会被解析为相应选项的值。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>\n  <span class="hljs-attr">year-format</span>=<span class="hljs-string">"{value} 年"</span>\n  <span class="hljs-attr">month-format</span>=<span class="hljs-string">"{value} 月"</span>\n  <span class="hljs-attr">date-format</span>=<span class="hljs-string">"{value} 日"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<p>当点击确认按钮时会触发 <code>confirm</code> 事件，参数为当前 value 的值。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"time"</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">"handleConfirm"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>绑定值</td>\n<td>Date / String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示 <code>datetime-picker</code></td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>type</td>\n<td>组件的类型</td>\n<td>String</td>\n<td>\'datetime\', \'date\', \'time\'</td>\n<td>\'datetime\'</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮文本</td>\n<td>String</td>\n<td></td>\n<td>\'取消\'</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文本</td>\n<td>String</td>\n<td></td>\n<td>\'确定\'</td>\n</tr>\n<tr>\n<td>startDate</td>\n<td>日期的最小可选值</td>\n<td>Date</td>\n<td></td>\n<td>十年前的 1 月 1 日</td>\n</tr>\n<tr>\n<td>endDate</td>\n<td>日期的最大可选值</td>\n<td>Date</td>\n<td></td>\n<td>十年后的 12 月 31 日</td>\n</tr>\n<tr>\n<td>startHour</td>\n<td>小时的最小可选值</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>endHour</td>\n<td>小时的最大可选值</td>\n<td>Number</td>\n<td></td>\n<td>23</td>\n</tr>\n<tr>\n<td>yearFormat</td>\n<td>年份模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>monthFormat</td>\n<td>月份模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>dateFormat</td>\n<td>日期模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>hourFormat</td>\n<td>小时模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>minuteFormat</td>\n<td>分钟模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n</tbody>\n</table></div>'!==t.exports.template&&(t.exports.template='<h1>Datetime picker</h1>\n<blockquote>\n<p>日期时间选择器，支持自定义类型。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { DatetimePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(DatetimePicker.name, DatetimePicker);\n</code></pre>\n<h2>例子</h2>\n<p><code>value</code> 属性为组件的绑定值。</p>\n<p><code>type</code> 属性表示 <code>datetime-picker</code> 组件的类型，它有三个可能的值：</p>\n<ul>\n<li><code>datetime</code>: 日期时间选择器，可选择年、月、日、时、分，<code>value</code> 值为一个 <code>Date</code> 对象</li>\n<li><code>date</code>: 日期选择器，可选择年、月、日，<code>value</code> 值为一个 <code>Date</code> 对象</li>\n<li><code>time</code>: 时间选择器，可选择时、分，<code>value</code> 值为一个格式为 <code>HH:mm</code> 的字符串</li>\n</ul>\n<p>将 <code>visible</code> 属性与一个本地变量同步，通过操作这个变量即可控制 <code>datetime-picker</code> 的显示与隐藏。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"time"</span>\n  <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"pickerValue"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<p>可以为选项提供自定义模板。模板须为一个包含了 <code>{value}</code> 的字符串，<code>{value}</code> 会被解析为相应选项的值。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>\n  <span class="hljs-attr">year-format</span>=<span class="hljs-string">"{value} 年"</span>\n  <span class="hljs-attr">month-format</span>=<span class="hljs-string">"{value} 月"</span>\n  <span class="hljs-attr">date-format</span>=<span class="hljs-string">"{value} 日"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<p>当点击确认按钮时会触发 <code>confirm</code> 事件，参数为当前 value 的值。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-datetime-picker</span>\n  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"pickerVisible"</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">"time"</span>\n  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">"handleConfirm"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-datetime-picker</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>绑定值</td>\n<td>Date / String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示 <code>datetime-picker</code></td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>type</td>\n<td>组件的类型</td>\n<td>String</td>\n<td>\'datetime\', \'date\', \'time\'</td>\n<td>\'datetime\'</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮文本</td>\n<td>String</td>\n<td></td>\n<td>\'取消\'</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文本</td>\n<td>String</td>\n<td></td>\n<td>\'确定\'</td>\n</tr>\n<tr>\n<td>startDate</td>\n<td>日期的最小可选值</td>\n<td>Date</td>\n<td></td>\n<td>十年前的 1 月 1 日</td>\n</tr>\n<tr>\n<td>endDate</td>\n<td>日期的最大可选值</td>\n<td>Date</td>\n<td></td>\n<td>十年后的 12 月 31 日</td>\n</tr>\n<tr>\n<td>startHour</td>\n<td>小时的最小可选值</td>\n<td>Number</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>endHour</td>\n<td>小时的最大可选值</td>\n<td>Number</td>\n<td></td>\n<td>23</td>\n</tr>\n<tr>\n<td>yearFormat</td>\n<td>年份模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>monthFormat</td>\n<td>月份模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>dateFormat</td>\n<td>日期模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>hourFormat</td>\n<td>小时模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n<tr>\n<td>minuteFormat</td>\n<td>分钟模板</td>\n<td>String</td>\n<td></td>\n<td>\'{value}\'</td>\n</tr>\n</tbody>\n</table></div>')}});