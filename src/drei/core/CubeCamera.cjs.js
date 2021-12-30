"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),r=require("react"),t=require("@react-three/fiber");function n(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var u=n(r);exports.CubeCamera=function({children:r,fog:n,frames:a=1/0,resolution:i=256,near:c=1,far:o=1e3,...f}){const s=u.useRef(),[l,g]=u.useState(),b=t.useThree((({scene:e})=>e)),m=t.useThree((({gl:e})=>e)),d=u.useMemo((()=>new e.WebGLCubeRenderTarget(i,{minFilter:e.LinearFilter,magFilter:e.LinearFilter,format:e.RGBFormat,encoding:m.outputEncoding})),[i]);let p=0;return t.useFrame((()=>{if(l&&s.current&&(a===1/0||p<a)){s.current.traverse((e=>e.visible=!1));const e=b.fog;b.fog=n||e,l.update(m,b),b.fog=e,s.current.traverse((e=>e.visible=!0)),p++}})),u.createElement("group",f,u.createElement("cubeCamera",{ref:g,args:[c,o,d]}),u.createElement("group",{ref:s},r(d.texture)))};
