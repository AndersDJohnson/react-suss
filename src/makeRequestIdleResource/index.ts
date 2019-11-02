import makeResourceFromPromise from "../util/makeResourceFromPromise";
import makeRequestIdlePromise from "./makeRequestIdlePromise";

const makeRequestIdleResource = (resolves?, options?) =>
  makeResourceFromPromise(makeRequestIdlePromise(resolves, options));

export default makeRequestIdleResource;
