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

        <ChooserDropdown
          currentGeneration={this.props.currentGeneration}
          setGeneration={setGeneration}
        />

        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"all-ages"}
        >
          All ages
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"generation-z"}
        >
          Gen Z
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"millennials"}
        >
          Millennials
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"generation-x"}
        >
          Gen X
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"baby-boomers"}
        >
          Baby Boomers
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"builders"}
        >
          Builders
        </ChooserButton>
      </div>
    );
  }
}

module.exports = AgeChooser;
