import React from "react";
import { Page } from "../../tutorial/Page";

// MD
import MDXContent from "../../../docs/tutorial/21.md";

// TS
import testTs from "!raw-loader!../../tutorial/21/ts/__tests__/game.test.ts";
import birdTs from "!raw-loader!../../tutorial/21/ts/bird.ts";

// JS
import testJs from "!raw-loader!../../tutorial/21/js/__tests__/game.test.js";
import birdJs from "!raw-loader!../../tutorial/21/js/bird.js";

function Tutorial() {
  return (
    <Page
      part={21}
      MDXContent={MDXContent}
      codesTs={[
        {
          file: "__tests__/game.test.ts",
          code: testTs,
          highlight: [5, 6, 8, "27-29", 32, 33, "58-93"],
        },
        {
          file: "bird.ts",
          code: birdTs,
          highlight: [10],
        },
      ]}
      codesJs={[
        {
          file: "__tests__/game.test.js",
          code: testJs,
          highlight: [3, 4, 6, "25-27", 30, 31, "56-91"],
        },
        {
          file: "bird.js",
          code: birdJs,
          highlight: [10],
        },
      ]}
      image="/img/test21.gif"
    />
  );
}

export default Tutorial;
