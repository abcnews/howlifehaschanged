const React = require("react");
const styles = require("./styles.scss");
const worm = require("./worm.svg");

const Portal = require("../Portal"); // To inject components into other page areas

class App extends React.Component {
  render() {
    return (
      <Portal into={document.querySelector(".hashchooser")}>
        <div className={styles.root}>
          <img className={styles.worm} src={worm} />
          <h1>{this.props.projectName}</h1>
          <p>Just wait until Colin gets back.</p>
        </div>
      </Portal>
    );
  }
}

module.exports = App;
