"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("react"),r=require("three");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var u=n(e),c=a(t);const s=1e-5;const o=c.forwardRef((function({args:[e=1,t=1,n=1]=[],radius:a=.05,smoothness:o=4,children:f,...i},l){const b=c.useMemo((()=>function(e,t,n){const a=new r.Shape,u=n-s;return a.absarc(s,s,s,-Math.PI/2,-Math.PI,!0),a.absarc(s,t-2*u,s,Math.PI,Math.PI/2,!0),a.absarc(e-2*u,t-2*u,s,Math.PI/2,0,!0),a.absarc(e-2*u,s,s,0,-Math.PI/2,!0),a}(e,t,a)),[e,t,a]),d=c.useMemo((()=>({depth:n-2*a,bevelEnabled:!0,bevelSegments:2*o,steps:1,bevelSize:a-s,bevelThickness:a,curveSegments:o})),[n,a,o]),h=c.useRef();return c.useLayoutEffect((()=>{h.current&&h.current.center()}),[b,d]),c.createElement("mesh",u.default({ref:l},i),c.createElement("extrudeBufferGeometry",{attach:"geometry",ref:h,args:[b,d]}),f)}));exports.RoundedBox=o;
