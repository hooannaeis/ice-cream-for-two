(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53dc8f0a"],{"057f":function(e,t,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return o(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==i.call(e)?a(e):o(r(e))}},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),s=n("9112");for(var a in o){var c=r[a],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("a640"),i=n("ae40"),s=o("forEach"),a=i("forEach");e.exports=s&&a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19e6":function(e,t,n){},"238a":function(e,t,n){"use strict";var r=n("8994"),o=n.n(r);o.a},2532:function(e,t,n){"use strict";var r=n("23e7"),o=n("5a34"),i=n("1d80"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"38d5":function(e,t,n){"use strict";var r=n("19e6"),o=n.n(r);o.a},4160:function(e,t,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,i=n("1dde"),s=n("ae40"),a=i("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",s=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,s;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&o(e,s),e}},"746f":function(e,t,n){var r=n("428f"),o=n("5135"),i=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||s(t,e,{value:i.f(e)})}},8994:function(e,t,n){},a4d3:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),b=n("825a"),m=n("7b0b"),h=n("fc6a"),g=n("c04e"),v=n("5c6c"),y=n("7c73"),x=n("df75"),S=n("241c"),O=n("057f"),A=n("7418"),L=n("06cf"),_=n("9bf2"),j=n("d1e7"),E=n("9112"),w=n("6eeb"),T=n("5692"),N=n("f772"),P=n("d012"),I=n("90e3"),C=n("b622"),k=n("e538"),M=n("746f"),B=n("d44e"),D=n("69f3"),$=n("b727").forEach,F=N("hidden"),R="Symbol",G="prototype",V=C("toPrimitive"),H=D.set,J=D.getterFor(R),W=Object[G],U=o.Symbol,X=i("JSON","stringify"),Y=L.f,q=_.f,z=O.f,Q=j.f,Z=T("symbols"),K=T("op-symbols"),ee=T("string-to-symbol-registry"),te=T("symbol-to-string-registry"),ne=T("wks"),re=o.QObject,oe=!re||!re[G]||!re[G].findChild,ie=a&&l((function(){return 7!=y(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Y(W,t);r&&delete W[t],q(e,t,n),r&&e!==W&&q(W,t,r)}:q,se=function(e,t){var n=Z[e]=y(U[G]);return H(n,{type:R,tag:e,description:t}),a||(n.description=t),n},ae=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof U},ce=function(e,t,n){e===W&&ce(K,t,n),b(e);var r=g(t,!0);return b(n),f(Z,r)?(n.enumerable?(f(e,F)&&e[F][r]&&(e[F][r]=!1),n=y(n,{enumerable:v(0,!1)})):(f(e,F)||q(e,F,v(1,{})),e[F][r]=!0),ie(e,r,n)):q(e,r,n)},ue=function(e,t){b(e);var n=h(t),r=x(n).concat(be(n));return $(r,(function(t){a&&!fe.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?y(e):ue(y(e),t)},fe=function(e){var t=g(e,!0),n=Q.call(this,t);return!(this===W&&f(Z,t)&&!f(K,t))&&(!(n||!f(this,t)||!f(Z,t)||f(this,F)&&this[F][t])||n)},de=function(e,t){var n=h(e),r=g(t,!0);if(n!==W||!f(Z,r)||f(K,r)){var o=Y(n,r);return!o||!f(Z,r)||f(n,F)&&n[F][r]||(o.enumerable=!0),o}},pe=function(e){var t=z(h(e)),n=[];return $(t,(function(e){f(Z,e)||f(P,e)||n.push(e)})),n},be=function(e){var t=e===W,n=z(t?K:h(e)),r=[];return $(n,(function(e){!f(Z,e)||t&&!f(W,e)||r.push(Z[e])})),r};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=I(e),n=function(e){this===W&&n.call(K,e),f(this,F)&&f(this[F],t)&&(this[F][t]=!1),ie(this,t,v(1,e))};return a&&oe&&ie(W,t,{configurable:!0,set:n}),se(t,e)},w(U[G],"toString",(function(){return J(this).tag})),w(U,"withoutSetter",(function(e){return se(I(e),e)})),j.f=fe,_.f=ce,L.f=de,S.f=O.f=pe,A.f=be,k.f=function(e){return se(C(e),e)},a&&(q(U[G],"description",{configurable:!0,get:function(){return J(this).description}}),s||w(W,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),$(x(ne),(function(e){M(e)})),r({target:R,stat:!0,forced:!c},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var n=U(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pe,getOwnPropertySymbols:be}),r({target:"Object",stat:!0,forced:l((function(){A.f(1)}))},{getOwnPropertySymbols:function(e){return A.f(m(e))}}),X){var me=!c||l((function(){var e=U();return"[null]"!=X([e])||"{}"!=X({a:e})||"{}"!=X(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,o=[e],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=t,(p(t)||void 0!==e)&&!ae(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ae(t))return t}),o[1]=t,X.apply(null,o)}})}U[G][V]||E(U[G],V,U[G].valueOf),B(U,R),P[F]=!0},a6d3:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.listObject.name))]),e.listObject.settled?n("section",[n("div",[e._v("diese Liste ist bereits beglichen")])]):e._e(),n("section",{staticClass:"section--left"},[n("h2",[e._v("Zusammenfassung")]),n("p",[e._v("Gesamtausgaben: "+e._s(e.totalListSum)+" EUR")]),n("p",[e._v("Teilnehmer: "+e._s(e.participants))]),n("Button",{attrs:{isLink:"true",isPrimary:"true"}},[n("router-link",{attrs:{to:"/settle-list/"+e.$route.params.expenseListId}},[e._v("Ausgaben begleichen")])],1)],1),n("section",[n("AddExpense")],1),n("section",{staticClass:"section--right"},[n("h2",[e._v("Ausgabenübersicht")]),n("ExpenseTable",{attrs:{expenses:e.subListObject}})],1),n("section",[n("Button",{attrs:{isLink:"true",isPrimary:"true"}},[n("router-link",{attrs:{to:"/settle-list/"+e.$route.params.expenseListId}},[e._v("Ausgaben begleichen")])],1),n("Button",{attrs:{isWarning:"true"},nativeOn:{click:function(t){return e.deleteList(t)}}},[e._v("Ausgabenliste löschen")])],1)])},o=[],i=(n("4160"),n("caad"),n("a15b"),n("b0c0"),n("a9e3"),n("ac1f"),n("2532"),n("1276"),n("159b"),n("2a7d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isInAddMode?n("div",[n("h2",[e._v("neue Ausgabe hinzufügen")]),n("div",{staticClass:"np-form-group"},[e.error.name?n("label",{staticClass:"np-form-element error",attrs:{for:"addName"}},[e._v(e._s(e.error.name))]):n("label",{staticClass:"np-form-element",attrs:{for:"addName"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseToAdd.name,expression:"expenseToAdd.name"}],staticClass:"np-form-element",attrs:{type:"text",id:"addName"},domProps:{value:e.expenseToAdd.name},on:{input:function(t){t.target.composing||e.$set(e.expenseToAdd,"name",t.target.value)}}})]),n("div",{staticClass:"np-form-group"},[e.error.subject?n("label",{staticClass:"np-form-element error",attrs:{for:"addSubject"}},[e._v(e._s(e.error.subject))]):n("label",{staticClass:"np-form-element",attrs:{for:"addSubject"}},[e._v("Beschreibung")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseToAdd.subject,expression:"expenseToAdd.subject"}],staticClass:"np-form-element",attrs:{type:"text",id:"addSubject"},domProps:{value:e.expenseToAdd.subject},on:{input:function(t){t.target.composing||e.$set(e.expenseToAdd,"subject",t.target.value)}}})]),n("div",{staticClass:"np-form-group"},[e.error.amount?n("label",{staticClass:"np-form-element error",attrs:{for:"addAmount"}},[e._v(e._s(e.error.amount))]):n("label",{staticClass:"np-form-element",attrs:{for:"addAmount"}},[e._v("Betrag")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.expenseToAdd.amount,expression:"expenseToAdd.amount"}],staticClass:"np-form-element",attrs:{type:"number",id:"addAmount"},domProps:{value:e.expenseToAdd.amount},on:{input:function(t){t.target.composing||e.$set(e.expenseToAdd,"amount",t.target.value)}}})]),e.error.general?n("div",{staticClass:"error"},[e._v(e._s(e.error.general))]):e._e(),n("Button",{attrs:{isWarning:"true"},nativeOn:{click:function(t){return e.toggleAddMode(t)}}},[e._v("verwerfen")]),n("Button",{attrs:{isPrimary:"true"},nativeOn:{click:function(t){return e.addExpense(t)}}},[e._v("speichern")])],1):n("div",[n("Button",{attrs:{isFullWidth:"true"},nativeOn:{click:function(t){return e.toggleAddMode(t)}}},[e._v("neue Ausgabe eintragen")])],1)])},a=[];n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=n("56d7"),d={data:function(){return{isInAddMode:!1,expenseToAdd:{name:null,subject:null,amount:null},error:{name:null,subject:null,amount:null,general:null}}},components:{Button:i["a"]},methods:{toggleAddMode:function(){this.isInAddMode&&this.discardExpense(),this.isInAddMode=!this.isInAddMode},discardExpense:function(){this.error.name=null,this.error.subject=null,this.error.amount=null,this.error.general=null,this.expenseToAdd.name=null,this.expenseToAdd.subject=null,this.expenseToAdd.amount=null},addExpense:function(){var e=this,t=!0;if(this.expenseToAdd.name||(this.error.name="Bitte gibt deinen Namen ein",t=!1),this.expenseToAdd.subject||(this.error.subject="Bitte beschreibe deine Ausgabe",t=!1),this.expenseToAdd.amount&&0!==this.expenseToAdd.amount||(this.error.amount="Bitte trage die Höhe deiner Ausgabe ein",t=!1),t){var n=l(l({},this.expenseToAdd),{},{date:(new Date).getTime()});console.log("expense to add: ".concat(n)),f["db"].doc(this.$route.path).collection("expenses").add(n).then((function(t){console.log(t),e.toggleAddMode()})).catch((function(t){e.error.general=t}))}}}},p=d,b=(n("238a"),n("2877")),m=Object(b["a"])(p,s,a,!1,null,null,null),h=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.expenses.length>0?n("table",{staticClass:"np-table"},[e._m(0),e._l(e.expenses,(function(t,r){return n("tr",{key:r,staticClass:"np-table-row"},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.subject))]),n("td",[e._v(e._s(Number(t.amount).toFixed(2)))])])})),n("tr",{staticClass:"np-table-row",staticStyle:{"border-top":"1px dashed black"}},[n("td",[e._v("Gesamt")]),n("td"),n("td",[e._v(e._s(e.totalListSum))])])],2):n("div",[e._v("Du hast noch keine Ausgaben eingetragen")])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"np-table-heading"},[n("th",[e._v("Name")]),n("th",[e._v("Beschreibung")]),n("th",[e._v("Betrag")])])}],y={props:{expenses:{type:Array,default:[]}},computed:{totalListSum:function(){var e=0;return this.expenses.forEach((function(t){t.amount&&(e+=Number(t.amount))})),e}}},x=y,S=(n("38d5"),Object(b["a"])(x,g,v,!1,null,null,null)),O=S.exports,A={data:function(){return{error:null,newExpenseName:"",listObject:null,subListObject:[null]}},components:{Button:i["a"],ExpenseTable:O,AddExpense:h},computed:{currentListPath:function(){return"expense-lists/".concat(this.$route.params.expenseListId)},totalListSum:function(){var e=0;return this.subListObject.forEach((function(t){t.amount&&(e+=Number(t.amount))})),e},participants:function(){var e=[];return this.subListObject.forEach((function(t){e.includes(t.name)||e.push(t.name)})),e.join(", ")}},methods:{createExpense:function(){this.newExpenseName?console.log("hello"):this.error="Bitte beschreibe deine Ausgabe"},deleteList:function(){var e=this,t=[];localStorage.getItem("myLists").split(",").forEach((function(n){n!==e.currentListPath&&t.push(n)})),localStorage.setItem("myLists",t.join(",")),f["db"].doc(this.currentListPath).delete().then((function(){e.$router.push({path:"/"})})).catch((function(e){console.error(e)}))}},firestore:function(){console.log(this.$route.params.expenseListId);var e=f["db"].doc(this.currentListPath),t=e.collection("expenses").orderBy("date","desc");return this.loading=!1,console.log(e),{listObject:e,subListObject:t}},mounted:function(){if(console.log(localStorage.getItem("myLists")),!localStorage.getItem("myLists")||!localStorage.getItem("myLists").includes(this.currentListPath)){var e=localStorage.getItem("myLists");localStorage.setItem("myLists",[e,this.currentListPath].join(","))}}},L=A,_=Object(b["a"])(L,r,o,!1,null,null,null);t["default"]=_.exports},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,b=n("06cf").f,m=n("9bf2").f,h=n("58a8").trim,g="Number",v=o[g],y=v.prototype,x=c(d(y))==g,S=function(e){var t,n,r,o,i,s,a,c,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=h(u),t=u.charCodeAt(0),43===t||45===t){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(i=u.slice(2),s=i.length,a=0;a<s;a++)if(c=i.charCodeAt(a),c<48||c>o)return NaN;return parseInt(i,r)}return+u};if(i(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var O,A=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof A&&(x?f((function(){y.valueOf.call(n)})):c(n)!=g)?u(new v(S(t)),n,A):S(t)},L=r?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;L.length>_;_++)a(v,O=L[_])&&!a(A,O)&&m(A,O,b(v,O));A.prototype=y,y.constructor=A,s(o,g,A)}},ab13:function(e,t,n){var r=n("b622"),o=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(r){}}return!1}},ae40:function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("5135"),s=Object.defineProperty,a={},c=function(e){throw e};e.exports=function(e,t){if(i(a,e))return a[e];t||(t={});var n=[][e],u=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:c,f=i(t,1)?t[1]:void 0;return a[e]=!!n&&!o((function(){if(u&&!r)return!0;var e={length:-1};u?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,l,f)}))}},b0c0:function(e,t,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,s=i.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},b64b:function(e,t,n){var r=n("23e7"),o=n("7b0b"),i=n("df75"),s=n("d039"),a=s((function(){i(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return i(o(e))}})},b727:function(e,t,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,f=6==e,d=5==e||f;return function(p,b,m,h){for(var g,v,y=i(p),x=o(y),S=r(b,m,3),O=s(x.length),A=0,L=h||a,_=t?L(p,O):n?L(p,0):void 0;O>A;A++)if((d||A in x)&&(g=x[A],v=S(g,A,y),e))if(t)_[A]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return A;case 2:c.call(_,g)}else if(l)return!1;return f?-1:u||l?l:_}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},caad:function(e,t,n){"use strict";var r=n("23e7"),o=n("4d64").includes,i=n("44d2"),s=n("ae40"),a=s("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},dbb4:function(e,t,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),o=a.f,u=i(r),l={},f=0;while(u.length>f)n=o(r,t=u[f++]),void 0!==n&&c(l,t,n);return l}})},e439:function(e,t,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=o((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(i(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-53dc8f0a.aef244ce.js.map