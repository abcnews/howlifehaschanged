const React = require("react");
const styles = require("./styles.scss");

const ChooserButton = require("../ChooserButton");

class ChooserButtonGroup extends React.Component {
  render() {
    // Function passed down from main App
    const { setGeneration, clearGeneration } = this.props;

    return (
      <div className={styles.wrapper}>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"children"}
        >
          Children
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"teenagers"}
        >
          Teenagers
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"thirties"}
        >
          Thirties
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"forties"}
        >
          Forties
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"fifties"}
        >
          Fifties
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"sixties"}
        >
          Sixties
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"seventiesandover"}
        >
          Seventies and over
        </ChooserButton>
      </div>
    );
  }
}

module.exports = ChooserButtonGroup;
