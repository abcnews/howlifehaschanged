const React = require("react");
const styles = require("./styles.scss");

class ChooserButton extends React.Component {
  handleClick = () => {
    this.props.setGeneration(this.props.generationSlug);
  };

  render() {
    const isActive = this.props.currentGeneration === this.props.generationSlug;
    return (
      <button
        onClick={this.handleClick}
        className={
          styles.wrapper + " " + (isActive ? styles.active : styles.inactive)
        }
        value={this.props.generationSlug}
      >
        {this.props.children}
      </button>
    );
  }
}

module.exports = ChooserButton;
