import Node from "./node.js";
import { NESTING } from "./types.js";

export default class Nesting extends Node {
  constructor(opts) {
    super(opts);
    this.type = NESTING;
    this.value = "&";
  }
}
