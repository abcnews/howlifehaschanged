const React = require("react");
const styles = require("./styles.scss"); // Mostly global
const d3 = Object.assign({}, require("d3-selection"));
const ReactResizeDetector = require("react-resize-detector").default;

const SmoothScroll = require("smooth-scroll");

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
      // Scroll now sets generation so only set the generation
      // if we are not auto-scrolling 
    } else this.setState({ myGeneration: whatGeneration });
  };

  clearGeneration = () => {
    this.setState({ myGeneration: "" });
  };

  componentDidMount() {
    // hideOtherGenrations(this.state.myGeneration);
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
