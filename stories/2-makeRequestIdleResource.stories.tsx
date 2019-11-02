import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeRequestIdleResource from "../src/makeRequestIdleResource";

const title = "makeRequestIdleResource";

export default {
  title
};

let resolve;
{
  const requestIdleResource = makeRequestIdleResource();

  const RequestIdlePromise = ({ children }) => {
    requestIdleResource();

    return children;
  };

  resolve = () => (
    <>
      <h1>
        <code>{title}</code> resolve
      </h1>
      <Suspense fallback={"Loading when idle..."}>
        <RequestIdlePromise>
          Ready! Refresh page to see again.
        </RequestIdlePromise>
      </Suspense>
    </>
  );
}

let reject;
{
  const requestIdleResource = makeRequestIdleResource();

  const RequestIdlePromise = ({ children }) => {
    requestIdleResource();

    return children;
  };

  reject = () => (
    <>
      <h1>
        <code>{title}</code> resolve
      </h1>
      <Suspense fallback={"Loading when idle..."}>
        <RequestIdlePromise>
          Ready! Refresh page to see again.
        </RequestIdlePromise>
      </Suspense>
    </>
  );
}

let timeout;
{
  const requestIdleResource = makeRequestIdleResource(true, {
    timeout: 1000
  });

  const RequestIdlePromise = ({ children }) => {
    requestIdleResource();

    return children;
  };

  timeout = () => (
    <>
      <h1>
        <code>{title}</code> timeout
      </h1>

      <ErrorBoundary
        FallbackComponent={() => "Timed out! Refresh page to see again."}
      >
        <Suspense fallback={"Loading after 5 seconds..."}>
          <RequestIdlePromise>
            Ready! Refresh page to see again.
          </RequestIdlePromise>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export { resolve, reject, timeout };
