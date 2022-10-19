/*


This is the main entry point for the 
interactive part of the article.


*/

require("./pollyfills"); // To make IE11 work etc

console.log("we are running...");

import React from "react";
import { render } from "react-dom";
import { hashify } from "spanify";
import { isMount, getMountValue, selectMounts } from "@abcnews/mount-utils";

// SCSS png imports playing up so let's import here
const bg = require("./components/App/background.png").default;

// Only import what we need from D3
// There may be an es6 way of doing this in future
const d3 = Object.assign({}, require("d3-selection"));

// Load Keyshape into global
require("./keyshape.js"); // This controls SVG animations

const PROJECT_NAME = "howlifehaschanged";
// const root = document.querySelector(`[data-${PROJECT_NAME}-root]`); <- Old phase 1 way
let root;

// User agent detection for iOS bug
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

// Runs at page load and full request but not on hot reload
function preFlight(odyssey) {
  // Get main mount point for the App
  root = selectMounts("howlifehaschangedmount")[0];

  // Insert divs above and below header text
  const h1 = d3.select(".Header h1");
  const h1original = h1.html();

  h1.html(
    `<div class="pre-header"></div>
        ${h1original}
      <div class="post-header"></div>`
  );

  const classesToHide = require("./data").classesToHide;

  // Turn anchors into divs
  // hashify({
  //   hashList: ["hashchooser", "hashcharts", ...classesToHide],
  //   defaultClass: "u-full",
  // });
  // ^^^^^^ No longer works in PL so do it manually

  const idList = ["hashchooser", "hashcharts", ...classesToHide];

  idList.forEach((id) => {
    const hashChooser = selectMounts(id)[0];
    if (hashChooser) hashChooser.classList.add("u-full");
  });

  // Add classes to paragraphs
  // hashNext("class"); <-- no longer works due to PL #hashes being ids now
  addClassToNext("class");

  // Add pre-header animations on all subheadings
  const childrenHeader = d3.select("h2.children");
  const childrenHeaderOriginal = childrenHeader.html();
  childrenHeader.html(
    `<div class="children-icon" aria-hidden="true"></div>
        ${childrenHeaderOriginal}`
  );

  const teenagersHeader = d3.select("h2.teenagers");
  const teenagersHeaderOriginal = teenagersHeader.html();
  teenagersHeader.html(
    `<div class="teenagers-icon" aria-hidden="true"></div>
        ${teenagersHeaderOriginal}`
  );

  const twentiesHeader = d3.select("h2.twenties");
  const twentiesHeaderOriginal = twentiesHeader.html();
  twentiesHeader.html(
    `<div class="twenties-icon" aria-hidden="true"></div>
        ${twentiesHeaderOriginal}`
  );

  const thirtiesHeader = d3.select("h2.thirties");
  const thirtiesHeaderOriginal = thirtiesHeader.html();
  thirtiesHeader.html(
    `<div class="thirties-icon" aria-hidden="true"></div>
        ${thirtiesHeaderOriginal}`
  );

  const fortiesHeader = d3.select("h2.forties");
  const fortiesHeaderOriginal = fortiesHeader.html();
  fortiesHeader.html(
    `<div class="forties-icon" aria-hidden="true"></div>
        ${fortiesHeaderOriginal}`
  );

  const fiftiesHeader = d3.select("h2.fifties");
  const fiftiesHeaderOriginal = fiftiesHeader.html();
  fiftiesHeader.html(
    `<div class="fifties-icon" aria-hidden="true"></div>
        ${fiftiesHeaderOriginal}`
  );

  const sixtiesHeader = d3.select("h2.sixties");
  const sixtiesHeaderOriginal = sixtiesHeader.html();
  sixtiesHeader.html(
    `<div class="sixties-icon" aria-hidden="true"></div>
        ${sixtiesHeaderOriginal}`
  );

  const seventiesandoverHeader = d3.select("h2.seventiesandover");
  const seventiesandoverHeaderOriginal = seventiesandoverHeader.html();
  seventiesandoverHeader.html(
    `<div class="seventiesandover-icon" aria-hidden="true"></div>
        ${seventiesandoverHeaderOriginal}`
  );

  // Hide the chart title text coming in from CoreMedia
  // (We removed the titles in CoreMedia so not needed any more)
  // hideTitles(classesToHide);

  // Add fixe background element (for iOS mobile Safari being stupid)
  if (iOSSafari) {
    const fixedBackground = d3.select("body").insert("div", ":first-child");
    fixedBackground.classed("fixed-background", true);
    fixedBackground.style("background-image", `url("${bg}")`);
  } else {
    // Background image from scss styles not working for some reason.
    // So let's try to set here instead
    const body = d3.select("body");
    body.style("background-image", `url("${bg}")`);
  }

  // Fix incorrect inverted commas ‘20: too young to get married?’
  // Caused by smartquotes library
  const quoteFix = d3.select(".quotefix");
  if (!quoteFix.empty()) {
    const quoteString = quoteFix.html();
    const newString = quoteString.replace("’", "‘");
    const realNewString = newString.replace("′", "’");
    quoteFix.html(realNewString);
  }
}

// Re-loads on hot reload
function init(odyssey) {
  const App = require("./components/App");
  const PreHeader = require("./components/PreHeader");

  // Render the header animations
  render(
    <PreHeader projectName={PROJECT_NAME} />,
    document.querySelector(".pre-header")
  );

  // Render main App
  render(<App projectName={PROJECT_NAME} />, root);
}

// Set up hot reload with webpack dev server
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

// Wait for Odyssey to load and then proceed with init
if (window.__ODYSSEY__) {
  preFlight(window.__ODYSSEY__);
  init(window.__ODYSSEY__);
} else {
  window.addEventListener("odyssey:api", (e) => {
    preFlight(e.detail);
    init(e.detail);
  });
}

/**
 * Applies classes to the next element following a mount
 * @param {string} targetString
 */
function addClassToNext(targetString) {
  // Set deafult for params
  if (targetString === undefined) {
    targetString = "class";
  }

  const foundMounts = selectMounts(targetString);

  // Loop through all the anchor nodes
  foundMounts.forEach((mount) => {
    // Get name value
    const elementName = mount.getAttribute("id");

    if (elementName === null) return;

    // Detect class
    if (elementName.slice(0, targetString.length) !== targetString) return;

    // Get class name to apply
    const classToApply = elementName.substring(targetString.length);

    // Get the next paragraph to work with
    const nextElement = mount.nextElementSibling;

    // Apply the class
    nextElement.classList.add(classToApply);

    // Remove anchor
    mount.parentNode.removeChild(mount);
  });
}
