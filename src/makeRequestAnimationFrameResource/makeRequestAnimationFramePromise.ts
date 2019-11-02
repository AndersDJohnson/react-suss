const makeRequestAnimationFramePromise = (resolves = true) =>
  new Promise((resolve, reject) =>
    requestAnimationFrame(resolves ? resolve : reject)
  );

export default makeRequestAnimationFramePromise;
