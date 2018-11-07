const React = require("react");
const { render } = require("react-dom");
const d3 = Object.assign({}, require("d3-selection"));
// const hashify = require("spanify").hashify;
import { hashify } from "spanify";

const PROJECT_NAME = "howlifehaschanged";
const root = document.querySelector(`[data-${PROJECT_NAME}-root]`);

// Runs at page load and full request but not on hot reload
function preFlight(odyssey) {
  // Odyssey header modifications
  // const header = d3.select(".Header");
  // header.insert("div", ":first-child").classed("pre-header", true);


  const h1 = d3.select(".Header h1");
  const h1original = h1.html();
  console.log(
    h1.html(
      `<div class="pre-header"></div>
        ${h1original}
      <div class="post-header"></div>`
    )
  );

  const classesToHide = require("./data").classesToHide;

  // Turn anchors into divs
  hashify({
    hashList: ["hashchooser", "hashcharts", ...classesToHide],
    defaultClass: "u-full"
  });

  // Add classes to paragraphs
  hashNext("class");

  // Hide the chart title text coming in from CoreMedia
  hideTitles(classesToHide);
}

// Re-loads on hot reload
function init(odyssey) {
  const App = require("./components/App");
  const PreHeader = require("./components/PreHeader");

  // Render the pre-header animation
  render(
    <PreHeader projectName={PROJECT_NAME} />,
    document.querySelector(".pre-header")
  );

  // Render main App
  render(<App projectName={PROJECT_NAME} />, root);
}

if (module.hot) {
  module.hot.accept(["./components/App", "./components/PreHeader"], () => {
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

// Add class via CoreMedia hashtags eg. #classverytop
function hashNext(targetString) {
  // Set deafult for params
  if (targetString === undefined) {
    targetString = "class";
  }

  const anchors = document.querySelectorAll("a");

  // Loop through all the anchor nodes
  anchors.forEach(anchor => {
    // Leave normal links on the page alone
    if (anchor.innerHTML !== " ") return;

    // Get name value
    const elementName = anchor.getAttribute("name");

    // Detect class
    if (elementName.slice(0, targetString.length) !== targetString) return;

    // Get class name to apply
    const classToApply = elementName.substr(targetString.length);

    // Get the next paragraph to work with
    const nextElement = anchor.nextElementSibling;

    // Apply the class
    nextElement.classList.add(classToApply);

    // Remove anchor
    anchor.parentNode.removeChild(anchor);
  });
}

function hideTitles(classesToHide) {
  classesToHide.forEach(paragraphClass => {
    if (document.querySelector("." + paragraphClass)) {
      d3.select(
        document.querySelector("." + paragraphClass).previousSibling
      ).classed("interactive-always-hidden", true);
    }
  });
}
