const React = require("react");
const styles = require("./styles.scss");

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("./AgeChooser");

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
      <Portal into={document.querySelector(".hashchooser")}>
        <AgeChooser setGeneration={this.setGeneration} />
      </Portal>
    );
  }
}

module.exports = App;
