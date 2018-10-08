const React = require("react");
const styles = require("./styles.scss");

class ChartStory extends React.Component {
  render() {
    return <div className={styles.wrapper}>{this.props.children}</div>;
  }
}

module.exports = ChartStory;
