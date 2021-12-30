import React, { Suspense } from 'react';
import Avatar from './components/avatar';
import { Canvas } from '@react-three/fiber/native';
import { Environment, OrbitControls } from './drei/native';

interface AvatarViewProps {
  url: string;
  eyeBlink?: boolean;
  headMovement?: boolean;
  rotateAvatar?: boolean;
  style?: React.CSSProperties;
}

const defaultStyle = {
  width: '250px',
  height: '250px',
  backgroundColor: 'orange',
  borderRadius: '100%',
};

export default function AvatarView({
  url,
  style,
  rotateAvatar,
  eyeBlink,
  headMovement,
}: AvatarViewProps) {
  return (
    <Canvas
      style={style || defaultStyle}
      camera={{ fov: 40, position: [0, 0, 0.6] }}
    >
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {rotateAvatar && <OrbitControls enablePan={false} enableZoom={false} key={undefined} object={undefined} onPointerMissed={undefined} dispose={undefined} quaternion={undefined} position={undefined} reset={undefined} enabled={undefined} attach={undefined} args={undefined} children={undefined} onUpdate={undefined} up={undefined} scale={undefined} rotation={undefined} matrix={undefined} layers={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerCancel={undefined} onWheel={undefined} attachArray={undefined} attachObject={undefined} update={undefined} keys={undefined} touches={undefined} connect={undefined} minDistance={undefined} maxDistance={undefined} minZoom={undefined} maxZoom={undefined} minPolarAngle={undefined} maxPolarAngle={undefined} minAzimuthAngle={undefined} maxAzimuthAngle={undefined} dampingFactor={undefined} zoomSpeed={undefined} enableRotate={undefined} rotateSpeed={undefined} panSpeed={undefined} screenSpacePanning={undefined} keyPanSpeed={undefined} autoRotate={undefined} autoRotateSpeed={undefined} mouseButtons={undefined} target0={undefined} position0={undefined} zoom0={undefined} _domElementKeyEvents={undefined} getPolarAngle={undefined} getAzimuthalAngle={undefined} setPolarAngle={undefined} setAzimuthalAngle={undefined} getDistance={undefined} listenToKeyEvents={undefined} saveState={undefined} />}
        <Avatar url={url} eyeBlink={eyeBlink} headMovement={headMovement} />
      </Suspense>
    </Canvas>
  );
}
