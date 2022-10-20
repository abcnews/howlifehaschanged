const React = require("react");
const styles = require("./styles.scss").default;

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
          0 - 10
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"teenagers"}
        >
          11 - 20
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"twenties"}
        >
          21 - 30
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"thirties"}
        >
          31 - 40
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"forties"}
        >
          41 - 50
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"fifties"}
        >
          51 - 60
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"sixties"}
        >
          61 - 70
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          clearGeneration={clearGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"seventiesandover"}
        >
          70 +
        </ChooserButton>
      </div>
    );
  }
}

module.exports = ChooserButtonGroup;
