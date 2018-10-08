const React = require("react");
const styles = require("./styles.scss");

const ChooserButton = require("./ChooserButton");
const ChooserDropdown = require("./ChooserDropdown");

class AgeChooser extends React.Component {
  render() {
    const { setGeneration } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.question}>
          What age-group are you interested in?
        </div>

        <ChooserDropdown />

        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          All ages
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          Gen Z
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          Millennials
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          Gen X
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          Baby Boomers
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
        >
          Builders
        </ChooserButton>
      </div>
    );
  }
}

module.exports = AgeChooser;
