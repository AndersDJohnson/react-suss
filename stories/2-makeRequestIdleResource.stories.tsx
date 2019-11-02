import React, { Suspense } from "react";
import makeRequestIdleResource from "../src/makeRequestIdleResource";

const title = 'makeRequestIdleResource'

export default {
  title
};

const requestIdleResource = makeRequestIdleResource();

const RequestIdlePromise = ({ children }) => {
  requestIdleResource();

  return children;
};

export const usage = () => (
  <>
    <h1>
      <code>{title}</code>
    </h1>
    <Suspense fallback={"Loading when idle..."}>
      <RequestIdlePromise>Ready! Refresh page to see again.</RequestIdlePromise>
    </Suspense>
  </>
);
