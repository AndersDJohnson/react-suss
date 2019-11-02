const makeSetTimeoutPromise = (timeout, resolves = true) =>
  new Promise<void>((resolve, reject) =>
    setTimeout(resolves ? resolve : reject, timeout)
  );

export default makeSetTimeoutPromise;
