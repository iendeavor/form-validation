/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,r,n,t){return new(n||(n=Promise))((function(o,i){function a(e){try{u(t.next(e))}catch(e){i(e)}}function c(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,c)}u((t=t.apply(e,r||[])).next())}))}function r(e,r){var n,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],t=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function n(e){return Object.prototype.toString.call(e)}function t(e){return"[object Array]"===n(e)}function o(e){return null!==e&&"object"==typeof e&&function(e){return"function"==typeof e}(e.then)}function i(e,r){if(0===r.length)return e;var n=e;return r.slice(0,-1).forEach((function(e){n=n[e]})),n[r[r.length-1]]}function a(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]}var c="__form_validation__",u=function(e){var r=e.object,o=e.clone,i=e.path,a=e.callback;if(function(e,r,n){var t;if(void 0===e.__form_reactive)e[c]=((t={}).path=r,t.listener=[],t),e.$v={},Object.defineProperty(e,"__form_reactive",{enumerable:!1,value:e}),n(e)}(o,i,a),!1===function(e){return"[object Object]"===n(e)}(r)&&!1===t(r))return r;for(var l=0,s=Object.keys(r);l<s.length;l++){var v=s[l];Reflect.set(o,v,o[v]||(t(r)?[]:{})),r[v]=u({object:r[v],clone:o[v],path:i.concat(v),callback:a})}return new Proxy(r,{deleteProperty:function(e,r){Reflect.deleteProperty(o,r);for(var n=Reflect.deleteProperty(e,r),t=0,i=o[c].listener;t<i.length;t++){(0,i[t])(o[c].path.concat(r))}return n},set:function(e,r,n){var l=Reflect.set(e,r,n);Reflect.set(o,r,o[r]||(t(e)?[]:{})),n=u({object:n,clone:o[r],path:i.concat(r),callback:a});for(var s=0,v=o[c].listener;s<v.length;s++){(0,v[s])(o[c].path.concat(r))}return l}})},l={},s=function(e){return e.value},v={},f={};var d=function(e){return function(r){e[c].invalid=r,m(e),j(e),k(e)}},h=function(e){return function(r){e[c].dirty=r,b(e),g(e),j(e),k(e)}},$=function(e){return function(r){e[c].pending+=!0===r?1:-1,y(e),m(e),j(e),k(e)}},p=function(e){return function(){e[c].pending=0,y(e),m(e),j(e),k(e)}},y=function(e){e.$v.pending=0!==e[c].pending||w(e).some((function(e){return e.$v.pending}))},m=function(e){e.$v.invalid=e[c].invalid&&0===e[c].pending||w(e).some((function(e){return e.$v.invalid}))},b=function(e){e.$v.dirty=e[c].dirty||0!==w(e).length&&w(e).every((function(e){return e.$v.dirty}))},g=function(e){e.$v.anyDirty=e[c].dirty||w(e).some((function(e){return e.$v.anyDirty}))},j=function(e){e.$v.error=e[c].dirty&&e[c].invalid&&0===e[c].pending},k=function(e){e.$v.anyError=e[c].dirty&&e[c].invalid&&0===e[c].pending||w(e).some((function(e){return e.$v.anyError}))},w=function(e){return Object.keys(e).filter((function(e){return e!==c&&"$v"!==e})).map((function(r){return e[r]}))},R=function(e){var r=e.form,n=e.schema,t=e.validator;return function(e){var r=e.object,n=e.clone,t=e.callback;return u({object:r,clone:n,path:[],callback:void 0===t?a:t})}({object:r,clone:t,callback:function(e){!function(e){var r=e;r[c].invalid=!1,r[c].pending=0,r[c].dirty=!1,r[c].setInvalid=d(r),r[c].setDirty=h(r),r[c].setPending=$(r),r[c].resetPending=p(r),r.$v.pending=!1,r.$v.invalid=!1,r.$v.dirty=!1,r.$v.anyDirty=!1,r.$v.error=!1,r.$v.anyError=!1,r.$v.errors={}}(e),function(e){var r,n=e.rootSchema,t=e.validator,o=t[c].path;if(t[c].schema=t[c].schema||{},t[c].schema.$params=l,t[c].schema.$normalizer=s,t[c].schema.$rules=v,t[c].schema.$errors=f,0!==o.length){try{r=i(n,o.slice(0,-1).concat("$iter"))}catch(e){}r&&(void 0!==r.$params&&(t[c].schema.$params=r.$params),void 0!==r.$normalizer&&(t[c].schema.$normalizer=r.$normalizer),void 0!==r.$rules&&(t[c].schema.$rules=r.$rules),void 0!==r.$errors&&(t[c].schema.$errors=r.$errors))}try{r=i(n,o)}catch(e){}r&&(void 0!==r.$params&&(t[c].schema.$params=r.$params),void 0!==r.$normalizer&&(t[c].schema.$normalizer=r.$normalizer),void 0!==r.$rules&&(t[c].schema.$rules=r.$rules),void 0!==r.$errors&&(t[c].schema.$errors=r.$errors))}({rootSchema:n,validator:e}),P(r,e)}})},P=function(n,t){var a=t[c].schema,u=null;t.$v.validate=function(){t[c].setInvalid(!1),t[c].resetPending(),t.$v.errors={},u=null;for(var l=function(n){for(var t,a=n.rootForm,u=n.validator,l=u[c].schema.$params,s=u[c].schema.$normalizer,v=u[c].schema.$rules,f=u[c].schema.$errors,d=a,h=u[c].path,$=0===h.length?void 0:i(a,h.slice(0,-1)),p=0===h.length?void 0:h[h.length-1],y=s({value:0===h.length?a:i(a,h),key:p,parent:$,path:h,root:d,params:l}),m=((t={}).$rulsResult={},t),b=function(n){var t={value:y,key:p,parent:$,path:h,root:d,params:l},i=v[n](t);m.$rulsResult[n]=i,m[n]=void 0,o(i)?i.finally((function(){return e(void 0,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,i];case 1:return void 0!==e.sent()&&(m[n]=f[n](t)),[2]}}))}))})):void 0!==i&&(m[n]=f[n](t))},g=0,j=Object.keys(v);g<j.length;g++){b(j[g])}return m}({rootForm:n,validator:t}),s=function(n){o(l.$rulsResult[n])?(t[c].setPending(!0),l.$rulsResult[n].finally((function(){return e(void 0,void 0,void 0,(function(){var e,o;return r(this,(function(r){switch(r.label){case 0:return u!==l.$rulsResult?[2]:[4,l.$rulsResult[n]];case 1:return void 0===r.sent()?[3,3]:(t[c].setInvalid(!0),e=t.$v.errors,o=n,[4,l[n]]);case 2:e[o]=r.sent(),r.label=3;case 3:return t[c].setPending(!1),[2]}}))}))}))):void 0!==l.$rulsResult[n]&&(t[c].setInvalid(!0),t.$v.errors[n]=l[n])},v=0,f=Object.keys(a.$rules);v<f.length;v++){s(f[v])}u=l.$rulsResult;for(var d=0,h=Object.keys(t).filter((function(e){return"$v"!==e&&e!==c}));d<h.length;d++){var $=h[d];t[$].$v.validate()}},t.$v.reset=function(){t[c].setInvalid(!1),t[c].setDirty(!1),t[c].resetPending(),t.$v.errors={},u=null;for(var e=0,r=Object.keys(t).filter((function(e){return"$v"!==e&&e!==c}));e<r.length;e++){var n=r[e];t[n].$v.reset()}},t.$v.touch=function(){t[c].setDirty(!0);for(var e=0,r=Object.keys(t).filter((function(e){return"$v"!==e&&e!==c}));e<r.length;e++){var n=r[e];t[n].$v.touch()}}};export{R as proxy};
