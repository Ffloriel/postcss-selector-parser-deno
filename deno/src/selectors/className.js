import { cssesc } from "../../deps.js";
import { ensureObject } from "../util/index.js";
import Node from "./node.js";
import { CLASS } from "./types.js";

export default class ClassName extends Node {
  constructor(opts) {
    super(opts);
    this.type = CLASS;
    this._constructed = true;
  }

  set value(v) {
    if (this._constructed) {
      let escaped = cssesc(v, { isIdentifier: true });
      if (escaped !== v) {
        ensureObject(this, "raws");
        this.raws.value = escaped;
      } else if (this.raws) {
        delete this.raws.value;
      }
    }
    this._value = v;
  }

  get value() {
    return this._value;
  }

  valueToString() {
    return "." + super.valueToString();
  }
}
