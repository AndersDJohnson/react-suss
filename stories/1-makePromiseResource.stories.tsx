import React, { Suspense } from "react";
// @ts-ignore
import { ErrorBoundary } from "react-error-boundary";
import makePromiseResource from "../src/makePromiseResource";

const title = "makePromiseResource";

export default {
  title
};

export const intro = () => (
  <>
    <h1>
      <code>{title}</code>
    </h1>

    <p>
      A React Suspense resource you can create from any <code>Promise</code>.
    </p>

    <p>
      For example, you could give this a call to <code>fetch</code> that
      requests your data.
    </p>
  </>
);

const promiseResource = makePromiseResource(
  new Promise(resolve => setTimeout(() => resolve("Hello"), 3000))
);

const PromiseResource = () => {
  const value = promiseResource();
  return (
    <div>
      Resolved with value <code>{JSON.stringify(value)}</code>! Refresh page to
      see again.
    </div>
  );
};

export const resolve = () => (
  <>
    <h1>
      <code>{title}</code> resolve
    </h1>
    <Suspense fallback={"Waiting for promise..."}>
      <PromiseResource />
    </Suspense>
    <hr />
    <code>
      <pre>
        {`
import makePromiseResource from "react-suss/makePromiseResource";

const promiseResource = makePromiseResource(
  new Promise(resolve => setTimeout(() => resolve("Hello"), 3000))
);

const PromiseResource = () => {
  const value = promiseResource();
  return (
    <div>
      Resolved with value <code>{JSON.stringify(value)}</code>! Refresh page to
      see again.
    </div>
  );
};

<Suspense fallback={"Waiting for promise..."}>
  <PromiseResource />
</Suspense>
    `}
      </pre>
    </code>
  </>
);

const promiseResourceReject = makePromiseResource(
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Oops")), 3000)
  )
);

const PromiseResourceReject = () => {
  promiseResourceReject();
  return <div>Resolved! Refresh page to see again.</div>;
};

export const reject = () => (
  <>
    <h1>
      <code>{title}</code> reject
    </h1>
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <>
          Rejected with error <code>{error.message}</code>! Refresh page to see
          again.
        </>
      )}
    >
      <Suspense fallback={"Waiting for promise..."}>
        <PromiseResourceReject />
      </Suspense>
    </ErrorBoundary>
    <hr />
    <code>
      <pre>
        {`
import makePromiseResource from "react-suss/makePromiseResource";

const promiseResourceReject = makePromiseResource(
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Oops")), 3000)
  )
);

const PromiseResourceReject = () => {
  promiseResourceReject();
  return <div>Resolved! Refresh page to see again.</div>;
};

<ErrorBoundary
  FallbackComponent={({ error }) => (
    <>
      Rejected with error <code>{error.message}</code>! Refresh page to see
      again.
    </>
  )}
>
  <Suspense fallback={"Waiting for promise..."}>
    <PromiseResourceReject />
  </Suspense>
</ErrorBoundary>
    `}
      </pre>
    </code>
  </>
);
