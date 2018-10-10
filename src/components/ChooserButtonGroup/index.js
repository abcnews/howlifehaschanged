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
          All ages <span className={styles.year}>1925 - 2018</span>
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"generation-z"}
        >
          Gen Z <span className={styles.year}>1995 - 2018</span>
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"millennials"}
        >
          Millennials <span className={styles.year}>1980 - 1994</span>
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"generation-x"}
        >
          Gen X <span className={styles.year}>1965 - 1979</span>
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"baby-boomers"}
        >
          Boomers <span className={styles.year}>1946 - 1964</span>
        </ChooserButton>
        <ChooserButton
          setGeneration={setGeneration}
          currentGeneration={this.props.currentGeneration}
          generationSlug={"builders"}
        >
          Builders <span className={styles.year}>1925 - 1945</span>
        </ChooserButton>
      </div>
    );
  }
}

module.exports = ChooserButtonGroup;
