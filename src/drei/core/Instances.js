import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';
import { extend, useFrame } from '@react-three/fiber';
import mergeRefs from 'react-merge-refs';
import Composer from 'react-composer';
import { Position } from '../helpers/Position.js';

let i, instanceRef;
const globalContext = /*#__PURE__*/React.createContext(null);
const parentMatrix = new THREE.Matrix4();
const instanceMatrix = new THREE.Matrix4();
const tempMatrix = new THREE.Matrix4();
const color = new THREE.Color();
const translation = new THREE.Vector3();
const rotation = new THREE.Quaternion();
const scale = new THREE.Vector3();
const Instance = /*#__PURE__*/React.forwardRef(({
  context,
  children,
  ...props
}, ref) => {
  React.useMemo(() => extend({
    Position
  }), []);
  const group = React.useRef();
  const {
    subscribe,
    getParent
  } = React.useContext(context || globalContext);
  React.useLayoutEffect(() => subscribe(group), []);
  return /*#__PURE__*/React.createElement("position", _extends({
    instance: getParent(),
    instanceKey: group,
    ref: mergeRefs([ref, group])
  }, props), children);
});
const Instances = /*#__PURE__*/React.forwardRef(({
  children,
  range,
  limit = 1000,
  frames = Infinity,
  ...props
}, ref) => {
  const [{
    context,
    instance
  }] = React.useState(() => {
    const context = /*#__PURE__*/React.createContext(null);
    return {
      context,
      instance: /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Instance, _extends({
        context: context
      }, props, {
        ref: ref
      })))
    };
  });
  const parentRef = React.useRef(null);
  const [instances, setInstances] = React.useState([]);
  const [[matrices, colors]] = React.useState(() => {
    const mArray = new Float32Array(limit * 16);

    for (i = 0; i < limit; i++) tempMatrix.identity().toArray(mArray, i * 16);

    return [mArray, new Float32Array([...new Array(limit * 3)].map(() => 1))];
  });
  React.useLayoutEffect(() => {
    parentRef.current.count = parentRef.current.instanceMatrix.updateRange.count = parentRef.current.instanceColor.updateRange.count = Math.min(limit, range !== undefined ? range : limit, instances.length);
  }, [instances, range]);
  React.useEffect(() => {
    // We might be a frame too late? 🤷‍♂️
    parentRef.current.instanceMatrix.needsUpdate = true;
  });
  let count = 0;
  useFrame(() => {
    if (frames === Infinity || count < frames) {
      parentRef.current.updateMatrix();
      parentRef.current.updateMatrixWorld();
      parentMatrix.copy(parentRef.current.matrixWorld).invert();

      for (i = 0; i < instances.length; i++) {
        instanceRef = instances[i].current; // Multiply the inverse of the InstancedMesh world matrix or else
        // Instances will be double-transformed if <Instances> isn't at identity

        instanceRef.matrixWorld.decompose(translation, rotation, scale);
        instanceMatrix.compose(translation, rotation, scale).premultiply(parentMatrix);

        if (!instanceMatrix.equals(tempMatrix.fromArray(matrices, i * 16))) {
          instanceMatrix.toArray(matrices, i * 16);
          parentRef.current.instanceMatrix.needsUpdate = true;
        }

        if (!instanceRef.color.equals(color.fromArray(colors, i * 3))) {
          instanceRef.color.toArray(colors, i * 3);
          parentRef.current.instanceColor.needsUpdate = true;
        }
      }

      count++;
    }
  });
  const api = React.useMemo(() => ({
    getParent: () => parentRef,
    subscribe: ref => {
      setInstances(instances => [...instances, ref]);
      return () => setInstances(instances => instances.filter(item => item.current !== ref.current));
    }
  }), []);
  return /*#__PURE__*/React.createElement("instancedMesh", _extends({
    userData: {
      instances
    },
    matrixAutoUpdate: false,
    ref: mergeRefs([ref, parentRef]),
    args: [null, null, 0],
    raycast: () => null
  }, props), /*#__PURE__*/React.createElement("instancedBufferAttribute", {
    attach: "instanceMatrix",
    count: matrices.length / 16,
    array: matrices,
    itemSize: 16,
    usage: THREE.DynamicDrawUsage
  }), /*#__PURE__*/React.createElement("instancedBufferAttribute", {
    attach: "instanceColor",
    count: colors.length / 3,
    array: colors,
    itemSize: 3,
    usage: THREE.DynamicDrawUsage
  }), typeof children === 'function' ? /*#__PURE__*/React.createElement(context.Provider, {
    value: api
  }, children(instance)) : /*#__PURE__*/React.createElement(globalContext.Provider, {
    value: api
  }, children));
});

function Merged({
  meshes,
  children,
  ...props
}) {
  const isArray = Array.isArray(meshes); // Filter out meshes from collections, which may contain non-meshes

  if (!isArray) for (const key of Object.keys(meshes)) if (!meshes[key].isMesh) delete meshes[key];
  return /*#__PURE__*/React.createElement(Composer, {
    components: (isArray ? meshes : Object.values(meshes)).map(({
      geometry,
      material
    }) => /*#__PURE__*/React.createElement(Instances, _extends({
      key: geometry.uuid,
      geometry: geometry,
      material: material
    }, props)))
  }, args => isArray ? children(...args) : children(Object.keys(meshes).filter(key => meshes[key].isMesh).reduce((acc, key, i) => ({ ...acc,
    [key]: args[i]
  }), {})));
}

export { Instance, Instances, Merged };
