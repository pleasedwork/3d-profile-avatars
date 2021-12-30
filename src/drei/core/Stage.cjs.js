"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("react"),r=require("three"),n=require("@react-three/fiber"),i=require("./Environment.cjs.js"),a=require("./ContactShadows.cjs.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}require("three-stdlib"),require("use-asset"),require("../helpers/environment-assets.cjs.js");var u=s(e),c=o(t),l=o(r);const f={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}};exports.Stage=function({children:e,controls:t,shadows:r=!0,adjustCamera:s=!0,environment:o="city",intensity:d=1,preset:h="rembrandt",shadowBias:m=0,contactShadow:p={blur:2,opacity:.5,position:[0,0,0]},...b}){const g=f[h],y=n.useThree((e=>e.camera)),j=n.useThree((e=>e.controls)),w=c.useRef(null),E=c.useRef(null),[{radius:x,width:v,height:q},O]=c.useState({radius:0,width:0,height:0});return c.useLayoutEffect((()=>{w.current.position.set(0,0,0),w.current.updateWorldMatrix(!0,!0);const e=(new l.Box3).setFromObject(E.current),t=new l.Vector3,r=new l.Sphere,n=e.max.y-e.min.y,i=e.max.x-e.min.x;e.getCenter(t),e.getBoundingSphere(r),O({radius:r.radius,width:i,height:n}),w.current.position.set(-t.x,-t.y+n/2,-t.z)}),[e]),c.useLayoutEffect((()=>{if(s){const e=x/(q>v?1.5:2.5);y.position.set(0,.5*x,2.5*x),y.near=.1,y.far=Math.max(5e3,4*x),y.lookAt(0,e,0);const r=j||(null==t?void 0:t.current);r&&(r.target.set(0,e,0),r.update())}}),[j,x,q,v,s]),c.createElement("group",b,c.createElement("group",{ref:w},c.createElement("group",{ref:E},e)),p&&c.createElement(a.ContactShadows,u.default({width:2*x,height:2*x,far:x/2},p)),o&&c.createElement(i.Environment,{preset:o}),c.createElement("ambientLight",{intensity:d/3}),c.createElement("spotLight",{penumbra:1,position:[g.main[0]*x,g.main[1]*x,g.main[2]*x],intensity:2*d,castShadow:r,"shadow-bias":m}),c.createElement("pointLight",{position:[g.fill[0]*x,g.fill[1]*x,g.fill[2]*x],intensity:d}))};
