const React = require("react");
const styles = require("./styles.scss");
const Keyshape = require("react-keyshape").Keyshape;

const Portal = require("../Portal");

// Some assets
const Booze = require("./svg/Booze.svg");
const Cigarette = require("./svg/Cigarette.svg");

// Animated assets
const MoneyAnimated = require("./svg/MoneyAnimated.svg");
const CigaretteAnimated = require("./svg/CigaretteAnimated.svg");


class PreHeader extends React.Component {
  render() {
    return (
      <div>
        {/* 
          This is rendered above the h1 text 
        */}
        <div className={styles.pre}>
          {/* <img className={styles.booze} src={Booze} width={64} /> */}
          <Keyshape svg={MoneyAnimated}/>
        </div>

        <Portal into={document.querySelector(".post-header")}>
          <div className={styles.post}>
            {/* <img className={styles.cigarette} src={Cigarette} width={64} /> */}
            <Keyshape svg={CigaretteAnimated}/>
          </div>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
