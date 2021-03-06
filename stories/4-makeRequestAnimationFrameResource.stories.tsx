import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeRequestAnimationFrameResource from "../src/makeRequestAnimationFrameResource";

const title = "makeRequestAnimationFrameResource";

export default {
  title
};

export const intro = () => (
  <>
    <h1>
      <code>{title}</code>
    </h1>

    <p>
      A React Suspense resource to delay rendering until browser is ready to
      animate.
    </p>

    <p>
      You could use this as a way to defer rendering until the browser is ready
      to repaint.
    </p>
  </>
);

const requestAnimationFrameResource = makeRequestAnimationFrameResource();

const RequestAnimation = () => {
  requestAnimationFrameResource();
  return <div>Ready! Refresh page to see again.</div>;
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading until animation frame..."}>
      <RequestAnimation />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makeRequestAnimationFrameResource from "react-suss/makeRequestAnimationFrameResource";

const requestAnimationFrameResource = makeRequestAnimationFrameResource();

const RequestAnimation = () => {
  requestAnimationFrameResource();
  return <div>Ready! Refresh page to see again.</div>;
};

<Suspense fallback={"Loading until animation frame..."}>
  <RequestAnimation />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const requestAnimationFrameResourceReject = makeRequestAnimationFrameResource(
  false
);

const RequestAnimationReject = () => {
  requestAnimationFrameResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <ErrorBoundary
      FallbackComponent={() =>
        "Rejected once animation frame! Refresh page to see again."
      }
    >
      <Suspense fallback={"Loading until animation frame..."}>
        <RequestAnimationReject />
      </Suspense>
    </ErrorBoundary>
    <hr />
    <code>
      <pre>
        {`
import makeRequestAnimationFrameResource from "react-suss/makeRequestAnimationFrameResource";

const requestAnimationFrameResourceReject = makeRequestAnimationFrameResourceReject();

const RequestAnimationReject = () => {
  requestAnimationFrameResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

<ErrorBoundary
  FallbackComponent={() => "Rejected once animation frame! Refresh page to see again."}
>
  <Suspense fallback={"Loading until animation frame..."}>
    <RequestAnimationReject />
  </Suspense>
</ErrorBoundary>
    `}
      </pre>
    </code>
  </>
);
