import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';
import { extend, useFrame } from '@react-three/fiber';
import mergeRefs from 'react-merge-refs';
import { Position } from '../helpers/Position.js';

let i, positionRef;
const context = /*#__PURE__*/React.createContext(null);
const parentMatrix = new THREE.Matrix4();
const position = new THREE.Vector3();
const color = new THREE.Color();
/**
 * Instance implementation, relies on react + context to update the attributes based on the children of this component
 */

const PointsInstances = /*#__PURE__*/React.forwardRef(({
  children,
  range,
  limit = 1000,
  ...props
}, ref) => {
  const parentRef = React.useRef(null);
  const [refs, setRefs] = React.useState([]);
  const [[positions, colors, sizes]] = React.useState(() => [new Float32Array(limit * 3), Float32Array.from({
    length: limit * 3
  }, () => 1), Float32Array.from({
    length: limit
  }, () => 1)]);
  React.useLayoutEffect(() => {
    parentRef.current.geometry.drawRange.count = Math.min(limit, range !== undefined ? range : limit, refs.length);
  }, [refs, range]);
  React.useEffect(() => {
    // We might be a frame too late? 🤷‍♂️
    parentRef.current.geometry.attributes.position.needsUpdate = true;
  });
  useFrame(() => {
    parentRef.current.updateMatrix();
    parentRef.current.updateMatrixWorld();
    parentMatrix.copy(parentRef.current.matrixWorld).invert();

    for (i = 0; i < refs.length; i++) {
      positionRef = refs[i].current;
      positionRef.getWorldPosition(position).applyMatrix4(parentMatrix);

      if (position.x !== positions[i * 3] || position.y !== positions[i * 3 + 1] || position.z !== positions[i * 3 + 2]) {
        position.toArray(positions, i * 3);
        parentRef.current.geometry.attributes.position.needsUpdate = true;
        positionRef.matrixWorldNeedsUpdate = true;
      }

      if (!positionRef.color.equals(color.fromArray(colors, i * 3))) {
        positionRef.color.toArray(colors, i * 3);
        parentRef.current.geometry.attributes.color.needsUpdate = true;
      }

      if (positionRef.size !== sizes[i]) {
        sizes.set([positionRef.size], i);
        parentRef.current.geometry.attributes.size.needsUpdate = true;
      }
    }
  });
  const events = React.useMemo(() => {
    const events = {};

    for (i = 0; i < refs.length; i++) {
      var _refs$i$current;

      Object.assign(events, (_refs$i$current = refs[i].current) == null ? void 0 : _refs$i$current.__r3f.handlers);
    }

    return Object.keys(events).reduce((prev, key) => ({ ...prev,
      [key]: event => {
        var _refs$event$index, _r3f, _r3f$handlers;

        const object = (_refs$event$index = refs[event.index]) == null ? void 0 : _refs$event$index.current;
        return object == null ? void 0 : (_r3f = object.__r3f) == null ? void 0 : (_r3f$handlers = _r3f.handlers) == null ? void 0 : _r3f$handlers[key]({ ...event,
          object
        });
      }
    }), {});
  }, [children, refs]);
  const api = React.useMemo(() => ({
    subscribe: ref => {
      setRefs(refs => [...refs, ref]);
      return () => setRefs(refs => refs.filter(item => item.current !== ref.current));
    }
  }), []);
  return /*#__PURE__*/React.createElement("points", _extends({
    matrixAutoUpdate: false,
    ref: mergeRefs([ref, parentRef])
  }, events, props), /*#__PURE__*/React.createElement("bufferGeometry", null, /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'position'],
    count: positions.length / 3,
    array: positions,
    itemSize: 3,
    usage: THREE.DynamicDrawUsage
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'color'],
    count: colors.length / 3,
    array: colors,
    itemSize: 3,
    usage: THREE.DynamicDrawUsage
  }), /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'size'],
    count: sizes.length,
    array: sizes,
    itemSize: 1,
    usage: THREE.DynamicDrawUsage
  })), /*#__PURE__*/React.createElement(context.Provider, {
    value: api
  }, children));
});
const Point = /*#__PURE__*/React.forwardRef(({
  children,
  ...props
}, ref) => {
  React.useMemo(() => extend({
    Position
  }), []);
  const group = React.useRef();
  const {
    subscribe
  } = React.useContext(context);
  React.useLayoutEffect(() => subscribe(group), []);
  return /*#__PURE__*/React.createElement("position", _extends({
    ref: mergeRefs([ref, group])
  }, props), children);
});
/**
 * Buffer implementation, relies on complete buffers of the correct number, leaves it to the user to update them
 */

const PointsBuffer = /*#__PURE__*/React.forwardRef(({
  children,
  positions,
  colors,
  sizes,
  stride = 3,
  ...props
}, forwardedRef) => {
  const pointsRef = React.useRef(null);
  useFrame(() => {
    const attr = pointsRef.current.geometry.attributes;
    attr.position.needsUpdate = true;

    if (colors) {
      attr.color.needsUpdate = true;
    }

    if (sizes) {
      attr.size.needsUpdate = true;
    }
  });
  return /*#__PURE__*/React.createElement("points", _extends({
    matrixAutoUpdate: false,
    ref: mergeRefs([forwardedRef, pointsRef])
  }, props), /*#__PURE__*/React.createElement("bufferGeometry", null, /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'position'],
    count: positions.length / stride,
    array: positions,
    itemSize: stride,
    usage: THREE.DynamicDrawUsage
  }), colors && /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'color'],
    count: colors.length / stride,
    array: colors,
    itemSize: 3,
    usage: THREE.DynamicDrawUsage
  }), sizes && /*#__PURE__*/React.createElement("bufferAttribute", {
    attachObject: ['attributes', 'size'],
    count: sizes.length / stride,
    array: sizes,
    itemSize: 1,
    usage: THREE.DynamicDrawUsage
  })), children);
});
const Points = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  if (props.positions instanceof Float32Array) {
    return /*#__PURE__*/React.createElement(PointsBuffer, _extends({}, props, {
      ref: forwardedRef
    }));
  }

  return /*#__PURE__*/React.createElement(PointsInstances, _extends({}, props, {
    ref: forwardedRef
  }));
});

export { Point, Points, PointsBuffer };
