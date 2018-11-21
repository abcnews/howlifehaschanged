const React = require("react");
const styles = require("./styles.scss"); // Mostly for global css
const ReactResizeDetector = require("react-resize-detector").default;
const { Client } = require("../../poll-counter");

const SmoothScroll = require("smooth-scroll");

// Init the poll counter client
const client = new Client("interactive-howlifehaschanged");

// Smooth scroll library
var scroll = new SmoothScroll('a[href*="#"]');

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("../GenerationStories");

const { ContextProvider } = require("../ContextProvider");

class App extends React.Component {
  state = { myGeneration: "" };

  setGeneration = (whatGeneration, doScroll) => {
    // Only scroll if directed to
    if (doScroll) {
      // Only buttons or dropdown options cause auto-scroll
      // so we can track when a user clicks them here
      // ABC.News.trackEvent({
      //   category: "navigationClick",
      //   action: whatGeneration,
      //   label: "storyLabLifeHasChanged"
      // });

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
              const standardOffset = 50;
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
      // Scrolling past a generation waypoint sets the generation
      // so we can track scrolling here
      // ABC.News.trackEvent({
      //   category: "navigationScroll",
      //   action: whatGeneration,
      //   label: "storyLabLifeHasChanged"
      // });

      this.setState({ myGeneration: whatGeneration });
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
  }

  componentDidUpdate() {
    // hideOtherGenrations(this.state.myGeneration);
  }

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
