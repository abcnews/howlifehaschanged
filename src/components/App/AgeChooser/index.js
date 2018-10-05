const React = require("react");
const styles = require("./styles.scss");

const ChooserButton = require("./ChooserButton");

class AgeChooser extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.question}>
          What age-group are you interested in?
        </div>
        <ChooserButton>Generation Z</ChooserButton>
        <ChooserButton>Millennials</ChooserButton>
        <ChooserButton>Generation X</ChooserButton>
        <ChooserButton>Baby Boomers</ChooserButton>
        <ChooserButton>Builders</ChooserButton>
      </div>
    );
  }
}

module.exports = AgeChooser;
