import * as THREE from 'three';

const _instanceLocalMatrix = /*@__PURE__*/new THREE.Matrix4();

const _instanceWorldMatrix = /*@__PURE__*/new THREE.Matrix4();

const _instanceIntersects = [];

const _mesh = /*@__PURE__*/new THREE.Mesh();

class Position extends THREE.Group {
  constructor() {
    super();
    this.color = new THREE.Color('white');
    this.instance = {
      current: undefined
    };
    this.instanceKey = {
      current: undefined
    };
  } // This will allow the virtual instance have bounds


  get geometry() {
    var _this$instance$curren;

    return (_this$instance$curren = this.instance.current) == null ? void 0 : _this$instance$curren.geometry;
  } // And this will allow the virtual instance to receive events


  raycast(raycaster, intersects) {
    const parent = this.instance.current;
    if (!parent) return;
    if (!parent.geometry || !parent.material) return;
    _mesh.geometry = parent.geometry;
    const matrixWorld = parent.matrixWorld;
    let instanceId = parent.userData.instances.indexOf(this.instanceKey);
    if (instanceId === -1) return; // calculate the world matrix for each instance

    parent.getMatrixAt(instanceId, _instanceLocalMatrix);

    _instanceWorldMatrix.multiplyMatrices(matrixWorld, _instanceLocalMatrix); // the mesh represents this single instance


    _mesh.matrixWorld = _instanceWorldMatrix;

    _mesh.raycast(raycaster, _instanceIntersects); // process the result of raycast


    for (let i = 0, l = _instanceIntersects.length; i < l; i++) {
      const intersect = _instanceIntersects[i];
      intersect.instanceId = instanceId;
      intersect.object = this;
      intersects.push(intersect);
    }

    _instanceIntersects.length = 0;
  }

}

export { Position };
