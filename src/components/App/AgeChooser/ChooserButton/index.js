const React = require("react");
const styles = require("./styles.scss");

class ChooserButton extends React.Component {
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <button onClick={this.handleClick} className={styles.wrapper}>
        {this.props.children}
      </button>
    );
  }
}

module.exports = ChooserButton;