const React = require("react");
const styles = require("./styles.scss").default; // Mostly global css
const ReactResizeDetector = require("react-resize-detector").default;
const { Client } = require("../../poll-counter"); // Tracking clicks and scrolls

const SmoothScroll = require("smooth-scroll");

// Initialise the poll counter client
const client = new Client("interactive-howlifehaschanged");

// Smooth scroll library
const scroll = new SmoothScroll('a[href*="#"]');

const Portal = require("../Portal"); // To inject components into other page areas

// Other components
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("../GenerationStories");

// Set up a global React context to consume down the chain
const { ContextProvider } = require("../ContextProvider");

class App extends React.Component {
  // Can set state directly if no constructor needed
  state = { myGeneration: "" };

  isAutoScrolling = false; // Used for poll tracking

  // Handles when the user selects the generation they want to jump to (scroll enabled)
  // Or sets the generation when a user scrolls to that section (do not auto-scroll)
  setGeneration = (whatGeneration, doScroll) => {
    // Only scroll if directed to
    if (doScroll) {
      // Select element and scroll to it
      const sectionHead = document.querySelector("." + whatGeneration);

      if (sectionHead) {
        scroll.animateScroll(
          sectionHead, // Node
          null, // Toggle
          {
            speed: 750,
            easing: "easeInOutCubic",
            offset: function (anchor, toggle) {
              const standardOffset = 80;
              const toggleOffset = 0; // No toggle offset now that there's no appearing header
              const boundsTop = anchor.getBoundingClientRect().top;

              // Adjust the offset depending on scroll direction
              if (boundsTop > 0) return standardOffset;
              else return standardOffset + toggleOffset;
            },
          }
        );
      }

      // Firebase poll count for clicks
      client.increment(
        { question: "age-group-clicked", answer: whatGeneration },
        (err, question) => {
          if (err) return console.log("Err:", err);
        }
      );

      // Scroll now sets generation so this will be called
      // if a generation waypoint is hit
    } else {
      this.setState({ myGeneration: whatGeneration });

      // Scrolling only by user logging
      if (!this.isAutoScrolling && whatGeneration !== "") {
        client.increment(
          { question: "age-group-scrolled", answer: whatGeneration },
          (err, question) => {
            if (err) return console.log("Err:", err);
          }
        );
      }
    }
  };

  // Resets myGeneration back to nothing (initial state)
  clearGeneration = () => {
    this.setState({ myGeneration: "" });
  };

  componentDidMount() {
    // Poll count page load
    client.increment(
      { question: "page-loaded-with-js", answer: "loaded" },
      (err, question) => {
        if (err) return console.log("Err:", err);
      }
    );

    // Listen for scroll events
    document.addEventListener("scrollStart", this.fireScrollEvent, false);
    document.addEventListener("scrollStop", this.fireScrollEvent, false);
    document.addEventListener("scrollCancel", this.fireScrollEvent, false);
  }

  componentWillUnmount() {
    // Clean up our event listeners on hot reload
    document.removeEventListener("scrollStart", this.fireScrollEvent);
    document.removeEventListener("scrollStop", this.fireScrollEvent);
    document.removeEventListener("scrollCancel", this.fireScrollEvent);
  }

  // Auto scroll events handler
  fireScrollEvent = (event) => {
    // So we know whether we are auto-scrolling or not
    if (event.type === "scrollStart") this.isAutoScrolling = true;
    if (event.type === "scrollStop") this.isAutoScrolling = false;
    if (event.type === "scrollCancel") this.isAutoScrolling = false;
  };

  render() {
    return (
      <div>
        <ReactResizeDetector handleWidth>
          {(width, height) => {
            return (
              // Global context is provided to any
              // consumers.
              <ContextProvider
                value={{
                  width: width,
                }}
              >
                {/*
                  This is the "What age-group are you interested in?"
                  with various buttons or a drop-down on mobile.
                  It sets the App state to whichever generation the
                  user is interested in learning about.
                */}
                <Portal into={document.getElementById("hashchooser")}>
                  <AgeChooser
                    setGeneration={this.setGeneration}
                    clearGeneration={this.clearGeneration}
                    currentGeneration={this.state.myGeneration}
                    resizeWidth={width}
                  />
                </Portal>

                {/* 
                  The Generation Stories component displays different content
                  depending on the current generation.
                */}
                <Portal into={document.getElementById("hashcharts")}>
                  <GenerationStories
                    currentGeneration={this.state.myGeneration}
                  />
                </Portal>
              </ContextProvider>
            );
          }}
        </ReactResizeDetector>
      </div>
    );
  }
}

module.exports = App;
