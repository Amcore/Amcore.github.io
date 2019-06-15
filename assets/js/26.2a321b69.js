(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{198:function(_,v,t){"use strict";t.r(v);var a=t(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"什么叫微前端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么叫微前端","aria-hidden":"true"}},[_._v("#")]),_._v(" 什么叫微前端")]),_._v(" "),t("p",[_._v("微前端是一种类似微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由当一的单体应用\n转变为把多个小型前端应用聚合为一的应用")]),_._v(" "),t("p",[_._v("微前端是指将多个前端应用以某种形式结合到一起，当系统中存在多个前端应用（或者当个前端应用模块过大）\n时，就需要考虑到用微前端的方式来拆分。此外，还需要做一系列的技术决策来支持应用的整合。")]),_._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[_._v("#")]),_._v(" 特点")]),_._v(" "),t("ul",[t("li",[_._v("应用自治")])]),_._v(" "),t("p",[_._v("微前端架构，是多个应用组件的统一应用，这些应用可以由多个团队来开发。要遵循统一的接口规范框架，以便\n集成统一到一起，因此相互之间是不存在依赖关系。我们可以再适当的时候替换其中任意一个应用，而不是整体\n。这也意味着，我们可以使用各式各样的前端框架，而不会相互影响。")]),_._v(" "),t("ul",[t("li",[_._v("单一职责")]),_._v(" "),t("li",[_._v("技术栈无关")])]),_._v(" "),t("h3",{attrs:{id:"为什么需要微前端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要微前端","aria-hidden":"true"}},[_._v("#")]),_._v(" 为什么需要微前端")]),_._v(" "),t("ul",[t("li",[_._v("遗留系统迁移")]),_._v(" "),t("li",[_._v("聚合应用")]),_._v(" "),t("li",[_._v("热闹驱动开发")])]),_._v(" "),t("h3",{attrs:{id:"微前端的拆分方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端的拆分方式","aria-hidden":"true"}},[_._v("#")]),_._v(" 微前端的拆分方式")]),_._v(" "),t("p",[_._v("从技术实践上，微前端架构可以采用以下几种方式进行")]),_._v(" "),t("ul",[t("li",[_._v("路由分发式：通过HTTP服务器的反向代理一个功能，将请求路由到对应应用上")]),_._v(" "),t("li",[_._v("起那段微服务化：在不同的框架上设计通信和加载机制，以一个页面内加载对应的应用")]),_._v(" "),t("li",[_._v("微应用：通过软件工程的方式，在部署构建环境中把多个独立的应用组合成一个单体应用")]),_._v(" "),t("li",[_._v("微件化：开发一个新的构建系统，将部分业务功能构建成一个独立chunk代码，使用时只要远程加载即可")]),_._v(" "),t("li",[_._v("前端容器化：将iframe作为容器容纳其他其前端应用")]),_._v(" "),t("li",[_._v("应用组件化：借助web components技术构建跨框架前端应用")])]),_._v(" "),t("h3",{attrs:{id:"微前端的业务拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端的业务拆分","aria-hidden":"true"}},[_._v("#")]),_._v(" 微前端的业务拆分")]),_._v(" "),t("ul",[t("li",[_._v("按照业务拆分")]),_._v(" "),t("li",[_._v("按照权限拆分")]),_._v(" "),t("li",[_._v("按照变更频率拆分")]),_._v(" "),t("li",[_._v("按照组织结构拆分")]),_._v(" "),t("li",[_._v("跟随后端拆分")])]),_._v(" "),t("h3",{attrs:{id:"构建微前端基础设施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建微前端基础设施","aria-hidden":"true"}},[_._v("#")]),_._v(" 构建微前端基础设施")]),_._v(" "),t("ul",[t("li",[_._v("组件与模式库：应用间提供通用的UI组件，共享业务组件，以及相应的通用函数模块；")]),_._v(" "),t("li",[_._v("应用间通信：设计应用间通信机制，并提供相应的底层库支持")]),_._v(" "),t("li",[_._v("数据共享机制：对通用的数据，采取一定的策略来缓存数据，而不是每个应用当度获取自己的数据")]),_._v(" "),t("li",[_._v("专用的构建系统：在某些微前端的实现里，如微件化，构建系统用于构建出每个单独的应用，有可以构建\n出最后的一整个应用")])]),_._v(" "),t("h3",{attrs:{id:"微前端架构模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构模式","aria-hidden":"true"}},[_._v("#")]),_._v(" 微前端架构模式")]),_._v(" "),t("ul",[t("li",[_._v("基座模式")]),_._v(" "),t("li",[_._v("自组织模式")])]),_._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("设计理念")]),_._v(" "),t("ul",[t("li",[_._v("中心化：应用注册表")]),_._v(" "),t("li",[_._v("标识化应用")]),_._v(" "),t("li",[_._v("应用生命周期管理")]),_._v(" "),t("li",[_._v("高内聚，低耦合")])])])])}],!1,null,null,null);v.default=i.exports}}]);