import * as React from 'react';
import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters } from 'three';
declare type DistortMaterialType = JSX.IntrinsicElements['meshPhysicalMaterial'] & {
    time?: number;
    distort?: number;
    radius?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            distortMaterialImpl: DistortMaterialType;
        }
    }
}
export declare const MeshDistortMaterial: React.ForwardRefExoticComponent<Pick<Omit<import("@react-three/fiber").Node<MeshPhysicalMaterial, [MeshPhysicalMaterialParameters]>, "color" | undefined> & {
    color?: import("@react-three/fiber").Color | undefined;
} & {
    time?: number | undefined;
    distort?: number | undefined;
    radius?: number | undefined;
} & {
    speed?: number | undefined;
    factor?: number | undefined;
}, "visible" | "attach" | "attachArray" | "attachObject" | "args" | "children" | "key" | "onUpdate" | "dispose" | "type" | "id" | "uuid" | "name" | "userData" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | "map" | "time" | "transparent" | "fog" | "opacity" | "speed" | "precision" | "alphaTest" | "alphaToCoverage" | "blendDst" | "blendDstAlpha" | "blendEquation" | "blendEquationAlpha" | "blending" | "blendSrc" | "blendSrcAlpha" | "clipIntersection" | "clippingPlanes" | "clipShadows" | "colorWrite" | "defines" | "depthFunc" | "depthTest" | "depthWrite" | "format" | "stencilWrite" | "stencilFunc" | "stencilRef" | "stencilWriteMask" | "stencilFuncMask" | "stencilFail" | "stencilZFail" | "stencilZPass" | "isMaterial" | "needsUpdate" | "polygonOffset" | "polygonOffsetFactor" | "polygonOffsetUnits" | "premultipliedAlpha" | "dithering" | "side" | "shadowSide" | "toneMapped" | "vertexColors" | "version" | "onBeforeCompile" | "customProgramCacheKey" | "setValues" | "wireframe" | "wireframeLinewidth" | "emissive" | "emissiveIntensity" | "emissiveMap" | "lightMap" | "lightMapIntensity" | "aoMap" | "aoMapIntensity" | "alphaMap" | "envMap" | "reflectivity" | "refractionRatio" | "wireframeLinecap" | "wireframeLinejoin" | "clearcoat" | "clearcoatMap" | "clearcoatRoughness" | "clearcoatRoughnessMap" | "clearcoatNormalScale" | "clearcoatNormalMap" | "ior" | "sheen" | "sheenColor" | "sheenColorMap" | "sheenRoughness" | "sheenRoughnessMap" | "transmission" | "transmissionMap" | "thickness" | "thicknessMap" | "attenuationDistance" | "attenuationColor" | "specularIntensity" | "specularColor" | "specularIntensityMap" | "specularColorMap" | "roughness" | "metalness" | "bumpMap" | "bumpScale" | "normalMap" | "normalMapType" | "normalScale" | "displacementMap" | "displacementScale" | "displacementBias" | "roughnessMap" | "metalnessMap" | "envMapIntensity" | "flatShading" | "isMeshStandardMaterial" | "radius" | "distort" | "factor"> & React.RefAttributes<unknown>>;
export {};
