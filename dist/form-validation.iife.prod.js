!function(e){"use strict";
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
    ***************************************************************************** */var r=function(){return(r=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};function t(e,r,t,n){return new(t||(t=Promise))((function(a,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function l(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,l)}u((n=n.apply(e,r||[])).next())}))}function n(e,r){var t,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=r.call(e,o)}catch(e){i=[6,e],n=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function a(e){return Object.prototype.toString.call(e)}function i(e){return"[object Object]"===a(e)}function o(e){return"[object Array]"===a(e)}function l(e){return"function"==typeof e}function u(e){return null!==e&&"object"==typeof e&&l(e.then)}function c(e,r){return e.hasOwnProperty(r)}function s(e,r){if(0===r.length)return e;var t=e;return r.slice(0,-1).forEach((function(e){t=t[e]})),t[r[r.length-1]]}function f(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]}var v="__form_validation__",h="__form_validation_reactive",d="__form_validation_collected",p=function(e,r,t){var n;(i(e)||o(e))&&Object.defineProperty(e,h,{enumerable:!1,configurable:!0,value:e}),(i(r)||o(r))&&(Object.defineProperty(r,h,{enumerable:!1,configurable:!0,value:r}),Object.defineProperty(r,v,{enumerable:!1,configurable:!0,value:r[v]||(n={},n.path=t,n)}),Object.defineProperty(r,"$v",{enumerable:!1,configurable:!0,value:r.$v||{}}))},$=function(e,r){var t;if(!1!==i(e)||!1!==o(e))for(var n in(t=e[v].path).splice.apply(t,function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),a=0;for(r=0;r<t;r++)for(var i=arguments[r],o=0,l=i.length;o<l;o++,a++)n[a]=i[o];return n}([0,r.length],r)),e)$(e[n],r.concat(n))},m=new Set(["shift","unshift","reverse","splice"]),y=function(e){var r=e.object,t=e.clone,n=e.path,a=void 0===n?[]:n,l=e.wrap,u=void 0===l?p:l,s=e.callback,f=void 0===s?function(){}:s;if(u(r,t,a),(i(t)||o(t))&&f(t),!1===i(r)&&!1===o(r))return r;for(var h=0,g=Object.keys(r);h<g.length;h++){var b=g[h];Reflect.set(t,b,t[b]||(o(r[b])?[]:{})),Reflect.set(r,b,y({object:r[b],clone:t[b],path:a.concat(b),wrap:u,callback:f}))}for(var b in t)!1===c(r,b)&&delete t[b];var j=null,O=0,P=0,k=[],w=[],_=[];return new Proxy(r,{deleteProperty:function(e,r){return Reflect.deleteProperty(t,r),Reflect.deleteProperty(e,r)},set:function(e,r,n){var i=Reflect.set(e,r,n);if(!1===c(e,r))return i;if(o(e))if("shift"===j){if("length"===r){k.reverse(),k.pop(),t.length=0;for(var l=0;l<k.length;){var s=k[l];s[v].path=s[v].path.slice(0,-1).concat(k.length-l-1+""),t.push(s),++l}for(var h in t.reverse(),j=null,$(t,t[v].path),t)f(t[h]);return i}/^\d+$/.test(r)&&(t[r]=o(n)?[]:{})}else if("unshift"===j){if("length"===r){t.length=0;for(var d=0;d<k.length;){var p=k[d];p[v].path=p[v].path.slice(0,-1).concat(k.length-d-1+""),t.push(p),++d}for(var m in t.reverse(),j=null,$(t,t[v].path),t)f(t[m]);return i}/^\d+$/.test(r)&&(t[r]=o(n)?[]:{},"0"===r&&k.push(t[0]))}else if("reverse"===j){if(/^\d+$/.test(r)){var g=k.pop();if(g[v].path=g[v].path.slice(0,-1).concat(r),t[r]=g,++P===O){for(var b in $(t,t[v].path),t)f(t[b]);j=null}return i}}else if("splice"===j){if("length"===r){for(var _ in j=null,t[r]=n,w){var x=w[_],I=x.method,R=x.key,S=x.value,z=parseInt(_,10)-1;"set"===I&&(z>=0&&"get"===w[z].method?t[R]=w[z].value:t[R]=S)}for(var D in $(t,t[v].path),t)t[D][v].path=t[D][v].path.slice(0,-1).concat(D+""),f(t[D]);return i}/^\d+$/.test(r)&&(t[r]=o(n)?[]:{},w.push({method:"set",key:r,value:t[r]}))}else if("length"===r)return t.length=n,i;return o(n)?(t[r]=t[r]||[],t[r].length=n.length):t[r]=t[r]||{},Reflect.set(e,r,y({object:n,clone:t[r],path:a.concat(r),wrap:u,callback:f}))},get:function(e,r){var n=Reflect.get(e,r);if(o(e))if(m.has(r))for(var a in j=r,P=0,k.length=0,w.length=0,_.length=0,t)delete t[a][d];else null!==j&&("shift"===j||"unshift"===j?/^\d+$/.test(r)&&t[r]&&void 0===t[r][d]&&(Object.defineProperty(t[r],d,{enumerable:!1,configurable:!0,value:t[r]}),k.push(t[r])):"reverse"===j?"length"===r?e[r]<=1?(j=null,O=0):O=n%2==0?n:n-1:/^\d+$/.test(r)&&t[r]&&void 0===t[r][d]&&(Object.defineProperty(t[r],d,{enumerable:!1,configurable:!0,value:t[r]}),k.push(t[r])):"splice"===j&&/^\d+$/.test(r)&&t[r]&&void 0===t[r][d]&&(Object.defineProperty(t[r],d,{enumerable:!1,configurable:!0,value:t[r]}),w.push({method:"get",key:r,value:t[r]})));return n}})},g=function(e){var r=e.rootSchema,t=e.validator,n=e.path,a=e.startIndex;if(a===n.length){try{var o=s(r,n);if(b(o))return i(o.$params)&&(t[v].schema.$params=o.$params),l(o.$normalizer)&&(t[v].schema.$normalizer=o.$normalizer),i(o.$rules)&&(t[v].schema.$rules=o.$rules),i(o.$errors)&&(t[v].schema.$errors=o.$errors),!0}catch(e){}return!1}if(g({rootSchema:r,validator:t,path:n,startIndex:a+1}))return!0;var u=n[a];return n[a]="$iter",!!g({rootSchema:r,validator:t,path:n,startIndex:a+1})||(n[a]=u,!1)},b=function(e){return void 0!==e&&(void 0!==e.$params||(void 0!==e.$normalizer||(void 0!==e.$rules||void 0!==e.$errors)))};var j=function(e){return function(r){e[v].validated=r}},O=function(e){return function(r){e[v].invalid=r,x(e),S(e),z(e)}},P=function(e){return function(r){e[v].dirty=r,I(e),R(e),S(e),z(e)}},k=function(e){return function(r){e[v].pending+=!0===r?1:-1,_(e),x(e),S(e),z(e)}},w=function(e){return function(){e[v].pending=0,_(e),x(e),S(e),z(e)}},_=function(e){e.$v.pending=0!==e[v].pending||D(e).some((function(e){return e.$v.pending}))},x=function(e){e.$v.invalid=e[v].invalid&&0===e[v].pending||D(e).some((function(e){return e.$v.invalid}))},I=function(e){e.$v.dirty=e[v].dirty||0!==D(e).length&&D(e).every((function(e){return e.$v.dirty}))},R=function(e){e.$v.anyDirty=e[v].dirty||D(e).some((function(e){return e.$v.anyDirty}))},S=function(e){e.$v.error=e[v].dirty&&e[v].invalid&&0===e[v].pending},z=function(e){e.$v.anyError=e[v].dirty&&e[v].invalid&&0===e[v].pending||D(e).some((function(e){return e.$v.anyError}))},D=function(e){return Object.keys(e).filter((function(e){return e!==v&&"$v"!==e})).map((function(r){return e[r]}))},E=function(e,a){var i=a[v].schema,o={};a.$v.validate=function(){a[v].setValidated(!0),a[v].setInvalid(!1),a[v].resetPending(),a.$v.errors={},a[v].previousResult={};for(var l=function(e){for(var a,i,o=e.rootForm,l=e.validator,c=r(((a={}).$rules={},a),l[v].schema.$params),f=l[v].schema.$normalizer,h=l[v].schema.$rules,d=l[v].schema.$errors,p=o,$=l[v].path,m=0===$.length?void 0:s(o,$.slice(0,-1)),y=0===$.length?void 0:$[$.length-1],g=f({value:0===$.length?o:s(o,$),key:y,parent:m,path:$,root:p,params:c}),b=((i={}).$rules={},i),j=function(e){var r={value:g,key:y,parent:m,path:$,root:p,params:c},a=h[e](r);b.$rules[e]=a,r.params.$rules[e]=a,b[e]=void 0,u(a)?a.finally((function(){return t(void 0,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,a];case 1:return void 0!==t.sent()&&(b[e]=d[e](r)),[2]}}))}))})):void 0!==a&&(b[e]=d[e](r))},O=0,P=Object.keys(h);O<P.length;O++){j(P[O])}return b}({rootForm:e,validator:a}),c=function(e){u(l.$rules[e])?(a[v].setPending(!0),l.$rules[e].finally((function(){return t(void 0,void 0,void 0,(function(){var r,t;return n(this,(function(n){switch(n.label){case 0:return a[v].previousResult!==l.$rules?[2]:[4,l.$rules[e]];case 1:return void 0===n.sent()?[3,3]:(a[v].setInvalid(!0),r=a.$v.errors,t=e,[4,l[e]]);case 2:r[t]=n.sent(),n.label=3;case 3:return a[v].setPending(!1),[2]}}))}))}))):void 0!==l.$rules[e]&&(a[v].setInvalid(!0),a.$v.errors[e]=l[e])},f=0,h=Object.keys(i.$rules);f<h.length;f++){c(h[f])}a[v].previousResult=l.$rules;for(var d={},p=0,$=Object.keys(a).filter((function(e){return"$v"!==e&&e!==v}));p<$.length;p++){var m=$[p];d[m]=a[m].$v.validate()}return Promise.all(Object.values(o)).then((function(){return Promise.all(Object.values(d))})).then((function(){}))},a.$v.reset=function(){a[v].setValidated(!1),a[v].setInvalid(!1),a[v].setDirty(!1),a[v].resetPending(),a.$v.errors={},o={};for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==v}));e<r.length;e++){var t=r[e];a[t].$v.reset()}},a.$v.touch=function(){a[v].setDirty(!0);for(var e=0,r=Object.keys(a).filter((function(e){return"$v"!==e&&e!==v}));e<r.length;e++){var t=r[e];a[t].$v.touch()}}};e.proxy=function(e){var r=e.form,t=e.schema,n=e.validator;return y({object:r,clone:n,callback:function(e){!function(e){var r=e;void 0===r[v].invalid&&(r[v].invalid=!1,r[v].validated=!1,r[v].pending=0,r[v].dirty=!1,r[v].setValidated=j(r),r[v].setInvalid=O(r),r[v].setDirty=P(r),r[v].setPending=k(r),r[v].resetPending=w(r),r.$v.pending=!1,r.$v.invalid=!1,r.$v.dirty=!1,r.$v.anyDirty=!1,r.$v.error=!1,r.$v.anyError=!1,r.$v.errors={})}(e),function(e){var r=e.rootSchema,t=e.validator,n=t[v].path,a={$params:{},$normalizer:function(e){return e.value},$rules:{},$errors:{}};for(var i in t[v].schema=t[v].schema||{},t[v].schema.$params=a.$params,t[v].schema.$normalizer=a.$normalizer,t[v].schema.$rules=a.$rules,t[v].schema.$errors=a.$errors,g({rootSchema:r,validator:t,path:n.slice(),startIndex:0}),t[v].schema.$rules)void 0===t[v].schema.$errors[i]&&(t[v].schema.$errors[i]=f)}({rootSchema:t,validator:e}),E(r,e),e[v].validated&&e.$v.validate()}})}}(this.FormValidation=this.FormValidation||{});
