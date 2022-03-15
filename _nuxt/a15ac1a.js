(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{616:function(t,e,n){"use strict";n.r(e);var r=n(32),o=(n(101),n(60),n(33),{props:["settles"],data:function(){return{headers:[{text:"Name",value:"name"},{text:"Date",value:"date"},{text:"Bills",value:"bills"},{text:"Group",value:"group"},{text:"Settled",value:"settled"},{text:"Total",value:"total"},{text:"Actions",value:"actions",align:"right"}]}},computed:{tableData:function(){return this.settles.map((function(t){return{id:t.id,name:t.name,bills:t.bills.length,group:t.group.name,total:t.total,date:t.date?new Date(t.date).toLocaleDateString():"",settled:t.settled?"Yes":"No",actions:null,settle:t}}))}},methods:{toggleSettled:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$patch("/settles/".concat(t.id),{settled:!t.settled}).then((function(t){e.$notifier.showMessage({content:t.message,color:"success"}),$nuxt.$emit("settle-updated",t.data)})).catch((function(t){return e.$notifier.showMessage({content:t.response.data.message,color:"error"})}));case 2:case"end":return n.stop()}}),n)})))()},destroySettle:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(confirm("Are you sure? All bills settled will return to unsettled!")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,e.$axios.$delete("/settles/".concat(t.id)).then((function(n){e.$notifier.showMessage({content:n.message,color:"success"}),$nuxt.$emit("settle-deleted",t)})).catch((function(t){return e.$notifier.showMessage({content:t.response.data.message,color:"error"})}));case 4:case"end":return n.stop()}}),n)})))()}}}),l=n(59),c=n(66),d=n.n(c),v=n(194),f=n(684),m=n(175),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tableData,"items-per-page":5},scopedSlots:t._u([{key:"item.settled",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:"",color:"primary",title:"Toggle Settle"},on:{click:function(e){return t.toggleSettled(r.settle)}}},[r.settle.settled?n("v-icon",[t._v("mdi-check")]):n("v-icon",[t._v("mdi-timer-sand-empty")])],1)]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{icon:"",color:"primary",title:"Edit",to:"/settles/"+r.id+"/edit"}},[n("v-icon",[t._v("mdi-pen")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"primary",title:"View",to:"/settles/"+r.id}},[n("v-icon",[t._v("mdi-eye")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"error",title:"Destroy"},on:{click:function(e){return t.destroySettle(r.settle)}}},[n("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VDataTable:f.a,VIcon:m.a})},690:function(t,e,n){"use strict";n.r(e);var r=n(32),o=(n(60),n(8),n(101),{components:{SettlesTable:n(616).default},data:function(){return{settles:null}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/settles").then((function(e){return t.settles=e.data})).catch((function(e){t.$notifier.showMessage({content:e.response.data.message,color:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;$nuxt.$on("settle-updated",(function(e){t.settles=t.settles.map((function(s){return s.id==e.id?e:s}))})),$nuxt.$on("settle-deleted",(function(e){t.settles=t.settles.filter((function(s){return e.id!=s.id}))}))}}),l=n(59),c=n(66),d=n.n(c),v=n(548),f=n(546),m=n(605),h=n(541),x=n(582),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[t._v("\n            Settles\n        ")]),t._v(" "),n("v-card-text",[t.settles?n("div",[n("settles-table",{attrs:{settles:t.settles}})],1):n("div",[n("v-skeleton-loader",{attrs:{type:"table"}})],1),t._v(" "),t.settles&&0==t.settles.length?n("div",[n("v-col",{attrs:{cols:"12",md:"8",lg:"6"}},[t._v("\n                    No settles here\n                ")])],1):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SettlesTable:n(616).default}),d()(component,{VCard:v.a,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VContainer:h.a,VSkeletonLoader:x.a})}}]);