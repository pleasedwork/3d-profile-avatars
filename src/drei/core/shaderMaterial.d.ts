import * as THREE from 'three';
export declare function shaderMaterial(uniforms: {
    [name: string]: THREE.CubeTexture | THREE.Texture | Int32Array | Float32Array | THREE.Matrix4 | THREE.Matrix3 | THREE.Quaternion | THREE.Vector4 | THREE.Vector3 | THREE.Vector2 | THREE.Color | number | boolean | Array<any> | null;
}, vertexShader: string, fragmentShader: string, onInit?: (material?: THREE.ShaderMaterial) => void): {
    new (): {
        type: string;
        defines: {
            [key: string]: any;
        };
        uniforms: {
            [uniform: string]: THREE.IUniform<any>;
        };
        vertexShader: string;
        fragmentShader: string;
        linewidth: number;
        wireframe: boolean;
        wireframeLinewidth: number;
        fog: boolean;
        lights: boolean;
        clipping: boolean;
        derivatives: any;
        extensions: {
            derivatives: boolean;
            fragDepth: boolean;
            drawBuffers: boolean;
            shaderTextureLOD: boolean;
        };
        defaultAttributeValues: any;
        index0AttributeName: string | undefined;
        uniformsNeedUpdate: boolean;
        glslVersion: THREE.GLSLVersion | null;
        isShaderMaterial: boolean;
        setValues(parameters: THREE.ShaderMaterialParameters): void;
        toJSON(meta: any): any;
        alphaTest: number;
        alphaToCoverage: boolean;
        blendDst: THREE.BlendingDstFactor;
        blendDstAlpha: number | null;
        blendEquation: THREE.BlendingEquation;
        blendEquationAlpha: number | null;
        blending: THREE.Blending;
        blendSrc: THREE.BlendingDstFactor | THREE.BlendingSrcFactor;
        blendSrcAlpha: number | null;
        clipIntersection: boolean;
        clippingPlanes: any;
        clipShadows: boolean;
        colorWrite: boolean;
        depthFunc: THREE.DepthModes;
        depthTest: boolean;
        depthWrite: boolean;
        format: THREE.PixelFormat;
        id: number;
        stencilWrite: boolean;
        stencilFunc: THREE.StencilFunc;
        stencilRef: number;
        stencilWriteMask: number;
        stencilFuncMask: number;
        stencilFail: THREE.StencilOp;
        stencilZFail: THREE.StencilOp;
        stencilZPass: THREE.StencilOp;
        readonly isMaterial: true;
        name: string;
        needsUpdate: boolean;
        opacity: number;
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
        precision: "highp" | "mediump" | "lowp" | null;
        premultipliedAlpha: boolean;
        dithering: boolean;
        side: THREE.Side;
        shadowSide: THREE.Side | null;
        toneMapped: boolean;
        transparent: boolean;
        uuid: string;
        vertexColors: boolean;
        visible: boolean;
        userData: any;
        version: number;
        clone(): any;
        copy(material: THREE.Material): any;
        dispose(): void;
        onBeforeCompile(shader: THREE.Shader, renderer: THREE.WebGLRenderer): void;
        customProgramCacheKey(): string;
        addEventListener<T extends string>(type: T, listener: THREE.EventListener<THREE.Event, T, any>): void;
        hasEventListener<T_1 extends string>(type: T_1, listener: THREE.EventListener<THREE.Event, T_1, any>): boolean;
        removeEventListener<T_2 extends string>(type: T_2, listener: THREE.EventListener<THREE.Event, T_2, any>): void;
        dispatchEvent(event: THREE.Event): void;
    };
};
