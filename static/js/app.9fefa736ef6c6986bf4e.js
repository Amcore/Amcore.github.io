webpackJsonp([0],[,,,,function(t,n,e){"use strict";e.d(n,"b",function(){return s}),e.d(n,"a",function(){return a});var s={GCN:"language/GET_CN",GEN:"language/GET_EN",MCN:"language/LAN_CN",MEN:"language/LAN_EN",ACN:"language/FET_CN",AEN:"language/FET_EN"},a={G:"counter/GET_COUNT",N:"cuunter/GET_EN",F:"counter/FETCH_ALL",T:"counter/SOME_TEST",A:"counter/FETCH_TEST",M:"counter/INCREMENT"}},,,,,,,function(t,n,e){"use strict";var s=e(2),a=e(95),i=e(72),c=e(70),o=e(69),r=e(79),_=e(76),l=e(68),u=e(73),v=e(74),p=e(77),f=e(71),m=e(67),d=e(75),C=e(78);s.a.use(a.a),n.a=new a.a({mode:"history",routes:[{path:"/",name:"Home",component:i},{path:"/en",name:"en",component:c},{path:"/cn",name:"Cn",component:o},{path:"/work",name:"work",component:r},{path:"/project",name:"project",component:_},{path:"/banqiao",name:"banqiao",component:l},{path:"/kingcore",name:"kingcore",component:u},{path:"/person",name:"person",component:v},{path:"/andon",name:"andon",component:m},{path:"/printos",name:"printos",component:d},{path:"/self",name:"self",component:p},{path:"/end",name:"end",component:f},{path:"/test",name:"test",component:C},{path:"*",redirect:"/"}]})},function(t,n,e){"use strict";var s=e(2),a=e(97),i=e(22),c=e(21);s.a.use(a.a);var o=new a.a.Store({modules:{language:i.a,counter:c.a}});n.a=o},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){e(54);var s=e(0)(e(23),e(87),null,null);t.exports=s.exports},function(t,n,e){e(49);var s=e(0)(e(24),e(81),"data-v-19be6c2f",null);t.exports=s.exports},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(2),a=e(17),i=e.n(a),c=e(11),o=e(12),r=e(19),_=e.n(r),l=e(16),u=e.n(l),v=e(18),p=e.n(v),f=e(15),m=(e.n(f),e(14)),d=(e.n(m),e(13));e.n(d);s.a.component("am-icon",u.a),s.a.component("AmLoad",p.a),s.a.use(_.a,{name:"v-touch"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,store:o.a,template:"<App/>",components:{App:i.a}})},function(t,n,e){"use strict";var s,a,i,c=e(5),o=e.n(c),r=e(4),_=r.a.G,l=r.a.F,u=r.a.M,v=r.a.T,p=r.a.A,f=r.a.N,m={state:{count:"en",ad:"cn"},getters:(s={},o()(s,_,function(t){return t.count}),o()(s,f,function(t){return t.ad}),s),mutations:(a={},o()(a,u,function(t){t.count="cn",t.ad="en"}),o()(a,v,function(t){t.count="en",t.ad="cn"}),a),actions:(i={},o()(i,l,function(t){(0,t.commit)(u)}),o()(i,p,function(t){(0,t.commit)(v)}),i)};n.a=m},function(t,n,e){"use strict";var s,a,i,c=e(5),o=e.n(c),r=e(4),_=r.b.GCN,l=r.b.GEN,u=r.b.MCN,v=r.b.MEN,p=r.b.ACN,f=r.b.AEN,m={state:{currentLanguage:"中文",otherLanguage:"EN"},getters:(s={},o()(s,_,function(t){return t.currentLanguage}),o()(s,l,function(t){return t.otherLanguage}),s),mutations:(a={},o()(a,u,function(t){t.currentLanguage="中文",t.otherLanguage="EN"}),o()(a,v,function(t){t.currentLanguage="EN",t.otherLanguage="中文"}),a),actions:(i={},o()(i,p,function(t){(0,t.commit)(u)}),o()(i,f,function(t){(0,t.commit)(v)}),i)};n.a=m},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(61),a=e.n(s);n.default={name:"app",mounted:function(){a.a.attach(document.body,!1),document.body.addEventListener("touch",function(t){t.preventDefault()},!1)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goPerson:function(){this.$router.push("/person")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goKingcore:function(){this.$router.push("/kingcore")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goWork:function(){this.$router.push("/work")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},components:{},methods:{goEn:function(){window.alert(111)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},components:{},methods:{toResume:function(){console.log("...")},nextPage:function(){this.$router.push("/cn")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goPerson:function(){this.$router.push("/person")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goSelf:function(){this.$router.push("/self")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goPerson:function(){this.$router.push("/person")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goBanqiao:function(){this.$router.push("/banqiao")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goEnd:function(){this.$router.push("/end")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goProject:function(){this.$router.push("/project")}}}},,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,,,function(t,n){t.exports="data:image/png;base64,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"},function(t,n,e){e(50);var s=e(0)(e(25),e(82),null,null);t.exports=s.exports},function(t,n,e){e(59);var s=e(0)(e(26),e(93),null,null);t.exports=s.exports},function(t,n,e){e(55);var s=e(0)(e(27),e(88),null,null);t.exports=s.exports},function(t,n,e){var s=e(0)(null,e(89),null,null);t.exports=s.exports},function(t,n,e){e(56);var s=e(0)(e(28),e(90),null,null);t.exports=s.exports},function(t,n,e){e(52);var s=e(0)(e(29),e(85),null,null);t.exports=s.exports},function(t,n,e){e(60);var s=e(0)(e(30),e(94),null,null);t.exports=s.exports},function(t,n,e){e(53);var s=e(0)(e(31),e(86),null,null);t.exports=s.exports},function(t,n,e){e(51);var s=e(0)(e(32),e(84),null,null);t.exports=s.exports},function(t,n,e){e(48);var s=e(0)(e(33),e(80),null,null);t.exports=s.exports},function(t,n,e){e(57);var s=e(0)(e(34),e(91),null,null);t.exports=s.exports},function(t,n,e){var s=e(0)(null,e(83),null,null);t.exports=s.exports},function(t,n,e){e(58);var s=e(0)(e(35),e(92),null,null);t.exports=s.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goBanqiao,swipedown:function(n){t.$router.push("/work")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("磐晟云平台")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            用印申请流程\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            包括用印添加，用印审批，用印完成。\n            基于Vue开发，其中部分组件利用了element UI进行开发。\n            根据公司自定义需求开发了一系列组件，其中包括上传组件。\n            用印弹窗等。\n            应用promise 与async await新特性（公司后端用java)\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            涉及技术\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            Vue、vuex、element-ui、e6、e7、sass、flex\n          ")]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goBanqiao}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"am-load"},[e("am-icon",{attrs:{name:"loading"}})],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:function(n){t.$router.push("/printos")},swipedown:function(n){t.$router.push("/kingcore")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("鑫宇安灯系统")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            鑫宇安灯系统前端\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            负责前端页面实现，\n            该系统结合工厂安灯实现对工厂工序，\n            生产进行便捷管理。实现智能制造。\n            通过生成问题实时反馈到车间看板上。（公司后端用PHP）\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            涉及技术\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            Vue、vuex、websocket、element-ui、e6、e7、sass、flex\n          ")]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:function(n){t.$router.push("/printos")}}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"test"},[t._v("\n  test\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:function(n){t.$router.push("/person")},swipedown:function(n){t.$router.push("/andon")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("3D打印机控制系统")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            前端负责\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            公司主营3D打印业务，\n            该系统控制3D打印机在生产、查看喷头温度、创建生产、停止生产等流程。\n            在该系统中负 责前端工作。\n            在权限管理的中使用Vue directive自定义指令对功能操作进行管理。\n            利用vuex对打印机系统时间与 服务端保持一致。\n            利用echart对喷头温度图标反馈。\n            页面实现响应式，方便手机对打印机的控制。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            涉及主要技术\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            Vue、vuex、websocket、element-ui、e6、e7、echart、stylus\n          ")]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:function(n){t.$router.push("/person")}}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("transition",{attrs:{name:"home-fade"}},[s("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.nextPage}},[s("div",{staticClass:"home"},[s("div",{staticClass:"home__bg"},[s("p",{staticClass:"balloon-red"},[t._v("hello")]),t._v(" "),s("p",{staticClass:"balloon-blue",on:{click:t.toResume}},[t._v("entry")])]),t._v(" "),s("div",{staticClass:"home__main",on:{click:t.toResume}},[s("img",{attrs:{src:e(66),alt:""}}),t._v(" "),s("div",{staticClass:"home__main__main"},[s("router-link",{attrs:{to:"/cn"}},[t._v("潘敏敏个人简历")])],1)])])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goSelf,swipedown:function(n){t.$router.push("/kingcore")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("个人项目")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("amma Vue ui 库（开发中）")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            message\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            利用vue提供的extend的API对组件进行包装，添加在原姓链上从而方便调用。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            input\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            对input组件通过emit实现数据的传递，使得vue2中v-model在子组件能通过v-model进行方便使用。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            input\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            对input组件通过emit实现数据的传递，使得vue2中v-model在子组件能通过v-model进行方便使用。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            其他组件\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            下来菜单、switch组件、树形菜单、button组件等\n          ")]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goSelf}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"cn-fade"}},[e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goWork,swipedown:function(n){t.$router.push("/")}}},[e("div",{staticClass:"cn"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("个人信息")])]),t._v(" "),e("div",{staticClass:"cn__main"},[e("div",{staticClass:"cn__title"},[e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-user"}),t._v("\n              姓名:\n            ")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-male"}),t._v("\n              年龄:\n            ")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-phone"}),t._v("\n              电话:\n            ")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-envelope"}),t._v("\n              邮箱:\n            ")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-institution"}),t._v("\n              专业:\n            ")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[e("i",{staticClass:"fa fa-mortar-board"}),t._v("\n              毕业学校:\n            ")])]),t._v(" "),e("div",{staticClass:"cn__content"},[e("p",{staticClass:"cn__title__name"},[t._v("潘敏敏")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("25")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("17712859212")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("173677402@qq.com")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("计算机科学与技术")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("南京中医药大学")])])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goWork}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"en"},[t._v("\n  English\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"home-fade"}},[e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:function(n){t.$router.push("/")},swipedown:function(n){t.$router.push("/self")}}},[e("div",{staticClass:"home",staticStyle:{height:"100%"}},[e("div",{staticClass:"home__bg"}),t._v(" "),e("div",{staticClass:"end__main"},[e("div",{staticClass:"end__main__main"},[e("router-link",{attrs:{to:"/end"}},[t._v("结束了")])],1),t._v(" "),e("p",[e("router-link",{attrs:{to:"/cn"}},[t._v("还想再看一遍吗？"),e("span",[t._v("(点击此处)")])])],1)])])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goEnd}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("自我描述")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"}),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            对于前端\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            热爱前端，关注一些例如掘金等互联网动态。平常喜欢写一些Vue的组件，对于js新特性保持关注。有些时候为了一个问题而睡不找。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            日常使用工具\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            Git，webpack，Atom, sublime，scss\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            其他信息\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[e("span",{staticClass:"blog"},[t._v("个人博客")]),t._v(" "),e("a",{attrs:{href:"http://www.jianshu.com/u/6feba298ece4"}},[t._v("http://www.jianshu.com/u/6feba298ece4")]),t._v(" "),e("span",{staticClass:"github"},[t._v("github")]),t._v(" "),e("a",{attrs:{href:"https://github.com/Amcore"}},[t._v("https://github.com/Amcore")])]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goEnd}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",[e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goProject,swipedown:function(n){t.$router.push("/cn")}}},[e("div",{staticClass:"work"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("工作经历")])]),t._v(" "),e("div",{staticClass:"work__main"},[e("p",{staticClass:"work__tenmaker"},[t._v("南京十匠电子商务有限公司")]),t._v(" "),e("p",{staticClass:"work__tenmaker__time"},[t._v("2016.7～1016.6")])]),t._v(" "),e("div",{staticClass:"work__main"},[e("p",{staticClass:"work__tenmaker"},[t._v("南京1001号自动化科技有限公司")]),t._v(" "),e("p",{staticClass:"work__tenmaker__time"},[t._v("2017.7～至今")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goProject}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:t.goKingcore,swipedown:function(n){t.$router.push("/project")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("3板桥")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            3板桥后台管理系统\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            后台管理员PC端。文章管理（文章编辑，修改，添加文章，富文本编辑器），用户文章评论。用户审核。其中页面用到的组件包括input select button等页面小组件自主完成\n          ")]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goKingcore}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-touch",{staticStyle:{height:"100%"},on:{swipeup:function(n){t.$router.push("/andon")},swipedown:function(n){t.$router.push("/banqiao")}}},[e("div",{staticClass:"project"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])]),t._v(" "),e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("kingcore电商")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            kingcore前台页面\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            语言的选择（利用vuex进行语言状态的读取与选择）\n            首页热销商品的展示\n            商品列表页\n            商品详情页（购买链接外链亚马逊）\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            kingcore后台管理\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            菜单管理，分类管理，产品管理，首页导航管理等，轮播图管理。\n            自行开发菜单列表组件，文件上传组件。分级菜单分级处理。\n          ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n            项目地址\n          ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n            kingCore:\n            "),e("a",{attrs:{href:"http://www.kingcore.tenmaker.com"}},[t._v("www.kingcore.tenmaker.com")]),e("br"),t._v("\n            后台:\n            "),e("a",{attrs:{href:"http://www.eadmin.tenmaker.com"}},[t._v("www.eadmin.tenmaker.com")])]),t._v(" "),e("p")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:function(n){t.$router.push("/andon")}}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.9fefa736ef6c6986bf4e.js.map