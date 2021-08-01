import Node from "./node.js";
import { STRING } from "./types.js";

export default class String extends Node {
  constructor(opts) {
    super(opts);
    this.type = STRING;
  }
}
