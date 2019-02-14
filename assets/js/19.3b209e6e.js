(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{52:function(i,t,a){i.exports=a.p+"assets/img/css-zIndex.2cd70fd6.jpg"},72:function(i,t,a){"use strict";a.r(t);var e=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[i._v("#")]),i._v(" BFC")]),e("p",[i._v("块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。")]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[i._v("IE")]),e("p",[i._v("IE下为 Layout，可通过 zoom:1 触发")])]),e("h4",{attrs:{id:"触发条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件","aria-hidden":"true"}},[i._v("#")]),i._v(" 触发条件:")]),e("ul",[e("li",[i._v("positon: absolute/fixed")]),e("li",[i._v("display: inline-block / table")]),e("li",[i._v("float 元素")]),e("li",[i._v("ovevflow !== visible")])]),e("h4",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[i._v("#")]),i._v(" 应用:")]),e("ul",[e("li",[i._v("阻止margin重叠")]),e("li",[i._v("可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)")]),e("li",[i._v("自适应两栏布局")]),e("li",[i._v("可以阻止元素被浮动元素覆盖")])]),e("h3",{attrs:{id:"层叠上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文","aria-hidden":"true"}},[i._v("#")]),i._v(" 层叠上下文")]),e("p",[i._v("元素提升为一个比较特殊的图层，在三维空间中 (z轴) 高出普通元素一等")]),e("h4",{attrs:{id:"触发条件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件-2","aria-hidden":"true"}},[i._v("#")]),i._v(" 触发条件")]),e("ul",[e("li",[i._v("根层叠上下文(html)")]),e("li",[i._v("position")]),e("li",[i._v("css3属性\n"),e("ul",[e("li",[i._v("flex")]),e("li",[i._v("transform")]),e("li",[i._v("opacity")]),e("li",[i._v("filter")]),e("li",[i._v("will-change")]),e("li",[i._v("-webkit-overflow-scrolling")])])]),e("li",[i._v("层叠等级：层叠上下文在z轴上的排序\n"),e("ul",[e("li",[i._v("在同一层叠上下文中，层叠等级才有意义")]),e("li",[i._v("z-index的优先级最高")])])])]),e("p",[e("img",{attrs:{src:a(52),alt:"层叠等级"}})]),e("h3",{attrs:{id:"居中布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#居中布局","aria-hidden":"true"}},[i._v("#")]),i._v(" 居中布局")]),e("ul",[e("li",[i._v("水平居中\n"),e("ul",[e("li",[i._v("行内元素: text-align: center")]),e("li",[i._v("块级元素: margin: 0 auto")]),e("li",[i._v("absolute + transform")]),e("li",[i._v("flex + justify-content: center")])])]),e("li",[i._v("垂直居中\n"),e("ul",[e("li",[i._v("line-height: height")]),e("li",[i._v("absolute + transform")]),e("li",[i._v("flex + align-items: center")]),e("li",[i._v("table")])])]),e("li",[i._v("水平垂直居中\n"),e("ul",[e("li",[i._v("absolute + transform")]),e("li",[i._v("flex + justify-content + align-items")])])])]),e("h3",{attrs:{id:"选择器优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器优先级","aria-hidden":"true"}},[i._v("#")]),i._v(" 选择器优先级")]),e("ul",[e("li",[i._v("!important > 行内样式 > #id > .class > tag > * > 继承 > 默认")]),e("li",[i._v("选择器 从右往左 解析")])]),e("h3",{attrs:{id:"去除浮动影响，防止父级高度塌陷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去除浮动影响，防止父级高度塌陷","aria-hidden":"true"}},[i._v("#")]),i._v(" 去除浮动影响，防止父级高度塌陷")]),e("ul",[e("li",[i._v("通过增加尾元素清除浮动\n"),e("ul",[e("li",[e("code",[i._v("after /<br>: clear: both")])])])]),e("li",[i._v("创建父级 BFC")]),e("li",[i._v("父级设置高度")])]),e("h3",{attrs:{id:"link-与-import-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link-与-import-的区别","aria-hidden":"true"}},[i._v("#")]),i._v(" link 与 @import 的区别")]),e("ul",[e("li",[i._v("link功能较多，可以定义 RSS，定义 Rel 等作用，而@import只能用于加载 css")]),e("li",[i._v("当解析到link时，页面会同步加载所引的 css，而@import所引用的 css 会等到页面加载完才被加载")]),e("li",[i._v("@import需要 IE5 以上才能使用")]),e("li",[i._v("link可以使用 js 动态引入，@import不行")])]),e("h3",{attrs:{id:"css预处理器-sass-less-postcss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css预处理器-sass-less-postcss","aria-hidden":"true"}},[i._v("#")]),i._v(" CSS预处理器(Sass/Less/Postcss)")]),e("h3",{attrs:{id:"动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[i._v("#")]),i._v(" 动画")]),e("ul",[e("li",[e("code",[i._v("transition")]),i._v(": 过渡动画\n"),e("ul",[e("li",[e("code",[i._v("transition-property")]),i._v(": 属性")]),e("li",[e("code",[i._v("transition-duration")]),i._v(": 间隔(s)")]),e("li",[e("code",[i._v("transition-timing-function")]),i._v(": 曲线\n"),e("ul",[e("li",[e("code",[i._v("linear")]),i._v(": 动画从头到尾的速度是相同的。")]),e("li",[e("code",[i._v("ease")]),i._v(": 默认。动画以低速开始，然后加快，在结束前变慢。")]),e("li",[e("code",[i._v("ease-in")]),i._v(":\t动画以低速开始")]),e("li",[e("code",[i._v("ease-out")]),i._v(": 动画以低速结束")]),e("li",[e("code",[i._v("ease-in-out")]),i._v(": 动画以低速开始和结束")]),e("li",[e("code",[i._v("cubic-bezier")]),i._v(": 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值")])])]),e("li",[e("code",[i._v("transition-delay")]),i._v(": 延迟")]),e("li",[i._v("常用钩子: "),e("code",[i._v("transitionend")])])])]),e("li",[e("code",[i._v("animation / keyframes")]),e("ul",[e("li",[e("code",[i._v("animation-name")]),i._v(": 动画名称，对应"),e("code",[i._v("@keyframes")])]),e("li",[e("code",[i._v("animation-duration")]),i._v(": 间隔(s)")]),e("li",[e("code",[i._v("animation-timing-function")]),i._v(": 曲线(同上)")]),e("li",[e("code",[i._v("animation-delay")]),i._v(": 延迟")]),e("li",[e("code",[i._v("animation-iteration-count")]),i._v(": 次数\n"),e("ul",[e("li",[e("code",[i._v("infinite")]),i._v(": 无线循环")])])]),e("li",[e("code",[i._v("animation-direction")]),i._v(": (反向:alternate)")])])]),e("li",[i._v("动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现\n"),e("ul",[e("li",[i._v("translate")]),e("li",[i._v("scale")]),e("li",[i._v("rotate")]),e("li",[i._v("skew")]),e("li",[i._v("opacity")]),e("li",[i._v("color")])])])])])}],l=a(0),s=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);t.default=s.exports}}]);