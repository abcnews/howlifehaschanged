const React = require("react");
const styles = require("./styles.scss");

class ChooserButton extends React.Component {
  handleClick = () => {
    // Extract props
    const {
      currentGeneration,
      generationSlug,
      clearGeneration,
      setGeneration
    } = this.props;

    if (currentGeneration === generationSlug) clearGeneration();
    else setGeneration(generationSlug, true);
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
