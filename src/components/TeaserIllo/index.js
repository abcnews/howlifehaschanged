const React = require("react");
const styles = require("./styles.scss");

const change = require("./john.gif");

class TeaserIllo extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img className={styles.change} src={change} width={375} />
      </div>
    );
  }
}

module.exports = TeaserIllo;
