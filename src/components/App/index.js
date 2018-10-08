const React = require("react");
const styles = require("./styles.scss");

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("./AgeChooser");
const GenerationStories = require("./GenerationStories");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { myGeneration: "Millenials" };
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
        <Portal into={document.querySelector(".hashchooser")}>
          <AgeChooser
            setGeneration={this.setGeneration}
            currentGeneration={this.state.myGeneration}
          />
        </Portal>
        <Portal into={document.querySelector(".hashcharts")}>
          <GenerationStories>{this.state.myGeneration}</GenerationStories>
        </Portal>
      </div>
    );
  }
}

module.exports = App;
