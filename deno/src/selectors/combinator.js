import Node from "./node.js";
import { COMBINATOR } from "./types.js";

export default class Combinator extends Node {
  constructor(opts) {
    super(opts);
    this.type = COMBINATOR;
  }
}
