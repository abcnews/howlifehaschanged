const React = require("react");
const styles = require("./styles.scss");

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("../AgeChooser");
const GenerationStories = require("./GenerationStories");

class App extends React.Component {
  constructor(props) {
    super(props); // Provide acces to "this"

    // Initialise the component state
    this.state = { myGeneration: "millennials" };
  }

  setGeneration = whatGeneration => {
    this.setState({ myGeneration: whatGeneration });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/*
          This is the "What age-group are you interested in?"
          with various buttons or a drop-down on mobile.
          It sets the App state to whichever generation the
          user is interested in learning about.
        */}
        <Portal into={document.querySelector(".hashchooser")}>
          <AgeChooser
            setGeneration={this.setGeneration}
            currentGeneration={this.state.myGeneration}
          />
        </Portal>

        {/* 
          The Generation Stories component displays different content
          depending on the current generation.
        */}
        <Portal into={document.querySelector(".hashcharts")}>
          <GenerationStories>{this.state.myGeneration}</GenerationStories>
        </Portal>
      </div>
    );
  }
}

module.exports = App;
