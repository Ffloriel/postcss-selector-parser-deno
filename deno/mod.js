import Processor from "./src/processor.js";
import * as selectors from "./src/selectors/index.js";

const parser = (processor) => new Processor(processor);

Object.assign(parser, selectors);

delete parser.__esModule;

export default parser;
