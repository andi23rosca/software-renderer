import { Vector3 } from "../vectors";
import { Face } from "./Face";

export class Mesh {
  vertices: Vector3[];
  faces: Face[];

  constructor(vertices: Vector3[], faces: Face[]) {
    this.vertices = vertices;
    this.faces = faces;
  }
}
