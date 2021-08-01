import Namespace from "./namespace.js";
import { TAG } from "./types.js";

export default class Tag extends Namespace {
  constructor(opts) {
    super(opts);
    this.type = TAG;
  }
}
