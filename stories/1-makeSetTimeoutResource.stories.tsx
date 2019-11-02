import React, { Suspense } from "react";
import makeSetTimeoutResource from "../src/makeSetTimeoutResource";

const title = 'makeSetTimeoutResource'

export default {
  title
};

const setTimeoutResource = makeSetTimeoutResource(5000);

const SetTimeoutPromise = ({ children }) => {
  setTimeoutResource();

  return children;
};

export const usage = () => (
  <>
    <h1>
      <code>{title}</code>
    </h1>
    <Suspense fallback={"Loading after 5 seconds..."}>
      <SetTimeoutPromise>Ready! Refresh page to see again.</SetTimeoutPromise>
    </Suspense>
  </>
);
