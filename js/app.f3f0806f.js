(function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],m=0,d=[];m<l.length;m++)a=l[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],r=!0,l=1;l<i.length;l++){var s=i[l];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-view")},o=[],a={name:"App",components:{}},l=a,s=i("2877"),c=Object(s["a"])(l,n,o,!1,null,null,null),u=c.exports,m=i("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"map",attrs:{id:"map"}}),i("div",[e._v(e._s(e.index)+"---lng："+e._s(e.position.longitude)+"/lat:"+e._s(e.position.latitude)+"/altitude:"+e._s(e.position.altitude))])])},p=[],f=i("ec35");const y="pk.eyJ1IjoibGN5eSIsImEiOiJja2htc2c0OTQwaW9vMnBxcTl4c2d1NDd1In0.drhx9Uv2m-a35dsoGEencw",g="ckhmthlhs07w619nufi7i57gf",h="lcyy",b="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NWFjY2IyZC0xMDk1LTRkZmQtYjU5My01ZTdhMWU1ZTAxZmMiLCJpZCI6MzY2NTEsImlhdCI6MTYwMzg3MDA2NH0.xxGW4wAehVu2lqWA-9XT5ZjcIbvUlG6P2yHjl7-3Lu0";function v(){f["Ion"].defaultAccessToken=b}function w(e,t={}){const i=t.tileKeys||["TDT_IMG_C","TDT_CIA_C"],r=t.pos||[116.435314,40.960521,2e7],n=new f["Cartesian3"].fromDegrees(r[0],r[1],r[2]),o=t.hpr||[0,-90,0],a=new f["HeadingPitchRoll"].fromDegrees(o[0],o[1],o[2]),l={scene3DOnly:!0,geocoder:!1,homeButton:!1,navigationHelpButton:!1,selectionIndicator:!1,baseLayerPicker:!1,timeline:!1,creditsDisplay:!1,animation:!1,fullscreenButton:!1},s=new f["Viewer"](e,Object.assign({},l,t));return s.camera.flyTo({destination:n,orientation:a,endTransform:f["Matrix4"].IDENTITY}),s.scene.debugShowFramesPerSecond=!0,s.imageryLayers.remove(s.imageryLayers.get(0)),s.scene.globe.baseColor=f["Color"].WHITE,s.scene.globe.enableLighting=!0,s.scene.fog.enabled=!0,s.shadows=!0,s.scene.skyAtmosphere.saturationShift=1,I(s,i)}const T={mapbox:"",tianditu:"http://t0.tianditu.gov.cn/img_w/wmts?tk=ebf64362215c081f8317203220f133eb",google:"http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}",mapboxB:"https://api.mapbox.com/styles/v1/"+h+"/"+g+"/tiles/256/{z}/{x}/{y}?access_token="+y,TDTIMGC:"https://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb",TDTCIAC:"https://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=ebf64362215c081f8317203220f133eb"};function I(e,t){return e.tiles={mapbox:new f["ImageryLayer"](new f["MapboxImageryProvider"]({mapId:"mapbox.satellite",accessToken:y})),tianditu:new f["ImageryLayer"](new f["WebMapTileServiceImageryProvider"]({url:T.tianditu,layer:"img",style:"default",tileMatrixSetID:"w",format:"tiles"})),google:new f["ImageryLayer"](new f["UrlTemplateImageryProvider"]({url:T.google})),mapboxB:new f["ImageryLayer"](new f["UrlTemplateImageryProvider"]({url:T.mapboxB,maximumLevel:22})),TDT_IMG_C:new f["ImageryLayer"](new f["WebMapTileServiceImageryProvider"]({url:T.TDTIMGC,layer:"tdtImg_c",style:"default",format:"tiles",tileMatrixSetID:"c",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:new f["GeographicTilingScheme"],tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],maximumLevel:50,show:!1})),TDT_CIA_C:new f["ImageryLayer"](new f["WebMapTileServiceImageryProvider"]({url:T.TDTCIAC,layer:"tdtImg_c",style:"default",format:"tiles",tileMatrixSetID:"c",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:new f["GeographicTilingScheme"],tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],maximumLevel:50,show:!1}))},Object.defineProperty(e,"tileKeys",{get:()=>t,set:i=>{t=i,Object.keys(e.tiles).forEach(i=>{const r=e.tiles[i],n=e.imageryLayers.contains(r),o=t.includes(i);o&&!n?e.imageryLayers.add(r):!o&&n&&e.imageryLayers.remove(r,!1)})}}),e.tileKeys=t,e}i("e877");var x={name:"layout",data(){return{position:{},index:0}},props:{},computed:{},watch:{},created(){v()},mounted(){this.init(),this.location()},beforeDestroy(){navigator.geolocation.clearWatch()},methods:{init(){this.viewer=w("map"),this.scene=this.viewer.scene,this.camera=this.viewer.camera},resHome(){const e=new f.Cartesian3.fromDegrees(116.435314,40.960521,2e7),t=new f.HeadingPitchRoll.fromDegrees(0,-90,0);this.camera.flyTo({destination:e,orientation:t,endTransform:f.Matrix4.IDENTITY})},location(){navigator.geolocation?navigator.geolocation.watchPosition(e=>{this.position={latitude:e.coords.latitude,longitude:e.coords.longitude,altitude:e.coords.altitude+""},this.index++},()=>{alert("获取不到地理位置!")},{frequency:3,enableHighAccuracy:!0,timeout:3e3}):alert("不支持获取地理位置!")}}},M=x,_=Object(s["a"])(M,d,p,!1,null,null,null),C=_.exports;r["a"].use(m["a"]);var D=new m["a"]({routes:[{path:"/",name:"layout",component:C}]});i("b29b");r["a"].config.productionTip=!1,new r["a"]({router:D,render:e=>e(u)}).$mount("#app")},"8f15":function(e,t){function i(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="8f15"},b29b:function(e,t,i){}});