(window.webpackJsonp=window.webpackJsonp||[]).push([[26,17],{440:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(100),{props:["group"],computed:{isActive:function(){return this.$auth.user.active_group_id==this.group.id},btnColor:function(){return this.isActive?"success":"primary"},btnText:function(){return this.isActive?"Active":"Set active"}},methods:{setActive:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isActive){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.$patch("/user/activegroup",{active_group_id:t.group.id}).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),t.$auth.fetchUser()}));case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pr-2"},[r("v-btn",{attrs:{color:t.btnColor},on:{click:t.setActive}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a})},441:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(100),{data:function(){return{dialog:!1}},props:["group"],methods:{destroy:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/groups/".concat(t.group.id)).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),$nuxt.$emit("group-deleted",t.group),t.$auth.fetchUser()})).catch((function(e){return t.$notifier.showMessage({content:e.response.data.message,color:"error"})}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),f=r(403),m=r(402),_=r(434),h=r(174),x=r(399),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{scrollable:"",overlay:!1,"max-width":"500",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Delete group ")]),t._v(" "),r("v-card-text",{staticClass:"d-flex flex-column"},[r("span",[t._v("Are you sure?")]),t._v(" "),r("span",[t._v("There is no way to undo it!")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:t.destroy}},[t._v("Delete")])],1)],1)],1),t._v(" "),r("div",{staticClass:"pr-2"},[r("v-btn",{attrs:{color:"error",outlined:"",title:"Delete"},on:{click:function(e){t.dialog=!0}}},[r("v-icon",[t._v("mdi-delete")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VIcon:h.a,VSpacer:x.a})},442:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(100),r(30),r(6),r(51),{props:["group"],data:function(){return{dialog:!1,form:{name:this.group.name,description:this.group.description},errors:{}}},methods:{save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$patch("/groups/".concat(t.group.id),t.form).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),t.dialog=!1,t.errors={},$nuxt.$emit("group-updated",e.group),t.$auth.fetchUser()})).catch((function(e){t.$notifier.showMessage({content:e.response.data.message,color:"error"}),t.errors=e.response.data.errors}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),f=r(403),m=r(402),_=r(434),h=r(174),x=r(399),w=r(501),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-dialog",{attrs:{scrollable:"",overlay:!1,"max-width":"290",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Edit group ")]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{name:"name",label:"Name",id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Description",id:"description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),t._l(t.errors,(function(e,n,o){return r("span",{key:o,staticClass:"red--text"},[t._v(t._s(e[0])),r("br")])}))],2),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("Save")])],1)],1)],1),t._v(" "),r("div",{staticClass:"pr-2"},[r("v-btn",{attrs:{color:"primary",outlined:"",title:"Edit"},on:{click:function(e){t.dialog=!0}}},[r("v-icon",[t._v("mdi-pencil")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VIcon:h.a,VSpacer:x.a,VTextField:w.a})},443:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(100),{props:["group"],data:function(){return{dialog:!1,text:"Create a url for invitation.",url:"<waiting invitation!>",invited:!1}},methods:{invite:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/group_invitation",{group_id:t.group.id}).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),t.text="Great! Now copy and share the invite below.",t.url=e.url,t.invited=!0})).catch((function(e){return t.$notifier.showMessage({content:e.response.data.message,color:"error"})}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{dialog:function(t){t||(this.text="Create a url for invitation.",this.url="<waiting invitation!>",this.invited=!1)}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),f=r(403),m=r(402),_=r(434),h=r(174),x=r(399),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-dialog",{attrs:{scrollable:"",overlay:!1,"max-width":"290",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Invite a member ")]),t._v(" "),r("v-card-text",[r("p",[t._v(t._s(t.text))]),t._v(" "),r("p",[t._v(t._s(t.url))])]),t._v(" "),t.invited?r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"success"},on:{click:function(e){t.dialog=!1}}},[t._v("Ok")])],1):r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.invite}},[t._v("Invite")])],1)],1)],1),t._v(" "),r("div",{staticClass:"pb-2"},[r("v-btn",{attrs:{color:"primary",outlined:"",block:"",title:"Invite member"},on:{click:function(e){t.dialog=!0}}},[r("v-icon",[t._v("mdi-account-multiple-plus")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VIcon:h.a,VSpacer:x.a})},458:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(100),{props:["group"],setup:function(){},data:function(){return{showMembers:!1}},methods:{destroy:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/groups/".concat(t.group.id)).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),$nuxt.$emit("group-deleted",t.group)}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),f=r(403),m=r(402),_=r(397),h=r(184),x=r(174),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto"},[r("v-card-title",[t._v("\n    "+t._s(t.group.name)+"\n  ")]),t._v(" "),r("v-card-subtitle",[t._v("\n    "+t._s(t.group.description)+"\n  ")]),t._v(" "),r("v-card-actions",{staticClass:"d-flex flex-row flex-wrap"},[r("div",{staticClass:"pr-2"},[r("v-btn",{attrs:{color:"primary",outlined:!t.showMembers,title:"Members"},on:{click:function(e){t.showMembers=!t.showMembers}}},[r("v-icon",[t._v("mdi-account-multiple")])],1)],1),t._v(" "),r("GroupsSetActiveGroupBtn",{attrs:{group:t.group}}),t._v(" "),this.$auth.user.id==t.group.owner_id?r("GroupsDestroyGroupBtn",{attrs:{group:t.group}}):t._e(),t._v(" "),this.$auth.user.id==t.group.owner_id?r("GroupsEditGroupDialog",{attrs:{group:t.group}}):t._e()],1),t._v(" "),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showMembers,expression:"showMembers"}]},[r("v-divider"),t._v(" "),r("v-card-text",[this.$auth.user.id==t.group.owner_id?r("GroupsInviteMemberBtn",{attrs:{group:t.group}}):t._e(),t._v(" "),t._l(t.group.users,(function(e){return r("div",{key:e.id},[t._v("\n            "+t._s(e.name)+"\n        ")])}))],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{GroupsSetActiveGroupBtn:r(440).default,GroupsDestroyGroupBtn:r(441).default,GroupsEditGroupDialog:r(442).default,GroupsInviteMemberBtn:r(443).default}),d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VDivider:_.a,VExpandTransition:h.a,VIcon:x.a})},459:function(t,e,r){"use strict";r.r(e);var n={},o=r(56),c=r(63),l=r.n(c),d=r(403),v=r(402),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto"},[r("v-card-title",[t._v("\n    Create your first group\n  ")]),t._v(" "),r("v-card-subtitle",[t._v("\n    Click the plus sign and create a new group!\n  ")]),t._v(" "),r("v-card-actions")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardActions:v.a,VCardSubtitle:v.b,VCardTitle:v.d})},460:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(30),r(6),r(51),r(100),{data:function(){return{dialog:!1,form:{name:"",description:""},errors:{}}},methods:{create:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/groups",t.form).then((function(e){t.$notifier.showMessage({content:e.message,color:"success"}),t.closeDialogAndClearInputs(),t.errors={},$nuxt.$emit("group-created",e.group)})).catch((function(e){t.$notifier.showMessage({content:e.response.data.message,color:"error"}),t.errors=e.response.data.errors}));case 2:case"end":return e.stop()}}),e)})))()},closeDialogAndClearInputs:function(){this.dialog=!1,this.form.name="",this.form.description="",this.errors={}}}}),c=r(56),l=r(63),d=r.n(l),v=r(204),f=r(403),m=r(402),_=r(434),h=r(174),x=r(497),w=r(399),C=r(501),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{scrollable:"",overlay:!1,"max-width":"290",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Create a new Group ")]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{name:"name",label:"Name",id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),r("v-text-field",{attrs:{name:"description",label:"Description",id:"description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),t._l(t.errors,(function(e,n,o){return r("span",{key:o,staticClass:"red--text"},[t._v(t._s(e[0])),r("br")])}))],2),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary"},on:{click:t.closeDialogAndClearInputs}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.create}},[t._v("Create")])],1)],1)],1),t._v(" "),r("v-btn",{attrs:{color:"primary",fab:"",large:"",dark:"",bottom:"",right:"",fixed:"",title:"Create a new Group"},on:{click:function(e){t.dialog=!0}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VIcon:h.a,VRow:x.a,VSpacer:w.a,VTextField:C.a})},503:function(t,e,r){"use strict";r.r(e);var n=r(31),o=(r(9),r(66),r(100),{data:function(){return{groups:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/groups").then((function(e){return t.groups=e}));case 2:case"end":return e.stop()}}),e)})))()},created:function(){var t=this;$nuxt.$on("group-created",(function(e){t.groups.push(e)})),$nuxt.$on("group-deleted",(function(e){t.groups=t.groups.filter((function(g){return g.id!=e.id}))})),$nuxt.$on("group-updated",(function(e){t.groups=t.groups.map((function(g){return g.id==e.id?e:g}))}))}}),c=r(56),l=r(63),d=r.n(l),v=r(433),f=r(396),m=r(497),_=r(448),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[t.groups?r("v-row",t._l(t.groups,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",md:"8",lg:"6"}},[r("GroupsGroupCard",{attrs:{group:t}})],1)})),1):r("v-row",[r("v-skeleton-loader",{attrs:{type:"card",width:"200"}})],1),t._v(" "),t.groups&&0==t.groups.length?r("v-row",[r("v-col",{attrs:{cols:"12",md:"8",lg:"6"}},[r("GroupsEmptyGroups")],1)],1):t._e()],1),t._v(" "),r("GroupsCreateGroupDialog")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{GroupsGroupCard:r(458).default,GroupsEmptyGroups:r(459).default,GroupsCreateGroupDialog:r(460).default}),d()(component,{VCol:v.a,VContainer:f.a,VRow:m.a,VSkeletonLoader:_.a})}}]);