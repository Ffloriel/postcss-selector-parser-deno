import Node from "./node.js";
import { ID as IDType } from "./types.js";

export default class ID extends Node {
  constructor(opts) {
    super(opts);
    this.type = IDType;
  }

  valueToString() {
    return "#" + super.valueToString();
  }
}
