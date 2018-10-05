const React = require("react");
const styles = require("./styles.scss");

class ChooserButton extends React.Component {
  handleClick = () => {
    console.log("this is:", this.props.children);
    this.props.setGeneration(this.props.children);
  };

  render() {
    const isActive = this.props.children === this.props.currentGeneration;
    return (
      <button onClick={this.handleClick} className={styles.wrapper + " " + (isActive ? styles.active : styles.inactive)}>
        {this.props.children}
      </button>
    );
  }
}

module.exports = ChooserButton;
