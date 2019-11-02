import makeResourceFromPromise from "../util/makeResourceFromPromise";
import makeSetTimeoutPromise from "./makeSetTimeoutPromise";

const makeSetTimeoutResource = (timeout, resolves?) =>
  makeResourceFromPromise(makeSetTimeoutPromise(timeout, resolves));

export default makeSetTimeoutResource;
