import Namespace from "./namespace.js";
import { UNIVERSAL } from "./types.js";

export default class Universal extends Namespace {
  constructor(opts) {
    super(opts);
    this.type = UNIVERSAL;
    this.value = "*";
  }
}
