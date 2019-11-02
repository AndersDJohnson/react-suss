const makeSetTimeoutPromise = (timeout, resolves = true) =>
  new Promise((resolve, reject) =>
    setTimeout(resolves ? resolve : reject, timeout)
  );

export default makeSetTimeoutPromise;
