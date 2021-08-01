import Node from "./node.js";
import { COMMENT } from "./types.js";

export default class Comment extends Node {
  constructor(opts) {
    super(opts);
    this.type = COMMENT;
  }
}
