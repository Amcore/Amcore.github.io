webpackJsonp([0,2],[,,,,function(t,n,e){"use strict";e.d(n,"b",function(){return a}),e.d(n,"a",function(){return s});var a={GCN:"language/GET_CN",GEN:"language/GET_EN",MCN:"language/LAN_CN",MEN:"language/LAN_EN",ACN:"language/FET_CN",AEN:"language/FET_EN"},s={G:"counter/GET_COUNT",N:"cuunter/GET_EN",F:"counter/FETCH_ALL",T:"counter/SOME_TEST",A:"counter/FETCH_TEST",M:"counter/INCREMENT"}},,,,,,function(t,n,e){"use strict";var a=e(2),s=e(74),c=e(58),i=e(56),r=e(55),o=e(62),_=e(61),l=e(54),u=e(59),v=e(60),f=e(57);a.a.use(s.a),n.a=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/en",name:"en",component:i},{path:"/cn",name:"Cn",component:r},{path:"/work",name:"work",component:o},{path:"/project",name:"project",component:_},{path:"/banqiao",name:"banqiao",component:l},{path:"/kingcore",name:"kingcore",component:u},{path:"/person",name:"person",component:v},{path:"/end",name:"end",component:f},{path:"*",redirect:"/"}]})},function(t,n,e){"use strict";var a=e(2),s=e(76),c=e(19),i=e(18);a.a.use(s.a);var r=new s.a.Store({modules:{language:c.a,counter:i.a}});n.a=r},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){e(46);var a=e(0)(e(20),e(67),null,null);t.exports=a.exports},function(t,n,e){e(43);var a=e(0)(e(21),e(64),"data-v-19be6c2f",null);t.exports=a.exports},function(t,n,e){"use strict";var a,s,c,i=e(5),r=e.n(i),o=e(4),_=o.a.G,l=o.a.F,u=o.a.M,v=o.a.T,f=o.a.A,m=o.a.N,p={state:{count:"en",ad:"cn"},getters:(a={},r()(a,_,function(t){return t.count}),r()(a,m,function(t){return t.ad}),a),mutations:(s={},r()(s,u,function(t){t.count="cn",t.ad="en"}),r()(s,v,function(t){t.count="en",t.ad="cn"}),s),actions:(c={},r()(c,l,function(t){(0,t.commit)(u)}),r()(c,f,function(t){(0,t.commit)(v)}),c)};n.a=p},function(t,n,e){"use strict";var a,s,c,i=e(5),r=e.n(i),o=e(4),_=o.b.GCN,l=o.b.GEN,u=o.b.MCN,v=o.b.MEN,f=o.b.ACN,m=o.b.AEN,p={state:{currentLanguage:"中文",otherLanguage:"EN"},getters:(a={},r()(a,_,function(t){return t.currentLanguage}),r()(a,l,function(t){return t.otherLanguage}),a),mutations:(s={},r()(s,u,function(t){t.currentLanguage="中文",t.otherLanguage="EN"}),r()(s,v,function(t){t.currentLanguage="EN",t.otherLanguage="中文"}),s),actions:(c={},r()(c,f,function(t){(0,t.commit)(u)}),r()(c,m,function(t){(0,t.commit)(v)}),c)};n.a=p},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(52),s=e.n(a);n.default={name:"app",mounted:function(){s.a.attach(document.body,!1),document.body.addEventListener("touchmove",function(t){t.preventDefault()},!1)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goKingcore:function(){this.$router.push("/kingcore")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goWork:function(){this.$router.push("/work")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},components:{},methods:{goEn:function(){window.alert(111)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},components:{},methods:{goEn:function(){window.alert(111)}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goPerson:function(){this.$router.push("/person")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goEnd:function(){this.$router.push("/end")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goBanqiao:function(){this.$router.push("/banqiao")}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{goProject:function(){this.$router.push("/project")}}}},,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n){t.exports="data:image/png;base64,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"},function(t,n,e){e(50);var a=e(0)(e(22),e(72),null,null);t.exports=a.exports},function(t,n,e){e(47);var a=e(0)(e(23),e(68),null,null);t.exports=a.exports},function(t,n,e){var a=e(0)(null,e(69),null,null);t.exports=a.exports},function(t,n,e){e(48);var a=e(0)(e(24),e(70),null,null);t.exports=a.exports},function(t,n,e){e(44);var a=e(0)(e(25),e(65),null,null);t.exports=a.exports},function(t,n,e){e(51);var a=e(0)(e(26),e(73),null,null);t.exports=a.exports},function(t,n,e){e(45);var a=e(0)(e(27),e(66),null,null);t.exports=a.exports},function(t,n,e){e(42);var a=e(0)(e(28),e(63),null,null);t.exports=a.exports},function(t,n,e){e(49);var a=e(0)(e(29),e(71),null,null);t.exports=a.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goBanqiao}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("磐晟云平台")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          用印申请流程\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          包括用印添加，用印审批，用印完成。\n          基于Vue开发，其中部分组件利用了element UI进行开发，Vuex进行用户管理状态。同时也开发了一些公共组件，文件上传组件，用印弹窗等。\n          应用promise 与async await新特性（公司后端用java)\n        ")]),t._v(" "),e("p")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"am-load"},[e("am-icon",{attrs:{name:"loading"}})],1)},staticRenderFns:[]}},function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("transition",{attrs:{name:"home-fade"}},[a("div",{staticClass:"home"},[a("div",{staticClass:"home__bg"}),t._v(" "),a("div",{staticClass:"home__main"},[a("img",{attrs:{src:e(53),alt:""}}),t._v(" "),a("div",{staticClass:"home__main__main"},[a("router-link",{attrs:{to:"/en"}},[t._v("En")]),t._v(" "),a("span",[t._v("/")]),t._v(" "),a("router-link",{attrs:{to:"/cn"}},[t._v("Cn")])],1)])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goEnd}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("kingcore电商")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          kingcore前台页面\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          语言的选择（利用vuex进行语言状态的读取与选择）\n          首页热销商品的展示\n          商品列表页\n          商品详情页（购买链接外链亚马逊）\n        ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          kingcore后台管理\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          阿道夫啦枷梢对方理解啊收到了房间阿里斯顿解放啦枷梢对方\n        ")]),t._v(" "),e("p")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"cn-fade"}},[e("div",{staticClass:"cn"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("个人信息")])]),t._v(" "),e("div",{staticClass:"cn__main"},[e("div",{staticClass:"cn__title"},[e("p",{staticClass:"cn__title__name"},[t._v("姓名:")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("年龄:")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("电话:")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("邮箱:")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("毕业学校:")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("专业:")])]),t._v(" "),e("div",{staticClass:"cn__content"},[e("p",{staticClass:"cn__title__name"},[t._v("潘敏敏")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("25")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("17712859212")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("173677402@qq.com")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("南京中医药大学")]),t._v(" "),e("p",{staticClass:"cn__title__name"},[t._v("计算机科学与技术")])])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goWork}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"en"},[t._v("\n  English\n")])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"home-fade"}},[e("div",{staticClass:"home"},[e("div",{staticClass:"home__bg"}),t._v(" "),e("div",{staticClass:"home__main"},[e("div",{staticClass:"home__main__main"},[e("router-link",{attrs:{to:"/end"}},[t._v("End")])],1),t._v(" "),e("p",[e("router-link",{attrs:{to:"/cn"}},[t._v("还想再看一遍吗？")])],1)])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",[e("div",{staticClass:"work"},[e("div",{staticClass:"cn__banner"},[e("p",[t._v("工作经历")])]),t._v(" "),e("div",{staticClass:"work__main"},[e("p",{staticClass:"work__tenmaker"},[t._v("南京十匠电子商务有限公司")]),t._v(" "),e("p",{staticClass:"work__tenmaker__time"},[t._v("2016.7～至今")])]),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goProject}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goKingcore}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("3板桥")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          3板桥后台管理系统\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          后台管理员PC端。文章管理（文章编辑，修改，添加文章，富文本编辑器），用户文章评论。用户审核。其中页面用到的组件包括input select button等页面小组件自主完成\n        ")]),t._v(" "),e("p")])])}]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"page__next",on:{click:t.goPerson}},[e("i",{staticClass:"arrow-first fa fa-caret-down"}),t._v(" "),e("i",{staticClass:"arrow-last fa fa-chevron-down"})])])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cn__banner"},[e("p",[t._v("项目经验")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"project__main"},[e("div",{staticClass:"project__main__item"},[e("p",{staticClass:"item__name"},[t._v("kingcore电商")]),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          kingcore前台页面\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          语言的选择（利用vuex进行语言状态的读取与选择）\n          首页热销商品的展示\n          商品列表页\n          商品详情页（购买链接外链亚马逊）\n        ")]),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"item__content"}),e("p",{staticClass:"item__content__title"},[t._v("\n          kingcore后台管理\n        ")]),t._v(" "),e("p",{staticClass:"item__content__content"},[t._v("\n          阿道夫啦枷梢对方理解啊收到了房间阿里斯顿解放啦枷梢对方\n        ")]),t._v(" "),e("p")])])}]}},,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),s=e(16),c=e.n(s),i=e(10),r=e(11),o=e(15),_=e.n(o),l=e(17),u=e.n(l),v=e(14),f=(e.n(v),e(13)),m=(e.n(f),e(12));e.n(m);a.a.component("am-icon",_.a),a.a.component("AmLoad",u.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,store:r.a,template:"<App/>",components:{App:c.a}})}],[78]);
//# sourceMappingURL=app.fd9c48848bc342f3526f.js.map