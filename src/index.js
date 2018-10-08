const React = require("react");
const { render } = require("react-dom");
const d3 = Object.assign({}, require("d3-selection"));
const hashify = require("spanify").hashify;

const PROJECT_NAME = "howlifehaschanged";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

// Runs at page load and full request but not on hot reload
function preFlight(odyssey) {
  // Odyssey header modifications
  const header = d3.select(".Header");
  header.insert("div", ":first-child").classed("pre-header", true);

  // Turn anchors into divs
  hashify({ hashList: ["hashchooser", "hashcharts"], defaultClass: "u-full" });
}

// Re-loads on hot reload
function init(odyssey) {
  const App = require("./components/App");
  const TeaserIllo = require("./components/TeaserIllo");

  // Render the pre-header animation
  render(
    <TeaserIllo projectName={PROJECT_NAME} />,
    document.querySelector(".pre-header")
  );

  // Render main App
  render(<App projectName={PROJECT_NAME} />, root);
}

if (module.hot) {
  module.hot.accept(["./components/App", "./components/TeaserIllo"], () => {
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
