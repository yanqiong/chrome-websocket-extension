(function(t){function e(e){for(var s,i,o=e[0],u=e[1],c=e[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/web/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"237a":function(t,e,n){},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="4678"},"53f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("a9e3"),n("f00c"),n("8ba4"),n("b680"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("c1df"),a=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tianqin")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tq-home"},[n("div",{staticClass:"layout-area header-container"},[n("div",[t._v(" 复盘服务器地址： "),n("Input",{staticStyle:{width:"500px"},model:{value:this.$store.state.replay_server_url,callback:function(e){t.$set(this.$store.state,"replay_server_url",e)},expression:"this.$store.state.replay_server_url"}}),t._v(" 日期： "),n("Input",{staticStyle:{width:"100px"},model:{value:t.replay_dt,callback:function(e){t.replay_dt=e},expression:"replay_dt"}}),t._v(" 运行中: "+t._s(t.runningNumber)+" ")],1),n("Button",{on:{click:function(e){return t.addReplay()}}},[t._v("复盘*1")]),n("Button",{on:{click:function(e){return t.addReplay(5)}}},[t._v("复盘*5")]),n("Button",{on:{click:function(e){return t.addReplay(10)}}},[t._v("复盘*10")]),n("Button",{on:{click:function(e){return t.all("speedUp")}}},[t._v("全部加速")]),n("Button",{on:{click:function(e){return t.all("speedDown")}}},[t._v("全部减速")]),n("Button",{on:{click:function(e){return t.all("pause")}}},[t._v("全部暂停/开始")]),n("Button",{on:{click:function(e){return t.terminate(5)}}},[t._v("停止*5")]),n("Button",{on:{click:function(e){return t.terminate(10)}}},[t._v("停止*10")]),n("Button",{on:{click:function(e){return t.all("terminate")}}},[t._v("全部停止")])],1),n("div",{staticClass:"layout-area bottom-container"},[n("div",{staticClass:"bottom-content"},[n("Row",t._l(t.replaylist,(function(e){return n("Col",{key:e.index,attrs:{span:6}},[n("replay-card",{ref:"replays",refInFor:!0,attrs:{index:e.index,date:e.date},on:{onChange:function(e){return t.onChangeStatus()}}})],1)})),1)],1)])])},c=[],d=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"replay"},[n("Card",{attrs:{shadow:""}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.index)+"-"+t._s(t.date)+"-"+t._s(t.serverStatus)+" ")]),n("div",{attrs:{slot:"extra"},slot:"extra"},[t._v(" "+t._s(t.dots)+" ")]),n("ButtonGroup",{attrs:{size:"small"}},[n("Button",{on:{click:function(e){return t.speedUp()}}},[t._v("加速")]),n("Button",{on:{click:function(e){return t.speedDown()}}},[t._v("减速")]),n("Button",{on:{click:function(e){return t.pause()}}},[t._v("暂停/开始")]),n("Button",{on:{click:function(e){return t.terminate()}}},[t._v("停止")])],1),n("Row",[n("Col",{attrs:{span:"8"}},[t._v("startDt")]),n("Col",{attrs:{span:"16"}},[t._v(t._s(t.startDt))]),n("Col",{attrs:{span:"8"}},[t._v("initializingDt")]),n("Col",{attrs:{span:"16"}},[t._v(t._s(t.initializingDt))]),n("Col",{attrs:{span:"8"}},[t._v("runningDt")]),n("Col",{attrs:{span:"16"}},[t._v(t._s(t.runningDt))]),n("Col",{attrs:{span:"8"}},[t._v("replayDt")]),n("Col",{attrs:{span:"16"}},[t._v(t._s(t.currentDateTime))]),n("Col",{attrs:{span:"8"}},[t._v("speed")]),n("Col",{attrs:{span:"16"}},[t._v(t._s(t._f("toFixed")(t.speedValues[t.speed],1)))])],1)],1)],1)}),l=[],f=(n("99af"),n("fb6a"),n("bc3a")),h=n.n(f),p=n("0977"),b={data:function(){for(var t=[],e=1;e<4;e++)for(var n=1;n<10;n++)t.push(n*Math.pow(10,e-2));return t.push(100),{serverStatus:"服务器正在启动",dots:"",currentDateTime:"0",startDt:a()().format("YYYY-MM-DD HH:mm:ss.SSSSSS"),initializingDt:"0",runningDt:"0",speedValues:t,speed:9,isPaused:!1,session:"",ip:"",session_port:"",gateway_web_port:"",tqapi:null,heartbeatInterval:null}},props:{index:Number,date:String},computed:{replayUrl:function(){return"http://".concat(this.ip,":").concat(this.session_port,"/t/rmd/replay/session/").concat(this.session)},mdUrl:function(){return"ws://".concat(this.ip,":").concat(this.gateway_web_port,"/t/rmd/front/mobile")},insUrl:function(){return"http://".concat(this.ip,":").concat(this.session_port,"/t/rmd/replay/session/").concat(this.session,"/symbol")}},created:function(){var t=this;h.a.post(this.$store.state.replay_server_url,JSON.stringify({dt:this.date})).then((function(e){t.session=e.data.session,t.ip=e.data.ip,t.session_port=e.data.session_port,t.gateway_web_port=e.data.gateway_web_port,t.startServer().then((function(){t.initTqsdk(),t.heartbeat()}),(function(){}))})).catch((function(e){t.serverStatus="服务器启动失败"}))},mounted:function(){},methods:{getServerStatus:function(){this.dots=this.dots.length>20?".":this.dots+".";var t=this;return new Promise((function(e,n){h.a.get(t.replayUrl).then((function(t){t.status>=200&&t.status<300&&t.data.status?e(t.data.status):e("unknown")})).catch((function(t){e("unknown")}))}))},waitServer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,s=this;return new Promise((function(r,a){var i=window.setTimeout((function(){o&&(clearInterval(o),a("timeout"))}),1e3*e),o=window.setInterval((function(){s.getServerStatus().then((function(e){e==t&&(clearTimeout(i),clearInterval(o),r(e))}))}),1e3*n)}))},startServer:function(){var t=this;return new Promise((function(e,n){t.waitServer("initializing",60).then((function(){t.serverStatus="initializing",t.initializingDt=a()().format("YYYY-MM-DD HH:mm:ss.SSSSSS"),t.waitServer("running",60).then((function(){t.serverStatus="running",t.runningDt=a()().format("YYYY-MM-DD HH:mm:ss.SSSSSS"),t.$emit("onChange"),e()}),(function(){t.serverStatus="超时(no running after 60s)",n()}))}),(function(){t.serverStatus="超时(no initializing after 60s)",n()}))}))},heartbeat:function(){this.sendCommand({aid:"heartbeat"}),this.sendCommand({aid:"ratio",speed:this.speedValues[this.speed]});var t=this;this.heartbeatInterval=setInterval((function(){t.sendCommand({aid:"heartbeat"}),t.getServerStatus().then((function(e){"terminated"!=e&&"unknown"!=e||(clearTimeout(t.heartbeatInterval),t.serverStatus=e,t.$emit("onChange"))}))}),3e4)},initTqsdk:function(){this.tqsdk=new p["a"]({clientAppId:"SHINNY_WEB_1.0",symbolsServerUrl:this.insUrl,wsQuoteUrl:this.mdUrl,autoInit:!1}),this.tqsdk.initMdWebsocket();var t=["KQ.m@SHFE.au","KQ.m@SHFE.ag","KQ.m@CFFEX.T","KQ.m@CFFEX.TF"];this.tqsdk.subscribe_quote(t);var e=this;this.tqsdk.on("rtn_data",(function(){var n=!0,s=!1,r=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var o=a.value,u=e.tqsdk.get_by_path(["quotes",o,"datetime"]);e.currentDateTime=u&&u>e.currentDateTime?u.slice(0,26):e.currentDateTime}}catch(c){s=!0,r=c}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}}))},sendCommand:function(t){h.a.post(this.replayUrl,JSON.stringify(t)).then((function(t){})).catch((function(t){}))},speedUp:function(){"running"==this.serverStatus&&this.speed<this.speedValues.length-1&&(this.speed++,this.sendCommand({aid:"ratio",speed:this.speedValues[this.speed]}))},speedDown:function(){"running"==this.serverStatus&&this.speed>0&&(this.speed--,this.sendCommand({aid:"ratio",speed:this.speedValues[this.speed]}))},pause:function(){"running"==this.serverStatus&&(this.isPaused?(this.isPaused=!1,this.sendCommand({aid:"ratio",speed:this.speedValues[this.speed]})):(this.isPaused=!0,this.sendCommand({aid:"ratio",speed:0})))},terminate:function(){"running"==this.serverStatus&&this.sendCommand({aid:"terminate"})}}},v=b,j=(n("f85c"),n("2877")),m=Object(j["a"])(v,d,l,!1,null,null,null),y=m.exports,_={name:"tq-home",components:{ReplayCard:y},data:function(){return{runningNumber:0,replay_dt:"20200319",replaylist:[]}},methods:{onChangeStatus:function(){var t=0,e=!0,n=!1,s=void 0;try{for(var r,a=this.$refs["replays"][Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var i=r.value;"running"==i.serverStatus&&t++}}catch(o){n=!0,s=o}finally{try{e||null==a.return||a.return()}finally{if(n)throw s}}this.runningNumber=t},addReplay:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.replaylist.length,n=0;n<t;n++)this.replaylist.push({index:e+n,date:this.replay_dt})},terminate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=!0,n=!1,s=void 0;try{for(var r,a=this.$refs["replays"][Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var i=r.value;if("running"==i.serverStatus&&(i.terminate(),t--),0===t)return}}catch(o){n=!0,s=o}finally{try{e||null==a.return||a.return()}finally{if(n)throw s}}},all:function(t){var e=!0,n=!1,s=void 0;try{for(var r,a=this.$refs["replays"][Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var i=r.value;i[t]()}}catch(o){n=!0,s=o}finally{try{e||null==a.return||a.return()}finally{if(n)throw s}}}}},g=_,w=(n("ce18"),Object(j["a"])(g,u,c,!1,null,null,null)),S=w.exports,k={name:"tq-app",components:{Tianqin:S}},C=k,z=(n("5c0b"),Object(j["a"])(C,i,o,!1,null,null,null)),x=z.exports,D=n("2f62");s["default"].use(D["a"]);var O=new D["a"].Store({state:{replay_server_url:"http://139.198.124.169/t/rmd/replay/create_session"},mutations:{set_action:function(t,e){Object.assign(t,e)},set_py_file_status:function(t,e){t.py_file_status=e}},actions:{}}),$=O,q=n("f825"),H=n.n(q);n("f8ce");s["default"].use(H.a),s["default"].config.productionTip=!1,s["default"].$eventHub=new s["default"],s["default"].prototype.$eventHub=s["default"].$eventHub;var T={name:"tianqin-web",windowHeight:window.innerHeight,windowWidth:window.innerWidth},B=new s["default"]({data:T,store:$,render:function(t){return t(x)},methods:{handlerResize:function(){T.windowHeight=window.innerHeight,T.windowWidth=window.innerWidth,this.$eventHub.$emit("window_resize",{width:T.windowWidth,height:T.windowHeight})}},created:function(){var t;function e(){t||(t=setTimeout((function(){t=null,B.handlerResize()}),200))}window.addEventListener("resize",e,!1)},errorCaptured:function(t,e,n){return!1},destroyed:function(){}}).$mount("#app");s["default"].filter("toFixed",(function(t,e){var n=Number(t);return e=Number.isInteger(e)?e:2,Number.isFinite(n)?n.toFixed(e):t||"-"}))},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},"9c0c":function(t,e,n){},ce18:function(t,e,n){"use strict";var s=n("237a"),r=n.n(s);r.a},f85c:function(t,e,n){"use strict";var s=n("53f1"),r=n.n(s);r.a}});