import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeSetTimeoutResource from "../src/makeSetTimeoutResource";

const title = "makeSetTimeoutResource";

export default {
  title
};

const setTimeoutResource = makeSetTimeoutResource(5000);

const SetTimeoutPromise = ({ children }) => {
  setTimeoutResource();

  return children;
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading after 5 seconds..."}>
      <SetTimeoutPromise>Ready! Refresh page to see again.</SetTimeoutPromise>
    </Suspense>
  </>
);

const setTimeoutResourceReject = makeSetTimeoutResource(5000, false);

const SetTimeoutPromiseReject = ({ children }) => {
  setTimeoutResourceReject();

  return children;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> reject
    </h1>
    <ErrorBoundary FallbackComponent={() => "Timed out! Refresh page to see again."}>
      <Suspense fallback={"Loading after 5 seconds..."}>
        <SetTimeoutPromiseReject>
          Ready! Refresh page to see again.
        </SetTimeoutPromiseReject>
      </Suspense>
    </ErrorBoundary>
  </>
);
