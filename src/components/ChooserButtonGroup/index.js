const React = require("react");
const styles = require("./styles.scss");

const ChooserButton = require("../ChooserButton");

class ChooserButtonGroup extends React.Component {
  render() {
    // Function passed down from main App
    const { setGeneration } = this.props;
    
    return (
      <div className={styles.wrapper}>
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
          Generation Z
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
          Generation X
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

module.exports = ChooserButtonGroup;
