(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{450:function(e,r,t){"use strict";t(190);var n=t(194);r.a=Object(n.a)("flex")},451:function(e,r,t){"use strict";var n=t(2),o=(t(42),t(64),t(195),t(9),t(8),t(57),t(148),t(7),t(6),t(12),t(13),t(10)),c=t(90),d=t(120);function l(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}r.a=Object(o.a)(c.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var r=Object.values(e).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,r=function(input){return input.$watch("hasError",(function(r){e.$set(e.errorBag,input._uid,r)}),{immediate:!0})},t={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?t.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(t.valid=r(input)))})):t.valid=r(input),t},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var r=this.watchers.find((function(i){return i._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var r=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return r.$emit("submit",e)}}},this.$slots.default)}})},452:function(e,r,t){"use strict";t(190);var n=t(194);r.a=Object(n.a)("layout")},509:function(e,r,t){"use strict";t.r(r);var n=t(31),o=(t(100),t(30),{name:"Profile",data:function(){return{user:{name:this.$auth.user.name,email:this.$auth.user.email},error:null,show:!1,changePassword:{current_password:null,password:null,password_confirmation:null}}},methods:{updateProfile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.error=null,t={name:e.user.name,email:e.user.email},e.changePassword.current_password&&e.changePassword.password&&e.changePassword.password_confirmation&&(t.current_password=e.changePassword.current_password,t.password=e.changePassword.password,t.password_confirmation=e.changePassword.password_confirmation),r.next=5,e.$axios.$post("/user",t).then((function(r){return e.$notifier.showMessage({content:r.message,color:"success"})})).catch((function(r){return e.$notifier.showMessage({content:r.response.data.message,color:"error"})}));case 5:if(!e.error){r.next=7;break}return r.abrupt("return");case 7:e.$auth.fetchUser();case 8:case"end":return r.stop()}}),r)})))()}}}),c=t(56),d=t(63),l=t.n(d),f=t(204),h=t(403),w=t(402),m=t(184),v=t(450),_=t(451),x=t(174),P=t(452),y=t(399),O=t(501),V=t(50),$=t(188),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("v-card",{staticClass:"elevation-12"},[t("v-form",{on:{submit:function(r){return r.preventDefault(),e.updateProfile.apply(null,arguments)}}},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-toolbar-title",[e._v("My Profile")])],1),e._v(" "),t("v-card-text",[t("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"name",label:"Name",type:"text"},model:{value:e.user.name,callback:function(r){e.$set(e.user,"name",r)},expression:"user.name"}}),e._v(" "),t("v-text-field",{attrs:{"prepend-icon":"mdi-email",name:"email",label:"E-mail",type:"text"},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),e._v(" "),e.error?t("v-card-text",{staticClass:"red--text"},[e._v("\n                    "+e._s(e.error)+"                        \n                ")]):e._e(),e._v(" "),t("v-card-actions",[t("v-btn",{attrs:{color:"blue",text:""},on:{click:function(r){e.show=!e.show}}},[e._v("\n                    Change Password\n                ")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:""},on:{click:function(r){e.show=!e.show}}},[t("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e._v(" "),t("v-expand-transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[t("v-card-text",[t("v-text-field",{attrs:{id:"current_password","prepend-icon":"mdi-lock",name:"current_password",label:"Current Password",type:"password"},model:{value:e.changePassword.current_password,callback:function(r){e.$set(e.changePassword,"current_password",r)},expression:"changePassword.current_password"}}),e._v(" "),t("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",name:"password",label:"New password",type:"password"},model:{value:e.changePassword.password,callback:function(r){e.$set(e.changePassword,"password",r)},expression:"changePassword.password"}}),e._v(" "),t("v-text-field",{attrs:{id:"password_confirmation","prepend-icon":"mdi-lock",name:"password_confirmation",label:"Confirm new password",type:"password"},model:{value:e.changePassword.password_confirmation,callback:function(r){e.$set(e.changePassword,"password_confirmation",r)},expression:"changePassword.password_confirmation"}})],1)],1)]),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary",type:"submit"}},[e._v("Update")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;l()(component,{VBtn:f.a,VCard:h.a,VCardActions:w.a,VCardText:w.c,VExpandTransition:m.a,VFlex:v.a,VForm:_.a,VIcon:x.a,VLayout:P.a,VSpacer:y.a,VTextField:O.a,VToolbar:V.a,VToolbarTitle:$.a})}}]);