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
