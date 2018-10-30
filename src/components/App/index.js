const React = require("react");
const styles = require("./styles.scss"); // Mostly global
const d3 = Object.assign({}, require("d3-selection"));
const ReactResizeDetector = require("react-resize-detector").default;

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("../GenerationStories");

const { ContextProvider } = require("../ContextProvider");

const generations = ["genz", "millennials", "genx", "boomers", "builders"];

class App extends React.Component {
  state = { myGeneration: "allages" };

  setGeneration = whatGeneration => {
    this.setState({ myGeneration: whatGeneration });
  };

  clearGeneration = () => {
    this.setState({ myGeneration: "" });
  };

  componentDidMount() {
    hideOtherGenrations(this.state.myGeneration);
  }

  componentDidUpdate() {
    hideOtherGenrations(this.state.myGeneration);
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

function hideOtherGenrations(visibleGeneration) {
  generations.forEach(generation => {
    const gens = d3.selectAll("." + generation);
    if (visibleGeneration === "") gens.classed(styles.hidden, true);
    else if (
      visibleGeneration === "allages" ||
      generation === visibleGeneration
    )
      gens.classed(styles.hidden, false);
    else {
      gens.classed(styles.hidden, true);
    }
  });
}

module.exports = App;
