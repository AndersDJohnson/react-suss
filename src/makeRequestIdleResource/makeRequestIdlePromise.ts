const makeRequestIdlePromise = (resolves = true, options) =>
  new Promise<IdleDeadline>((resolve, reject) =>
    requestIdleCallback(resolves ? resolve : reject, options)
  );

export default makeRequestIdlePromise;
