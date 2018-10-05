const React = require("react");
const styles = require("./styles.scss");

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("./AgeChooser");

const Context = React.createContext({ test: true });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { myGeneration: "Millenials" };
  }

  render() {
    return (
      <Portal into={document.querySelector(".hashchooser")}>
        <AgeChooser />
      </Portal>
    );
  }
}

module.exports = App;
