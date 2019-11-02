import makeResourceFromPromise from "../util/makeResourceFromPromise";

const makePromiseResource = <ResolveType>(promise: Promise<ResolveType>) => makeResourceFromPromise(promise);

export default makePromiseResource;
