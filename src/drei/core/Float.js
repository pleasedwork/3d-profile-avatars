import * as React from 'react';
import { useFrame } from '@react-three/fiber';

function Float({
  children,
  speed = 1,
  rotationIntensity = 1,
  floatIntensity = 1,
  ...props
}) {
  const ref = React.useRef(null);
  const offset = React.useRef(Math.random() * 10000);
  useFrame(state => {
    const t = offset.current + state.clock.getElapsedTime();
    ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
    ref.current.position.y = Math.sin(t / 4 * speed) / 10 * floatIntensity;
  });
  return /*#__PURE__*/React.createElement("group", props, /*#__PURE__*/React.createElement("group", {
    ref: ref
  }, children));
}

export { Float };
