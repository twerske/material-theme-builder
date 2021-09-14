import * as functions from "firebase-functions";
import * as sass from "sass";

export const convertSCSSToCSS = functions.https.onCall((data: {scss: string}) => {
  const themeSCSS = data.scss.replace("/n", "");

  const result = sass.renderSync({
    data: themeSCSS,
    outputStyle: "compressed",
    includePaths: [
      "node_modules/@angular/material/_index.scss",
      "node_modules/@angular/material/_index",
      "node_modules/@angular/material",
    ],
  });
  const css = result.css.toString();

  return css;
});
