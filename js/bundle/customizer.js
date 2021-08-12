!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,s={f:c&&!a.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:a},u=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},l={}.toString,f=function(t){return l.call(t).slice(8,-1)},p="".split,g=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==f(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},d=function(t){return g(v(t))},h=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!h(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!h(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,m=function(t,e){return b.call(t,e)},S=r.document,O=h(S)&&h(S.createElement),w=function(t){return O?S.createElement(t):{}},_=!o&&!i((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),C=Object.getOwnPropertyDescriptor,j={f:o?C:function(t,e){if(t=d(t),e=y(e,!0),_)try{return C(t,e)}catch(t){}if(m(t,e))return u(!s.f.call(t,e),t[e])}},L=function(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t},T=Object.defineProperty,k={f:o?T:function(t,e,n){if(L(t),e=y(e,!0),L(n),_)try{return T(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},P=o?function(t,e,n){return k.f(t,e,u(1,n))}:function(t,e,n){return t[e]=n,t},E=function(t,e){try{P(r,t,e)}catch(n){r[t]=e}return e},M=r["__core-js_shared__"]||E("__core-js_shared__",{}),x=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return x.call(t)});var D,q,N,A=M.inspectSource,I=r.WeakMap,F="function"==typeof I&&/native code/.test(A(I)),R=e((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.10.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),G=0,V=Math.random(),z=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++G+V).toString(36)},B=R("keys"),H=function(t){return B[t]||(B[t]=z(t))},W={},J=r.WeakMap;if(F){var $=M.state||(M.state=new J),X=$.get,K=$.has,Q=$.set;D=function(t,e){if(K.call($,t))throw new TypeError("Object already initialized");return e.facade=t,Q.call($,t,e),e},q=function(t){return X.call($,t)||{}},N=function(t){return K.call($,t)}}else{var Y=H("state");W[Y]=!0,D=function(t,e){if(m(t,Y))throw new TypeError("Object already initialized");return e.facade=t,P(t,Y,e),e},q=function(t){return m(t,Y)?t[Y]:{}},N=function(t){return m(t,Y)}}var U={set:D,get:q,has:N,enforce:function(t){return N(t)?q(t):D(t,{})},getterFor:function(t){return function(e){var n;if(!h(e)||(n=q(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=U.get,n=U.enforce,i=String(String).split("String");(t.exports=function(t,e,o,a){var c,s=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,l=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof e||m(o,"name")||P(o,"name",e),(c=n(o)).source||(c.source=i.join("string"==typeof e?e:""))),t!==r?(s?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=o:P(t,e,o)):u?t[e]=o:E(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||A(this)}))})),tt=r,et=function(t){return"function"==typeof t?t:void 0},nt=function(t,e){return arguments.length<2?et(tt[t])||et(r[t]):tt[t]&&tt[t][e]||r[t]&&r[t][e]},rt=Math.ceil,it=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?it:rt)(t)},at=Math.min,ct=function(t){return t>0?at(ot(t),9007199254740991):0},st=Math.max,ut=Math.min,lt=function(t){return function(e,n,r){var i,o=d(e),a=ct(o.length),c=function(t,e){var n=ot(t);return n<0?st(n+e,0):ut(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},ft={includes:lt(!0),indexOf:lt(!1)}.indexOf,pt=function(t,e){var n,r=d(t),i=0,o=[];for(n in r)!m(W,n)&&m(r,n)&&o.push(n);for(;e.length>i;)m(r,n=e[i++])&&(~ft(o,n)||o.push(n));return o},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vt=gt.concat("length","prototype"),dt={f:Object.getOwnPropertyNames||function(t){return pt(t,vt)}},ht={f:Object.getOwnPropertySymbols},yt=nt("Reflect","ownKeys")||function(t){var e=dt.f(L(t)),n=ht.f;return n?e.concat(n(t)):e},bt=function(t,e){for(var n=yt(e),r=k.f,i=j.f,o=0;o<n.length;o++){var a=n[o];m(t,a)||r(t,a,i(e,a))}},mt=/#|\.prototype\./,St=function(t,e){var n=wt[Ot(t)];return n==Ct||n!=_t&&("function"==typeof e?i(e):!!e)},Ot=St.normalize=function(t){return String(t).replace(mt,".").toLowerCase()},wt=St.data={},_t=St.NATIVE="N",Ct=St.POLYFILL="P",jt=St,Lt=j.f,Tt=function(t,e){var n,i,o,a,c,s=t.target,u=t.global,l=t.stat;if(n=u?r:l?r[s]||E(s,{}):(r[s]||{}).prototype)for(i in e){if(a=e[i],o=t.noTargetGet?(c=Lt(n,i))&&c.value:n[i],!jt(u?i:s+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;bt(a,o)}(t.sham||o&&o.sham)&&P(a,"sham",!0),Z(n,i,a,t)}},kt=function(t){return Object(v(t))},Pt=Object.keys||function(t){return pt(t,gt)};Tt({target:"Object",stat:!0,forced:i((function(){Pt(1)}))},{keys:function(t){return Pt(kt(t))}});var Et,Mt,xt="process"==f(r.process),Dt=nt("navigator","userAgent")||"",qt=r.process,Nt=qt&&qt.versions,At=Nt&&Nt.v8;At?Mt=(Et=At.split("."))[0]+Et[1]:Dt&&(!(Et=Dt.match(/Edge\/(\d+)/))||Et[1]>=74)&&(Et=Dt.match(/Chrome\/(\d+)/))&&(Mt=Et[1]);var It,Ft=Mt&&+Mt,Rt=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(xt?38===Ft:Ft>37&&Ft<41)})),Gt=Rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Vt=Array.isArray||function(t){return"Array"==f(t)},zt=o?Object.defineProperties:function(t,e){L(t);for(var n,r=Pt(e),i=r.length,o=0;i>o;)k.f(t,n=r[o++],e[n]);return t},Bt=nt("document","documentElement"),Ht=H("IE_PROTO"),Wt=function(){},Jt=function(t){return"<script>"+t+"<\/script>"},$t=function(){try{It=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;$t=It?function(t){t.write(Jt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(It):((e=w("iframe")).style.display="none",Bt.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Jt("document.F=Object")),t.close(),t.F);for(var n=gt.length;n--;)delete $t.prototype[gt[n]];return $t()};W[Ht]=!0;var Xt,Kt,Qt,Yt=Object.create||function(t,e){var n;return null!==t?(Wt.prototype=L(t),n=new Wt,Wt.prototype=null,n[Ht]=t):n=$t(),void 0===e?n:zt(n,e)},Ut=dt.f,Zt={}.toString,te="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ee={f:function(t){return te&&"[object Window]"==Zt.call(t)?function(t){try{return Ut(t)}catch(t){return te.slice()}}(t):Ut(d(t))}},ne=R("wks"),re=r.Symbol,ie=Gt?re:re&&re.withoutSetter||z,oe=function(t){return m(ne,t)&&(Rt||"string"==typeof ne[t])||(Rt&&m(re,t)?ne[t]=re[t]:ne[t]=ie("Symbol."+t)),ne[t]},ae={f:oe},ce=k.f,se=k.f,ue=oe("toStringTag"),le=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}},fe=oe("species"),pe=function(t,e){var n;return Vt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Vt(n.prototype)?h(n)&&null===(n=n[fe])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},ge=[].push,ve=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,a=7==t,c=5==t||o;return function(s,u,l,f){for(var p,v,d=kt(s),h=g(d),y=le(u,l,3),b=ct(h.length),m=0,S=f||pe,O=e?S(s,b):n||a?S(s,0):void 0;b>m;m++)if((c||m in h)&&(v=y(p=h[m],m,d),t))if(e)O[m]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return m;case 2:ge.call(O,p)}else switch(t){case 4:return!1;case 7:ge.call(O,p)}return o?-1:r||i?i:O}},de={forEach:ve(0),map:ve(1),filter:ve(2),some:ve(3),every:ve(4),find:ve(5),findIndex:ve(6),filterOut:ve(7)},he=de.forEach,ye=H("hidden"),be=oe("toPrimitive"),me=U.set,Se=U.getterFor("Symbol"),Oe=Object.prototype,we=r.Symbol,_e=nt("JSON","stringify"),Ce=j.f,je=k.f,Le=ee.f,Te=s.f,ke=R("symbols"),Pe=R("op-symbols"),Ee=R("string-to-symbol-registry"),Me=R("symbol-to-string-registry"),xe=R("wks"),De=r.QObject,qe=!De||!De.prototype||!De.prototype.findChild,Ne=o&&i((function(){return 7!=Yt(je({},"a",{get:function(){return je(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Ce(Oe,e);r&&delete Oe[e],je(t,e,n),r&&t!==Oe&&je(Oe,e,r)}:je,Ae=function(t,e){var n=ke[t]=Yt(we.prototype);return me(n,{type:"Symbol",tag:t,description:e}),o||(n.description=e),n},Ie=Gt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof we},Fe=function(t,e,n){t===Oe&&Fe(Pe,e,n),L(t);var r=y(e,!0);return L(n),m(ke,r)?(n.enumerable?(m(t,ye)&&t[ye][r]&&(t[ye][r]=!1),n=Yt(n,{enumerable:u(0,!1)})):(m(t,ye)||je(t,ye,u(1,{})),t[ye][r]=!0),Ne(t,r,n)):je(t,r,n)},Re=function(t,e){L(t);var n=d(e),r=Pt(n).concat(Be(n));return he(r,(function(e){o&&!Ge.call(n,e)||Fe(t,e,n[e])})),t},Ge=function(t){var e=y(t,!0),n=Te.call(this,e);return!(this===Oe&&m(ke,e)&&!m(Pe,e))&&(!(n||!m(this,e)||!m(ke,e)||m(this,ye)&&this[ye][e])||n)},Ve=function(t,e){var n=d(t),r=y(e,!0);if(n!==Oe||!m(ke,r)||m(Pe,r)){var i=Ce(n,r);return!i||!m(ke,r)||m(n,ye)&&n[ye][r]||(i.enumerable=!0),i}},ze=function(t){var e=Le(d(t)),n=[];return he(e,(function(t){m(ke,t)||m(W,t)||n.push(t)})),n},Be=function(t){var e=t===Oe,n=Le(e?Pe:d(t)),r=[];return he(n,(function(t){!m(ke,t)||e&&!m(Oe,t)||r.push(ke[t])})),r};(Rt||(Z((we=function(){if(this instanceof we)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=z(t),n=function(t){this===Oe&&n.call(Pe,t),m(this,ye)&&m(this[ye],e)&&(this[ye][e]=!1),Ne(this,e,u(1,t))};return o&&qe&&Ne(Oe,e,{configurable:!0,set:n}),Ae(e,t)}).prototype,"toString",(function(){return Se(this).tag})),Z(we,"withoutSetter",(function(t){return Ae(z(t),t)})),s.f=Ge,k.f=Fe,j.f=Ve,dt.f=ee.f=ze,ht.f=Be,ae.f=function(t){return Ae(oe(t),t)},o&&(je(we.prototype,"description",{configurable:!0,get:function(){return Se(this).description}}),Z(Oe,"propertyIsEnumerable",Ge,{unsafe:!0}))),Tt({global:!0,wrap:!0,forced:!Rt,sham:!Rt},{Symbol:we}),he(Pt(xe),(function(t){!function(t){var e=tt.Symbol||(tt.Symbol={});m(e,t)||ce(e,t,{value:ae.f(t)})}(t)})),Tt({target:"Symbol",stat:!0,forced:!Rt},{for:function(t){var e=String(t);if(m(Ee,e))return Ee[e];var n=we(e);return Ee[e]=n,Me[n]=e,n},keyFor:function(t){if(!Ie(t))throw TypeError(t+" is not a symbol");if(m(Me,t))return Me[t]},useSetter:function(){qe=!0},useSimple:function(){qe=!1}}),Tt({target:"Object",stat:!0,forced:!Rt,sham:!o},{create:function(t,e){return void 0===e?Yt(t):Re(Yt(t),e)},defineProperty:Fe,defineProperties:Re,getOwnPropertyDescriptor:Ve}),Tt({target:"Object",stat:!0,forced:!Rt},{getOwnPropertyNames:ze,getOwnPropertySymbols:Be}),Tt({target:"Object",stat:!0,forced:i((function(){ht.f(1)}))},{getOwnPropertySymbols:function(t){return ht.f(kt(t))}}),_e)&&Tt({target:"JSON",stat:!0,forced:!Rt||i((function(){var t=we();return"[null]"!=_e([t])||"{}"!=_e({a:t})||"{}"!=_e(Object(t))}))},{stringify:function(t,e,n){for(var r,i=[t],o=1;arguments.length>o;)i.push(arguments[o++]);if(r=e,(h(e)||void 0!==t)&&!Ie(t))return Vt(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!Ie(e))return e}),i[1]=e,_e.apply(null,i)}});we.prototype[be]||P(we.prototype,be,we.prototype.valueOf),Kt="Symbol",(Xt=we)&&!m(Xt=Qt?Xt:Xt.prototype,ue)&&se(Xt,ue,{configurable:!0,value:Kt}),W[ye]=!0;var He,We=oe("species"),Je=de.filter;Tt({target:"Array",proto:!0,forced:!(He="filter",Ft>=51||!i((function(){var t=[];return(t.constructor={})[We]=function(){return{foo:1}},1!==t[He](Boolean).foo})))},{filter:function(t){return Je(this,t,arguments.length>1?arguments[1]:void 0)}});var $e=j.f,Xe=i((function(){$e(1)}));Tt({target:"Object",stat:!0,forced:!o||Xe,sham:!o},{getOwnPropertyDescriptor:function(t,e){return $e(d(t),e)}});var Ke=de.forEach,Qe=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}("forEach")?[].forEach:function(t){return Ke(this,t,arguments.length>1?arguments[1]:void 0)};for(var Ye in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Ue=r[Ye],Ze=Ue&&Ue.prototype;if(Ze&&Ze.forEach!==Qe)try{P(Ze,"forEach",Qe)}catch(t){Ze.forEach=Qe}}var tn=function(t,e,n){var r=y(e);r in t?k.f(t,r,u(0,n)):t[r]=n};Tt({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=d(t),i=j.f,o=yt(r),a={},c=0;o.length>c;)void 0!==(n=i(r,e=o[c++]))&&tn(a,e,n);return a}}),(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1305:function(t,e,n){n.r(e);var r=n(6);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{isOpen:!1,langs:["en","fr","ar","de","es","it","Ind","thai","tr_ch","sm_ch","tur","ru","hn","vn"]}},computed:o({},Object(r.c)(["getThemeMode","getcompactLeftSideBarBgColor"])),methods:o(o({},Object(r.b)(["changeThemeRtl","changeThemeLayout","changeThemeMode","changecompactLeftSideBarBgColor"])),{},{SetLocal:function(t){this.$i18n.locale=t,this.$store.dispatch("language/setLanguage",t),Fire.$emit("ChangeLanguage")}})},s=n(3),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"customizer",class:{open:t.isOpen}},[n("div",{staticClass:"handle",on:{click:function(e){t.isOpen=!t.isOpen}}},[n("i",{staticClass:"i-Gear spin"})]),t._v(" "),n("vue-perfect-scrollbar",{staticClass:"customizer-body ps rtl-ps-none",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},["vertical-sidebar"!=t.getThemeMode.layout&&"vertical-sidebar-two"!=t.getThemeMode.layout?n("div",{},[n("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[n("p",{staticClass:"mb-0"},[t._v("RTL")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("label",{staticClass:"checkbox checkbox-primary"},[n("input",{attrs:{type:"checkbox",id:"rtl-checkbox"},on:{change:t.changeThemeRtl}}),t._v(" "),n("span",[t._v("Enable RTL")]),t._v(" "),n("span",{staticClass:"checkmark"})])])]):t._e(),t._v(" "),n("div",{},[n("div",{staticClass:"card-header"},[n("p",{staticClass:"mb-0"},[t._v("Dark Mode")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("label",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.left",value:"Dark Mode",expression:"'Dark Mode'",modifiers:{hover:!0,left:!0}}],staticClass:"switch switch-primary mr-3 mt-2"},[n("input",{attrs:{type:"checkbox"},on:{click:t.changeThemeMode}}),t._v(" "),n("span",{staticClass:"slider"})])])]),t._v(" "),n("div",{},[n("div",{staticClass:"card-header"},[n("p",{staticClass:"mb-0"},[t._v("Language")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"menu-icon-language"},[n("a",{on:{click:function(e){return t.SetLocal("en")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-gb",attrs:{title:"en"}}),t._v(" English\n            ")]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("fr")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-fr",attrs:{title:"fr"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("French")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("ar")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-sa",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Arabic")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("tur")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-tr",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Turkish")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("sm_ch")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-cn",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Simplified Chinese")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("thai")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-th",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Thaï")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("hn")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-in",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Hindi")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("de")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-de",attrs:{title:"de"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("German")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("es")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-es",attrs:{title:"es"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Spanish")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("it")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-it",attrs:{title:"it"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Italien")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("Ind")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-id",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Indonesian")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("tr_ch")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-cn",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Traditional Chinese")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("ru")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-ru",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Russian")])]),t._v(" "),n("a",{on:{click:function(e){return t.SetLocal("vn")}}},[n("i",{staticClass:"flag-icon flag-icon-squared flag-icon-vn",attrs:{title:"sa"}}),t._v(" "),n("span",{staticClass:"title-lang"},[t._v("Vietnamese")])])])])])])],1)])}),[],!1,null,"01d9d660",null);e.default=u.exports}}])}();