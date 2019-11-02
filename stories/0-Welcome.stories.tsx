import React from "react";
// import { linkTo } from '@storybook/addon-links';

export default {
  title: "react-suss"
};

// export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const intro = () => (
  <>
    <p>
      <code>react-suss</code> is a collection of resources for use with React
      Suspense.
    </p>

    <p>
      As you explore each resource, you may want to refresh the page, since
      resources in these stories are created on page load, and may have already
      settled by the time you view the story.
    </p>
  </>
);
