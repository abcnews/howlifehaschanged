const React = require("react");
const { render } = require("react-dom");
const d3 = Object.assign({}, require("d3-selection"));

const PROJECT_NAME = "howlifehaschanged";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

const App = require("./components/App");
const TeaserIllo = require("./components/TeaserIllo");

preInit();
init();

function preInit() {
  const header = d3.select(".Header");
  // header.style("background-color", "#175482");
  header.insert("div", ":first-child").classed("pre-header", true);
}

function init() {
  const teaserIllo = document.querySelector(".pre-header");

  render(<TeaserIllo projectName={PROJECT_NAME} />, teaserIllo);
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
