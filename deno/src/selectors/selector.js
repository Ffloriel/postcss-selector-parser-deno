import Container from "./container.js";
import { SELECTOR } from "./types.js";

export default class Selector extends Container {
  constructor(opts) {
    super(opts);
    this.type = SELECTOR;
  }
}
