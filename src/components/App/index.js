const React = require("react");
const styles = require("./styles.scss");
const worm = require("./worm.svg");

const Portal = require("../Portal");

class App extends React.Component {
  render() {
    return (
      <Portal into={document.querySelector(".hashchooser")}>
        <div className={styles.root}>
          <img className={styles.worm} src={worm} />
          <h1>{this.props.projectName}</h1>
          <p>This is dumb</p>
        </div>
      </Portal>
    );
  }
}

module.exports = App;
