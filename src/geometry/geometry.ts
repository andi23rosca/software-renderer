import { Vector3 } from "../vectors";
import { Face } from "./Face";
import { Mesh } from "./Mesh";

export const CUBE_MESH = new Mesh(
  [
    new Vector3(-1, -1, -1),
    new Vector3(-1, 1, -1),
    new Vector3(1, 1, -1),
    new Vector3(1, -1, -1),
    new Vector3(1, 1, 1),
    new Vector3(-1, 1, -1),
    new Vector3(1, -1, -1),
    new Vector3(-1, -1, 1),
  ],
  [
    // Front
    new Face(1, 2, 3),
    new Face(1, 3, 4),
    // Right
    new Face(4, 3, 5),
    new Face(4, 5, 6),
    // Back
    new Face(6, 5, 7),
    new Face(6, 7, 8),
    // Left
    new Face(8, 7, 2),
    new Face(8, 2, 1),
    // Top
    new Face(2, 7, 5),
    new Face(2, 5, 3),
    // Bottom
    new Face(6, 8, 1),
    new Face(6, 1, 4),
  ]
);
