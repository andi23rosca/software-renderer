import { Mesh } from "./geometry/Mesh";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor() {
    const body = document.body;
    this.canvas = document.createElement("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;
    body.append(this.canvas);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  private setFill(color: string) {
    this.ctx.fillStyle = color;
  }

  clear(color: string) {
    this.setFill(color);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  pixel(color: string, x: number, y: number) {
    this.setFill(color);
    this.ctx.fillRect(x, y, 1, 1);
  }
  rect(color: string, x: number, y: number, w: number, h: number) {
    this.setFill(color);
    this.ctx.fillRect(x, y, w, h);
  }

  dotGrid(color: string, size: number) {
    for (let i = 0; i < this.width; i += size) {
      for (let j = 0; j < this.height; j += size) {
        this.pixel(color, i, j);
      }
    }
  }
}
