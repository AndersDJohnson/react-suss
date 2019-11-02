const makeRequestAnimationFramePromise = (resolves = true) =>
  new Promise<DOMHighResTimeStamp>((resolve, reject) =>
    requestAnimationFrame(resolves ? resolve : reject)
  );

export default makeRequestAnimationFramePromise;
