(function(e){function t(t){for(var i,a,l=t[0],c=t[1],s=t[2],f=0,m=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],a={name:"App",components:{}},l=a,c=n("2877"),s=Object(c["a"])(l,r,o,!1,null,null,null),u=s.exports,f=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"map",attrs:{id:"map"}}),n("div",{staticClass:"nav"},e._l(e.nav,(function(t,i){return n("div",{key:i,staticClass:"nav-item",class:{active:e.active===i},on:{click:function(t){return e.onClick(i)}}},[e._v(e._s(t.name))])})),0)])},d=[],p=(n("d81d"),n("159b"),n("b64b"),n("caad"),n("2532"),n("7898"),n("ec35")),y="pk.eyJ1IjoibGN5eSIsImEiOiJja2htc2c0OTQwaW9vMnBxcTl4c2d1NDd1In0.drhx9Uv2m-a35dsoGEencw",b="ckhmthlhs07w619nufi7i57gf",v="lcyy",h="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWFjY2IyZC0xMDk1LTRkZmQtYjU5My01ZTdhMWU1ZTAxZmMiLCJpZCI6MzY2NTEsImlhdCI6MTYwMzg3MDA2NH0.xxGW4wAehVu2lqWA-9XT5ZjcIbvUlG6P2yHjl7-3Lu0";function g(){p["f"].defaultAccessToken=h}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tileKeys||["TDT_IMG_C","TDT_CIA_C"],i=t.pos||[116.435314,40.960521,2e7],r=new p["a"].fromDegrees(i[0],i[1],i[2]),o=t.hpr||[0,-90,0],a=new p["d"].fromDegrees(o[0],o[1],o[2]),l={scene3DOnly:!0,geocoder:!1,homeButton:!1,navigationHelpButton:!1,selectionIndicator:!1,baseLayerPicker:!1,timeline:!1,creditsDisplay:!1,animation:!1,fullscreenButton:!1},c=new p["k"](e,Object.assign({},l,t));return c.camera.flyTo({destination:r,orientation:a,endTransform:p["h"].IDENTITY}),c.scene.debugShowFramesPerSecond=!0,c.imageryLayers.remove(c.imageryLayers.get(0)),c.scene.globe.baseColor=p["b"].WHITE,c.scene.globe.enableLighting=!0,c.scene.fog.enabled=!0,c.shadows=!0,c.scene.skyAtmosphere.saturationShift=1,x(c,n)}var T={mapbox:"",tianditu:"http://t0.tianditu.gov.cn/img_w/wmts?tk=ebf64362215c081f8317203220f133eb",google:"http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}",mapboxB:"https://api.mapbox.com/styles/v1/"+v+"/"+b+"/tiles/256/{z}/{x}/{y}?access_token="+y,TDTIMGC:"https://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb",TDTCIAC:"https://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb"};function x(e,t){return e.tiles={mapbox:new p["e"](new p["g"]({mapId:"mapbox.satellite",accessToken:y})),tianditu:new p["e"](new p["l"]({url:T.tianditu,layer:"img",style:"default",tileMatrixSetID:"w",format:"tiles"})),google:new p["e"](new p["j"]({url:T.google})),mapboxB:new p["e"](new p["j"]({url:T.mapboxB,maximumLevel:22})),TDT_IMG_C:new p["e"](new p["l"]({url:T.TDTIMGC,layer:"tdtImg_c",style:"default",format:"tiles",tileMatrixSetID:"c",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:new p["c"],tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],maximumLevel:50,show:!1})),TDT_CIA_C:new p["e"](new p["l"]({url:T.TDTCIAC,layer:"tdtImg_c",style:"default",format:"tiles",tileMatrixSetID:"c",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:new p["c"],tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],maximumLevel:50,show:!1}))},Object.defineProperty(e,"tileKeys",{get:function(){return t},set:function(n){t=n,Object.keys(e.tiles).forEach((function(n){var i=e.tiles[n],r=e.imageryLayers.contains(i),o=t.includes(n);o&&!r?e.imageryLayers.add(i):!o&&r&&e.imageryLayers.remove(i,!1)}))}}),e.tileKeys=t,e}n("e877");var I={name:"layout",data:function(){return{nav:[{name:"地图",key:"0"},{name:"列表",key:"1"},{name:"我的",key:"2"},{name:"商城",key:"3"},{name:"其他",key:"4"}],active:2}},props:{},computed:{},watch:{},created:function(){g()},mounted:function(){this.init()},beforeDestroy:function(){},methods:{init:function(){this.map=w("map")},onClick:function(e){this.active!==e&&(this.active=e)}}},C=I,k=Object(c["a"])(C,m,d,!1,null,null,null),M=k.exports;i["a"].use(f["a"]);var _=new f["a"]({routes:[{path:"/",name:"layout",component:M}]});n("b29b");i["a"].config.productionTip=!1,new i["a"]({router:_,render:function(e){return e(u)}}).$mount("#app")},"8f15":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="8f15"},b29b:function(e,t,n){}});
//# sourceMappingURL=app.78783810.js.map