import makeResourceFromPromise from "../util/makeResourceFromPromise";
import makeRequestAnimationFramePromise from "./makeRequestAnimationFramePromise";

const makeRequestAnimationFrameResource = (resolves?) =>
  makeResourceFromPromise(makeRequestAnimationFramePromise(resolves));

export default makeRequestAnimationFrameResource;
