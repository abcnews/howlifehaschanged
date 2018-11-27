const React = require("react");
const styles = require("./styles.scss"); // Mostly for global css
const ReactResizeDetector = require("react-resize-detector").default;
const { Client } = require("../../poll-counter");

const SmoothScroll = require("smooth-scroll");

// Init the poll counter client
const client = new Client("interactive-howlifehaschanged");

// Smooth scroll library
const scroll = new SmoothScroll('a[href*="#"]');

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("../GenerationStories");

const { ContextProvider } = require("../ContextProvider");

class App extends React.Component {
  state = { myGeneration: "", isAutoScrolling: false };

  isAutoScrolling = false;

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
            offset: function(anchor, toggle) {
              const standardOffset = 80;
              const toggleOffset = 0; // No toggle offset now that there's no appearing header
              const boundsTop = anchor.getBoundingClientRect().top;

              // Adjust the offset depending on scroll direction
              if (boundsTop > 0) return standardOffset;
              else return standardOffset + toggleOffset;
            }
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

  componentDidUpdate() {
    // hideOtherGenrations(this.state.myGeneration);
  }

  componentWillUnmount() {
    document.removeEventListener("scrollStart", this.fireScrollEvent);
    document.removeEventListener("scrollStop", this.fireScrollEvent);
    document.removeEventListener("scrollCancel", this.fireScrollEvent);
  }

  // Auto scroll events handler
  fireScrollEvent = event => {
    // The event type
    // console.log("type:", event.type);

    // So we know whether we are auto-scrolling or not
    if (event.type === "scrollStart") this.isAutoScrolling = true; //this.setState({ isAutoScrolling: true });
    if (event.type === "scrollStop") this.isAutoScrolling = false; //this.setState({ isAutoScrolling: false });
    if (event.type === "scrollCancel")
    this.isAutoScrolling = false; //this.setState({ isAutoScrolling: false });

    // Set to off after 10 seconds anyway just in case
    // setTimeout(() => {
    //   this.isAutoScrolling = false; //this.setState({ isAutoScrolling: false });
    // }, 10000);
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
                  // state: this.state,
                  width: width
                }}
              >
                {/*
                  This is the "What age-group are you interested in?"
                  with various buttons or a drop-down on mobile.
                  It sets the App state to whichever generation the
                  user is interested in learning about.
                */}
                <Portal into={document.querySelector(".hashchooser")}>
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
                <Portal into={document.querySelector(".hashcharts")}>
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

// WE ARE NOT DOING THIS ANY MORE
// JUST SCROLLING TO SECTION INSTEAD
// function hideOtherGenrations(visibleGeneration) {
//   generations.forEach(generation => {
//     const gens = d3.selectAll("." + generation);
//     if (visibleGeneration === "") gens.classed(styles.hidden, true);
//     else if (
//       visibleGeneration === "allages" ||
//       generation === visibleGeneration
//     )
//       gens.classed(styles.hidden, false);
//     else {
//       gens.classed(styles.hidden, true);
//     }
//   });
// }

module.exports = App;
