import Container from "./container.js";
import { PSEUDO } from "./types.js";

export default class Pseudo extends Container {
  constructor(opts) {
    super(opts);
    this.type = PSEUDO;
  }

  toString() {
    let params = this.length ? "(" + this.map(String).join(",") + ")" : "";
    return [
      this.rawSpaceBefore,
      this.stringifyProperty("value"),
      params,
      this.rawSpaceAfter,
    ].join("");
  }
}
