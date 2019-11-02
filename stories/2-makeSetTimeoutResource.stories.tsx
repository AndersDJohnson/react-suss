import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeSetTimeoutResource from "../src/makeSetTimeoutResource";

const title = "makeSetTimeoutResource";

export default {
  title
};

export const intro = () => (
  <>
    <h1>
      <code>{title}</code>
    </h1>

    <p>A React Suspense resource to delay rendering until after a timeout.</p>

    <p>
      You could use this as a poor man's prioritization or scheduling mechanism,
      e.g., delay rendering of content below the fold to leave more system
      resources for rendering content above the fold first.
    </p>
  </>
);

const setTimeoutResource = makeSetTimeoutResource(3000);

const SetTimeout = () => {
  setTimeoutResource();
  return <div>Ready! Refresh page to see again.</div>;
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading after 3 seconds..."}>
      <SetTimeout />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makeSetTimeoutResource from "react-suss/makeSetTimeoutResource";

const setTimeoutResource = makeSetTimeoutResource(3000);

const SetTimeout = () => {
  setTimeoutResource();
  return <div>Ready! Refresh page to see again.</div>;
};

<Suspense fallback={"Loading after 3 seconds..."}>
  <SetTimeout />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const setTimeoutResourceReject = makeSetTimeoutResource(3000, false);

const SetTimeoutReject = () => {
  setTimeoutResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> reject
    </h1>
    <ErrorBoundary
      FallbackComponent={() =>
        "Rejected after timeout! Refresh page to see again."
      }
    >
      <Suspense fallback={"Loading after 3 seconds..."}>
        <SetTimeoutReject />
      </Suspense>
    </ErrorBoundary>
    <hr />
    <code>
      <pre>
        {`
import makeSetTimeoutResource from "react-suss/makeSetTimeoutResource";

const setTimeoutResourceReject = makeSetTimeoutResource(3000, false);

const SetTimeoutReject = () => {
  setTimeoutResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

<ErrorBoundary FallbackComponent={() => "Rejected after timeout! Refresh page to see again."}>
  <Suspense fallback={"Loading after 3 seconds..."}>
    <SetTimeoutReject />
  </Suspense>
</ErrorBoundary>
    `}
      </pre>
    </code>
  </>
);
