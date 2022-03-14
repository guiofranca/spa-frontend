(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{182:function(t,e,n){"use strict";e.a=function(t,e){t.app;var n=t.store;e("notifier",{showMessage:function(t){var e=t.content,content=void 0===e?"":e,o=t.color,r=void 0===o?"":o;n.commit("snackbar/showMessage",{content:content,color:r})}})}},183:function(t,e,n){"use strict";var o=n(1),r=n(398),c=n.n(r);o.a.use(c.a)},184:function(t,e,n){"use strict";var o=n(1),r=n(188);o.a.component("line-chart",{extends:r.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),o.a.component("doughnut-chart",{extends:r.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},185:function(t,e,n){"use strict";n(60),n(20),n(56);e.a=function(t,e){var n=t.$config.COLOR_SEED;e("chartColor",{get:function(t){return t.map((function(t){var e=null!=n?n:25e3;if(0===t.length)return e;for(var i=0;i<t.length;i++)e=t.charCodeAt(i)+((e<<5)-e),e&=e;var o="#";for(i=0;i<3;i++){o+=("00"+(e>>8*i&255).toString(16)).substr(-2)}return o}))}})}},245:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("12eb9b0e",content,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";var o={name:"default",data:function(){return{clipped:!0,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-account-multiple",title:"Groups",to:"/groups"},{icon:"mdi-cash",title:"Bills",to:"/bills"},{icon:"mdi-scale-balance",title:"Settles",to:"/settles"}],miniVariant:!1,title:"Splitabilly"}},mounted:function(){var t=localStorage.getItem("darkMode");t&&(this.$vuetify.theme.dark="true"==t)}},r=n(59),c=n(66),l=n.n(c),v=n(538),d=n(545),m=n(540),j=n(194),h=n(541),f=n(531),_=n(175),k=n(177),x=n(111),w=n(176),y=n(49),V=n(542),z=n(543),C=n(544),I=n(193),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("Snackbar"),t._v(" "),n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{},[this.$auth.loggedIn?n("div",[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t._v(" "),n("v-divider")],2):t._e(),t._v(" "),n("div",{},[n("DrawerUserAuthInfo")],1)])],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:"","fade-img-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"default",rounded:"",fab:"",small:"",href:"https://github.com/guiofranca/spa-backend",title:"Backend",depressed:""}},[n("v-icon",[t._v("mdi-github")])],1),t._v(" "),n("v-btn",{attrs:{color:"default",rounded:"",fab:"",small:"",href:"https://github.com/guiofranca/spa-frontend",title:"Frontend",depressed:""}},[n("v-icon",[t._v("mdi-github")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Snackbar:n(528).default,DrawerUserAuthInfo:n(529).default}),l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:j.a,VContainer:h.a,VDivider:f.a,VIcon:_.a,VList:k.a,VListItem:x.a,VListItemAction:w.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:V.a,VNavigationDrawer:z.a,VSpacer:C.a,VToolbarTitle:I.a})},415:function(t,e,n){n(416),t.exports=n(417)},436:function(t,e,n){"use strict";n.r(e);n(31),n(54);e.default=function(t){var path=t.route.hash.replace("#!","");path.length&&t.redirect(path)}},444:function(t,e,n){"use strict";n(245)},445:function(t,e,n){var o=n(18)(!1);o.push([t.i,"h1[data-v-42013d8f]{font-size:20px}",""]),t.exports=o},506:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{content:"",color:""}},r={showMessage:function(t,e){t.content=e.content,t.color=e.color}}},507:function(t,e){},526:function(t,e,n){var map={"./af":259,"./af.js":259,"./ar":260,"./ar-dz":261,"./ar-dz.js":261,"./ar-kw":262,"./ar-kw.js":262,"./ar-ly":263,"./ar-ly.js":263,"./ar-ma":264,"./ar-ma.js":264,"./ar-sa":265,"./ar-sa.js":265,"./ar-tn":266,"./ar-tn.js":266,"./ar.js":260,"./az":267,"./az.js":267,"./be":268,"./be.js":268,"./bg":269,"./bg.js":269,"./bm":270,"./bm.js":270,"./bn":271,"./bn-bd":272,"./bn-bd.js":272,"./bn.js":271,"./bo":273,"./bo.js":273,"./br":274,"./br.js":274,"./bs":275,"./bs.js":275,"./ca":276,"./ca.js":276,"./cs":277,"./cs.js":277,"./cv":278,"./cv.js":278,"./cy":279,"./cy.js":279,"./da":280,"./da.js":280,"./de":281,"./de-at":282,"./de-at.js":282,"./de-ch":283,"./de-ch.js":283,"./de.js":281,"./dv":284,"./dv.js":284,"./el":285,"./el.js":285,"./en-au":286,"./en-au.js":286,"./en-ca":287,"./en-ca.js":287,"./en-gb":288,"./en-gb.js":288,"./en-ie":289,"./en-ie.js":289,"./en-il":290,"./en-il.js":290,"./en-in":291,"./en-in.js":291,"./en-nz":292,"./en-nz.js":292,"./en-sg":293,"./en-sg.js":293,"./eo":294,"./eo.js":294,"./es":295,"./es-do":296,"./es-do.js":296,"./es-mx":297,"./es-mx.js":297,"./es-us":298,"./es-us.js":298,"./es.js":295,"./et":299,"./et.js":299,"./eu":300,"./eu.js":300,"./fa":301,"./fa.js":301,"./fi":302,"./fi.js":302,"./fil":303,"./fil.js":303,"./fo":304,"./fo.js":304,"./fr":305,"./fr-ca":306,"./fr-ca.js":306,"./fr-ch":307,"./fr-ch.js":307,"./fr.js":305,"./fy":308,"./fy.js":308,"./ga":309,"./ga.js":309,"./gd":310,"./gd.js":310,"./gl":311,"./gl.js":311,"./gom-deva":312,"./gom-deva.js":312,"./gom-latn":313,"./gom-latn.js":313,"./gu":314,"./gu.js":314,"./he":315,"./he.js":315,"./hi":316,"./hi.js":316,"./hr":317,"./hr.js":317,"./hu":318,"./hu.js":318,"./hy-am":319,"./hy-am.js":319,"./id":320,"./id.js":320,"./is":321,"./is.js":321,"./it":322,"./it-ch":323,"./it-ch.js":323,"./it.js":322,"./ja":324,"./ja.js":324,"./jv":325,"./jv.js":325,"./ka":326,"./ka.js":326,"./kk":327,"./kk.js":327,"./km":328,"./km.js":328,"./kn":329,"./kn.js":329,"./ko":330,"./ko.js":330,"./ku":331,"./ku.js":331,"./ky":332,"./ky.js":332,"./lb":333,"./lb.js":333,"./lo":334,"./lo.js":334,"./lt":335,"./lt.js":335,"./lv":336,"./lv.js":336,"./me":337,"./me.js":337,"./mi":338,"./mi.js":338,"./mk":339,"./mk.js":339,"./ml":340,"./ml.js":340,"./mn":341,"./mn.js":341,"./mr":342,"./mr.js":342,"./ms":343,"./ms-my":344,"./ms-my.js":344,"./ms.js":343,"./mt":345,"./mt.js":345,"./my":346,"./my.js":346,"./nb":347,"./nb.js":347,"./ne":348,"./ne.js":348,"./nl":349,"./nl-be":350,"./nl-be.js":350,"./nl.js":349,"./nn":351,"./nn.js":351,"./oc-lnc":352,"./oc-lnc.js":352,"./pa-in":353,"./pa-in.js":353,"./pl":354,"./pl.js":354,"./pt":355,"./pt-br":356,"./pt-br.js":356,"./pt.js":355,"./ro":357,"./ro.js":357,"./ru":358,"./ru.js":358,"./sd":359,"./sd.js":359,"./se":360,"./se.js":360,"./si":361,"./si.js":361,"./sk":362,"./sk.js":362,"./sl":363,"./sl.js":363,"./sq":364,"./sq.js":364,"./sr":365,"./sr-cyrl":366,"./sr-cyrl.js":366,"./sr.js":365,"./ss":367,"./ss.js":367,"./sv":368,"./sv.js":368,"./sw":369,"./sw.js":369,"./ta":370,"./ta.js":370,"./te":371,"./te.js":371,"./tet":372,"./tet.js":372,"./tg":373,"./tg.js":373,"./th":374,"./th.js":374,"./tk":375,"./tk.js":375,"./tl-ph":376,"./tl-ph.js":376,"./tlh":377,"./tlh.js":377,"./tr":378,"./tr.js":378,"./tzl":379,"./tzl.js":379,"./tzm":380,"./tzm-latn":381,"./tzm-latn.js":381,"./tzm.js":380,"./ug-cn":382,"./ug-cn.js":382,"./uk":383,"./uk.js":383,"./ur":384,"./ur.js":384,"./uz":385,"./uz-latn":386,"./uz-latn.js":386,"./uz.js":385,"./vi":387,"./vi.js":387,"./x-pseudo":388,"./x-pseudo.js":388,"./yo":389,"./yo.js":389,"./zh-cn":390,"./zh-cn.js":390,"./zh-hk":391,"./zh-hk.js":391,"./zh-mo":392,"./zh-mo.js":392,"./zh-tw":393,"./zh-tw.js":393};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=526},528:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{show:!1,message:"",color:""}},created:function(){var t=this;this.$store.subscribe((function(e,n){"snackbar/showMessage"===e.type&&(t.message=n.snackbar.content,t.color=n.snackbar.color,t.show=!0)}))}},r=n(59),c=n(66),l=n.n(c),v=n(194),d=n(175),m=n(539),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{color:t.color,top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{icon:""},on:{click:function(e){t.show=!1}}},"v-btn",o,!1),[n("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("span",{staticClass:"text-no-wrap"},[t._v(t._s(t.message))])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VIcon:d.a,VSnackbar:m.a})},529:function(t,e,n){"use strict";n.r(e);var o={methods:{logout:function(){var t=this;this.$auth.logout().then((function(e){return t.$router.push("/login")}))},toggleDarkMode:function(){var t="true"!=localStorage.getItem("darkMode");this.$vuetify.theme.dark=t,localStorage.setItem("darkMode",t)}}},r=n(59),c=n(66),l=n.n(c),v=n(175),d=n(111),m=n(176),j=n(49),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[this.$auth.loggedIn?n("div",[this.$auth.user.data.active_group_id?n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v("mdi-cash-register")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(this.$auth.user.data.active_group.name)}})],1)],1):n("v-list-item",{attrs:{to:"/groups",router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-plus")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Group")}})],1)],1),t._v(" "),n("v-list-item",{on:{click:t.toggleDarkMode}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-brightness-6")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Toggle dark mode")}})],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/profile"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-account")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(this.$auth.user.data.name)}})],1)],1),t._v(" "),n("v-list-item",{on:{click:t.logout}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-export")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Logout")}})],1)],1)],1):n("div",[n("v-list-item",{attrs:{to:"/register",router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-plus")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Register")}})],1)],1),t._v(" "),n("v-list-item",{attrs:{to:"/Login",router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-plus")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s("Login")}})],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:v.a,VListItem:d.a,VListItemAction:m.a,VListItemContent:j.a,VListItemTitle:j.b})},79:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){var title=console.log(this.error);return 404===this.error.statusCode?this.pageNotFound:this.otherError,{title:title}}},r=(n(444),n(59)),c=n(66),l=n.n(c),v=n(538),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),404===t.error.statusCode?n("h1",[t._v("\n    Eita preula\n  ")]):t._e(),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"42013d8f",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[415,45,7,46]]]);