import makeResourceFromPromise from "../util/makeResourceFromPromise";

const makePromiseResource = promise => makeResourceFromPromise(promise);

export default makePromiseResource;
