const makeRequestIdlePromise = (resolves = true, options) =>
  new Promise((resolve, reject) =>
    requestIdleCallback(resolves ? resolve : reject, options)
  );

export default makeRequestIdlePromise;
