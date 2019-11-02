import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeSetTimeoutResource from "../src/makeSetTimeoutResource";

const title = "makeSetTimeoutResource";

export default {
  title
};

const setTimeoutResource = makeSetTimeoutResource(5000);

const SetTimeoutPromise = () => {
  setTimeoutResource();
  return <div>Ready! Refresh page to see again.</div>;
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading after 5 seconds..."}>
      <SetTimeoutPromise />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makeSetTimeoutResource from "react-suss/makeSetTimeoutResource";

const setTimeoutResource = makeSetTimeoutResource(5000);

const SetTimeoutPromise = () => {
  setTimeoutResource();
  return <div>Ready! Refresh page to see again.</div>;
};

<Suspense fallback={"Loading after 5 seconds..."}>
  <SetTimeoutPromise />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const setTimeoutResourceReject = makeSetTimeoutResource(5000, false);

const SetTimeoutPromiseReject = () => {
  setTimeoutResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> reject
    </h1>
    <ErrorBoundary FallbackComponent={() => "Rejected after timeout! Refresh page to see again."}>
      <Suspense fallback={"Loading after 5 seconds..."}>
        <SetTimeoutPromiseReject />
      </Suspense>
    </ErrorBoundary>
    <hr />
    <code>
      <pre>
        {`
import makeSetTimeoutResource from "react-suss/makeSetTimeoutResource";

const setTimeoutResourceReject = makeSetTimeoutResource(5000, false);

const SetTimeoutPromiseReject = () => {
  setTimeoutResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

<ErrorBoundary FallbackComponent={() => "Rejected after timeout! Refresh page to see again."}>
  <Suspense fallback={"Loading after 5 seconds..."}>
    <SetTimeoutPromiseReject />
  </Suspense>
</ErrorBoundary>
    `}
      </pre>
    </code>
  </>
);
