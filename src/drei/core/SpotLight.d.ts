import * as React from 'react';
import { DepthTexture, SpotLight as SpotLightImpl } from 'three';
declare const SpotLight: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").Object3DNode<SpotLightImpl, typeof SpotLightImpl>, "color" | undefined> & {
    color?: import("@react-three/fiber").Color | undefined;
} & {
    depthBuffer?: DepthTexture | undefined;
    attenuation?: number | undefined;
    anglePower?: number | undefined;
    radiusTop?: number | undefined;
    radiusBottom?: number | undefined;
    opacity?: number | undefined;
    color?: string | number | undefined;
}, "visible" | "attach" | "attachArray" | "attachObject" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "distance" | "opacity" | "decay" | "target" | "angle" | "intensity" | "isLight" | "shadow" | "shadowCameraFov" | "shadowCameraLeft" | "shadowCameraRight" | "shadowCameraTop" | "shadowCameraBottom" | "shadowCameraNear" | "shadowCameraFar" | "shadowBias" | "shadowMapWidth" | "shadowMapHeight" | "power" | "depthBuffer" | "penumbra" | "isSpotLight" | "attenuation" | "anglePower" | "radiusTop" | "radiusBottom"> & React.RefAttributes<SpotLightImpl>>;
export { SpotLight };
