const rotateAdjacent = (x: number, y: number, angle: number) =>
  x * Math.cos(angle) - y * Math.sin(angle);

const rotateOpposite = (x: number, y: number, angle: number) =>
  y * Math.cos(angle) + x * Math.sin(angle);

export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
  }
  addS(scalar: number): Vector2 {
    return new Vector2(this.x + scalar, this.y + scalar);
  }

  rotate(angle: number): Vector2 {
    return new Vector2(
      rotateAdjacent(this.x, this.y, angle),
      rotateOpposite(this.x, this.y, angle)
    );
  }

  swizzle(s: "xx" | "xy" | "yx" | "yy"): Vector2 {
    switch (s) {
      case "xx":
        return new Vector2(this.x, this.x);
      case "xy":
        return new Vector2(this.x, this.y);
      case "yx":
        return new Vector2(this.y, this.x);
      case "yy":
        return new Vector2(this.y, this.y);
    }
  }
}

export class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  toVec2(): Vector2 {
    return new Vector2(this.x, this.y);
  }

  add(v: Vector3): Vector3 {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }
  sub(v: Vector3): Vector3 {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }
  addS(scalar: number): Vector3 {
    return new Vector3(this.x + scalar, this.y + scalar, this.z + scalar);
  }

  rotate_x(angle: number): Vector3 {
    return new Vector3(
      this.x,
      rotateAdjacent(this.y, this.z, angle),
      rotateOpposite(this.y, this.z, angle)
    );
  }
  rotate_y(angle: number): Vector3 {
    return new Vector3(
      rotateAdjacent(this.x, this.z, angle),
      this.y,
      rotateOpposite(this.x, this.z, angle)
    );
  }
  rotate_z(angle: number): Vector3 {
    return new Vector3(
      rotateAdjacent(this.x, this.y, angle),
      rotateOpposite(this.x, this.y, angle),
      this.z
    );
  }
  rotate(rot: Vector3): Vector3 {
    return this.rotate_x(rot.x).rotate_y(rot.y).rotate_z(rot.z);
  }
}
