const React = require("react");
const styles = require("./styles.scss");

class ChooserButton extends React.Component {
  render() {
    return <span className={styles.wrapper}>{this.props.children}</span>;
  }
}

module.exports = ChooserButton;
