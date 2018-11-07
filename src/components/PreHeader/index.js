const React = require("react");
const styles = require("./styles.scss");

const Portal = require("../Portal");

console.log(styles)

// Some assets
const Booze = require("./Booze.svg");
const Cigarette = require("./Cigarette.svg");

class PreHeader extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.pre}>
          <img className={styles.booze} src={Booze} width={64} />
        </div>

        <Portal into={document.querySelector(".post-header")}>
          <div className={styles.post}>
            <img className={styles.cigarette} src={Cigarette} width={64} />
          </div>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
