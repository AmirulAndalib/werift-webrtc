import { DtxBase, type DtxInput, type DtxOutput } from "./dtx";
import { SimpleProcessorCallbackBase } from "./interface";

export class DtxCallback extends SimpleProcessorCallbackBase<
  DtxInput,
  DtxOutput,
  typeof DtxBase
>(DtxBase) {}
