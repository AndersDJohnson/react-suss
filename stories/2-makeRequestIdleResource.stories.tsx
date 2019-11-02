import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makeRequestIdleResource from "../src/makeRequestIdleResource";

const title = "makeRequestIdleResource";

export default {
  title
};

const requestIdleResource = makeRequestIdleResource();

const RequestIdlePromise = () => {
  requestIdleResource();
  return <div>Ready! Refresh page to see again.</div>;
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading when idle..."}>
      <RequestIdlePromise />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makeRequestIdleResource from "react-suss/makeRequestIdleResource";

const requestIdleResource = makeRequestIdleResource();

const RequestIdlePromise = () => {
  requestIdleResource();
  return <div>Ready! Refresh page to see again.</div>;
};

<Suspense fallback={"Loading when idle..."}>
  <RequestIdlePromise />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const requestIdleResourceReject = makeRequestIdleResource();

const RequestIdlePromiseReject = () => {
  requestIdleResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Loading when idle..."}>
      <RequestIdlePromiseReject />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makeRequestIdleResource from "react-suss/makeRequestIdleResource";

const requestIdleResourceReject = makeRequestIdleResource();

const RequestIdlePromiseReject = () => {
  requestIdleResourceReject();
  return <div>Ready! Refresh page to see again.</div>;
};

<Suspense fallback={"Loading when idle..."}>
  <RequestIdlePromiseReject />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const requestIdleResourceTimeout = makeRequestIdleResource(true, {
  timeout: 10
});

const RequestIdlePromiseTimeout = () => {
  requestIdleResourceTimeout();
  return <div>Ready! Refresh page to see again.</div>;
};

export const timeout = () => (
  <>
    <h1>
      <code>{title}</code> timeout
    </h1>
    <ErrorBoundary
      FallbackComponent={() => "Timed out! Refresh page to see again."}
    >
      <Suspense fallback={"Loading when idle until timeout..."}>
        <RequestIdlePromiseTimeout />
      </Suspense>
    </ErrorBoundary>
    <hr />
    <code>
      <pre>
        {`
import makeRequestIdleResource from "react-suss/makeRequestIdleResource";

const requestIdleResourceTimeout = makeRequestIdleResource(true, {
  timeout: 10
});

const RequestIdlePromiseTimeout = () => {
  requestIdleResourceTimeout();
  return <div>Ready! Refresh page to see again.</div>;
};

<ErrorBoundary
  FallbackComponent={() => "Timed out! Refresh page to see again."}
>
  <Suspense fallback={"Loading when idle until timeout..."}>
    <RequestIdlePromiseTimeout />
  </Suspense>
</ErrorBoundary>
    `}
      </pre>
    </code>
  </>
);
