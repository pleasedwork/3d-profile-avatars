"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@react-three/fiber");function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(e);exports.Float=function({children:e,speed:r=1,rotationIntensity:o=1,floatIntensity:c=1,...u}){const a=n.useRef(null),i=n.useRef(1e4*Math.random());return t.useFrame((e=>{const t=i.current+e.clock.getElapsedTime();a.current.rotation.x=Math.cos(t/4*r)/8*o,a.current.rotation.y=Math.sin(t/4*r)/8*o,a.current.rotation.z=Math.sin(t/4*r)/20*o,a.current.position.y=Math.sin(t/4*r)/10*c})),n.createElement("group",u,n.createElement("group",{ref:a},e))};
