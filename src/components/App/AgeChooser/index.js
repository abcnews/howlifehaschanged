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
        <ChooserButton setGeneration={setGeneration}>Generation Z</ChooserButton>
        <ChooserButton setGeneration={setGeneration}>Millennials</ChooserButton>
        <ChooserButton setGeneration={setGeneration}>Generation X</ChooserButton>
        <ChooserButton setGeneration={setGeneration}>Baby Boomers</ChooserButton>
        <ChooserButton setGeneration={setGeneration}>Builders</ChooserButton>
      </div>
    );
  }
}

module.exports = AgeChooser;
