const React = require("react");
const styles = require("./styles.scss");

const ChooserButton = require("./ChooserButton");

class AgeChooser extends React.Component {
  render() {
    const setGeneration = this.props.setGeneration;
    return (
      <div className={styles.wrapper}>
        <div className={styles.question}>
          What age-group are you interested in?
        </div>
        <ChooserButton setGeneration={setGeneration} currentGeneration={this.props.currentGeneration}>Generation Z</ChooserButton>
        <ChooserButton setGeneration={setGeneration} currentGeneration={this.props.currentGeneration}>Millennials</ChooserButton>
        <ChooserButton setGeneration={setGeneration} currentGeneration={this.props.currentGeneration}>Generation X</ChooserButton>
        <ChooserButton setGeneration={setGeneration} currentGeneration={this.props.currentGeneration}>Baby Boomers</ChooserButton>
        <ChooserButton setGeneration={setGeneration} currentGeneration={this.props.currentGeneration}>Builders</ChooserButton>
      </div>
    );
  }
}

module.exports = AgeChooser;
