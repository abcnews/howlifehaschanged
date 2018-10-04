const React = require("react");
const styles = require("./styles.scss");
const worm = require("./worm.svg");

const Portal = require("../Portal"); // To inject components into other page areas
const AgeChooser = require("./AgeChooser");

class App extends React.Component {
  render() {
    return (
      <Portal into={document.querySelector(".hashchooser")}>
        <AgeChooser />
      </Portal>
    );
  }
}

module.exports = App;
