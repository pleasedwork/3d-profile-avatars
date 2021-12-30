import * as React from 'react';
import * as THREE from 'three';
import { Color } from '@react-three/fiber';
export declare type ImageProps = JSX.IntrinsicElements['mesh'] & {
    segments?: number;
    scale?: number;
    color?: Color;
    zoom?: number;
    grayscale?: number;
    url: string;
};
declare type ImageMaterialType = JSX.IntrinsicElements['shaderMaterial'] & {
    scale?: number[];
    imageBounds?: number[];
    color?: Color;
    map: THREE.Texture;
    zoom?: number;
    grayscale?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            imageMaterial: ImageMaterialType;
        }
    }
}
export declare const Image: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").Node<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>, typeof THREE.Mesh>, import("@react-three/fiber").NonFunctionKeys<{
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
}>> & {
    position?: import("@react-three/fiber").Vector3 | undefined;
    up?: import("@react-three/fiber").Vector3 | undefined;
    scale?: import("@react-three/fiber").Vector3 | undefined;
    rotation?: import("@react-three/fiber").Euler | undefined;
    matrix?: import("@react-three/fiber").Matrix4 | undefined;
    quaternion?: import("@react-three/fiber").Quaternion | undefined;
    layers?: import("@react-three/fiber").Layers | undefined;
    dispose?: (() => void) | null | undefined;
} & import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers & {
    segments?: number | undefined;
    scale?: number | undefined;
    color?: Color | undefined;
    zoom?: number | undefined;
    grayscale?: number | undefined;
    url: string;
}, "visible" | "attach" | "attachArray" | "attachObject" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "zoom" | "material" | "url" | "geometry" | "morphTargetInfluences" | "morphTargetDictionary" | "isMesh" | "updateMorphTargets" | "segments" | "grayscale"> & React.RefAttributes<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>>;
export {};
