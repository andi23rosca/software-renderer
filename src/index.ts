import { Canvas } from "./render";
import { Vector2, Vector3 } from "./vectors";

const c = new Canvas();

const fovFactor = 640;
const cubePoints: Vector3[] = [];
const cameraPosition = new Vector3(0, 0, -5);
let cubeRotation = new Vector3(0, 0, 0);

const setup = () => {
  let pointCount = 0;
  for (let x = -1; x <= 1; x += 0.25) {
    for (let y = -1; y <= 1; y += 0.25) {
      for (let z = -1; z <= 1; z += 0.25) {
        cubePoints[pointCount++] = new Vector3(x, y, z);
      }
    }
  }
};

const project = (v: Vector3, fov: number): Vector2 => {
  return new Vector2((v.x * fov) / v.z, (v.y * fov) / v.z);
};

const frame = (delta: number) => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  c.setSize(w, h);
  c.clear("#2B2B2B");

  c.dotGrid("#555", 10);

  const rot = 0.0005 * delta;
  cubeRotation = new Vector3(rot, rot, rot);
  if (cubeRotation.x === 180) cubeRotation = new Vector3(0, 0, 0);

  cubePoints.forEach((cubeP) => {
    cubeP = cubeP.rotate(cubeRotation).sub(cameraPosition);
    let projected = project(cubeP, fovFactor);
    projected = projected.add(new Vector2(w * 0.5, h * 0.5));
    c.rect("#489FE4", projected.x, projected.y, 4, 4);
  });

  requestAnimationFrame(frame);
  //   setTimeout(frame, 100);
};

setup();
// frame();
requestAnimationFrame(frame);
