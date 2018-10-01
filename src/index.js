const React = require("react");
const { render } = require("react-dom");
const d3 = Object.assign({}, require("d3-selection"));

const PROJECT_NAME = "howlifehaschanged";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

function init() {
  const App = require("./components/App");
  render(<App projectName={PROJECT_NAME} />, root);
  changeHeaderBackground();
}

init();

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

function changeHeaderBackground() {
  const header = d3.select(".Header");
  header.style("background-color", "#175482");
}
