import * as React from 'react';
import { MeshStandardMaterial, MeshStandardMaterialParameters } from 'three';
declare type WobbleMaterialType = JSX.IntrinsicElements['meshStandardMaterial'] & {
    time?: number;
    factor?: number;
    speed?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            wobbleMaterialImpl: WobbleMaterialType;
        }
    }
}
export declare const MeshWobbleMaterial: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").Node<MeshStandardMaterial, [MeshStandardMaterialParameters]>, "color" | undefined> & {
    color?: import("@react-three/fiber").Color | undefined;
} & {
    time?: number | undefined;
    factor?: number | undefined;
    speed?: number | undefined;
} & {
    speed?: number | undefined;
    factor?: number | undefined;
}, "visible" | "attach" | "attachArray" | "attachObject" | "args" | "children" | "key" | "onUpdate" | "dispose" | "type" | "id" | "uuid" | "name" | "userData" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | "map" | "time" | "transparent" | "fog" | "opacity" | "speed" | "precision" | "alphaTest" | "alphaToCoverage" | "blendDst" | "blendDstAlpha" | "blendEquation" | "blendEquationAlpha" | "blending" | "blendSrc" | "blendSrcAlpha" | "clipIntersection" | "clippingPlanes" | "clipShadows" | "colorWrite" | "defines" | "depthFunc" | "depthTest" | "depthWrite" | "format" | "stencilWrite" | "stencilFunc" | "stencilRef" | "stencilWriteMask" | "stencilFuncMask" | "stencilFail" | "stencilZFail" | "stencilZPass" | "isMaterial" | "needsUpdate" | "polygonOffset" | "polygonOffsetFactor" | "polygonOffsetUnits" | "premultipliedAlpha" | "dithering" | "side" | "shadowSide" | "toneMapped" | "vertexColors" | "version" | "onBeforeCompile" | "customProgramCacheKey" | "setValues" | "wireframe" | "wireframeLinewidth" | "emissive" | "emissiveIntensity" | "emissiveMap" | "lightMap" | "lightMapIntensity" | "aoMap" | "aoMapIntensity" | "alphaMap" | "envMap" | "refractionRatio" | "wireframeLinecap" | "wireframeLinejoin" | "roughness" | "metalness" | "bumpMap" | "bumpScale" | "normalMap" | "normalMapType" | "normalScale" | "displacementMap" | "displacementScale" | "displacementBias" | "roughnessMap" | "metalnessMap" | "envMapIntensity" | "flatShading" | "isMeshStandardMaterial" | "factor"> & React.RefAttributes<unknown>>;
export {};
