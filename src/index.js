const React = require("react");
const { render } = require("react-dom");
const d3 = Object.assign({}, require("d3-selection"));

const PROJECT_NAME = "howlifehaschanged";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const App = require("./components/App");
const TeaserIllo = require("./components/TeaserIllo");

let PUBLIC_PATH = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  console.log("development");
} else {
  // production code
  console.log("production");
  PUBLIC_PATH =
    "http://www.abc.net.au/res/sites/news-projects/howlifehaschanged/master";
  __webpack_public_path__ =
    "http://www.abc.net.au/res/sites/news-projects/howlifehaschanged/master";
}

function preFlight(odyssey) {
  // Odyssey header modifications
  const header = d3.select(".Header");
  header.insert("div", ":first-child").classed("pre-header", true);
}

function init(odyssey) {
  const teaserIllo = document.querySelector(".pre-header");

  render(
    <TeaserIllo projectName={PROJECT_NAME} publicPath={PUBLIC_PATH} />,
    teaserIllo
  );
}

if (module.hot) {
  module.hot.accept("./components/App", () => {
    try {
      init();
    } catch (err) {
      const ErrorBox = require("./components/ErrorBox");
      render(<ErrorBox error={err} />, root);
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}

// Wait for Odyssey to load
if (window.__ODYSSEY__) {
  preFlight(window.__ODYSSEY__);
  init(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", e => {
    preFlight(e.detail);
    init(e.detail);
  });
}
