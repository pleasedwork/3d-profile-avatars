import * as React from 'react';
import { Texture } from 'three';
import { MeshReflectorMaterialProps, MeshReflectorMaterial as MeshReflectorMaterialImpl } from '../materials/MeshReflectorMaterial';
export declare type Props = JSX.IntrinsicElements['meshStandardMaterial'] & {
    resolution?: number;
    mixBlur?: number;
    mixStrength?: number;
    blur?: [number, number] | number;
    mirror: number;
    minDepthThreshold?: number;
    maxDepthThreshold?: number;
    depthScale?: number;
    depthToBlurRatioBias?: number;
    debug?: number;
    distortionMap?: Texture;
    distortion?: number;
    mixContrast?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            meshReflectorMaterialImpl: MeshReflectorMaterialProps;
        }
    }
}
export declare const MeshReflectorMaterial: React.ForwardRefExoticComponent<Pick<Props, "visible" | "attach" | "attachArray" | "attachObject" | "args" | "children" | "key" | "onUpdate" | "dispose" | "type" | "id" | "uuid" | "name" | "userData" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "color" | "map" | "transparent" | "fog" | "blur" | "opacity" | "precision" | "alphaTest" | "alphaToCoverage" | "blendDst" | "blendDstAlpha" | "blendEquation" | "blendEquationAlpha" | "blending" | "blendSrc" | "blendSrcAlpha" | "clipIntersection" | "clippingPlanes" | "clipShadows" | "colorWrite" | "defines" | "depthFunc" | "depthTest" | "depthWrite" | "format" | "stencilWrite" | "stencilFunc" | "stencilRef" | "stencilWriteMask" | "stencilFuncMask" | "stencilFail" | "stencilZFail" | "stencilZPass" | "isMaterial" | "needsUpdate" | "polygonOffset" | "polygonOffsetFactor" | "polygonOffsetUnits" | "premultipliedAlpha" | "dithering" | "side" | "shadowSide" | "toneMapped" | "vertexColors" | "version" | "onBeforeCompile" | "customProgramCacheKey" | "setValues" | "resolution" | "wireframe" | "wireframeLinewidth" | "emissive" | "emissiveIntensity" | "emissiveMap" | "lightMap" | "lightMapIntensity" | "aoMap" | "aoMapIntensity" | "alphaMap" | "envMap" | "refractionRatio" | "wireframeLinecap" | "wireframeLinejoin" | "roughness" | "metalness" | "bumpMap" | "bumpScale" | "normalMap" | "normalMapType" | "normalScale" | "displacementMap" | "displacementScale" | "displacementBias" | "roughnessMap" | "metalnessMap" | "envMapIntensity" | "flatShading" | "isMeshStandardMaterial" | "minDepthThreshold" | "maxDepthThreshold" | "depthScale" | "depthToBlurRatioBias" | "mixBlur" | "mixStrength" | "mirror" | "debug" | "distortion" | "mixContrast" | "distortionMap"> & React.RefAttributes<MeshReflectorMaterialImpl>>;
