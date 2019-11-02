import React from "react";
// import { linkTo } from '@storybook/addon-links';

export default {
  title: "react-suss"
};

// export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const intro = () => (
  <>
    <h1>
      <a href="https://github.com/AndersDJohnson/react-suss">
        <code>react-suss</code>
      </a>
    </h1>

    <p>
      <code>react-suss</code> is a collection of resources for use with React
      Suspense.
    </p>

    <p>
      <a href="https://www.npmjs.com/package/react-suss">
        <img src="https://img.shields.io/npm/v/react-suss" alt="npm" />
      </a>
    </p>

    <p>
      <a
        href="https://copyhaste.com/c?t=npm%20add%20react-suss"
        title="npm add react-suss (copy)"
      >
        <img
          src="https://copyhaste.com/i?t=npm%20add%20react-suss"
          alt="npm add react-suss (copy)"
        />
      </a>
      <a
        href="https://copyhaste.com/c?t=yarn%20add%20react-suss"
        title="yarn add react-suss (copy)"
      >
        <img
          src="https://copyhaste.com/i?t=yarn%20add%20react-suss"
          alt="yarn add react-suss (copy)"
        />
      </a>
    </p>

    <p>
      As of October 2019, it may be best to use these with the experimental
      builds of React. See{" "}
      <a href="https://reactjs.org/docs/concurrent-mode-adoption.html">
        Adopting Concurrent Mode (Experimental) at ReactJS.org
      </a>
      .
    </p>

    <p>
      As you explore each resource, you may want to refresh the page, since
      resources in these stories are created on page load, and may have already
      settled by the time you view the story.
    </p>

    <p>
      <a href="https://github.com/AndersDJohnson/react-suss">
        Source at GitHub
      </a>
    </p>
  </>
);
