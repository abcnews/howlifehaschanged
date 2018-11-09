const React = require("react");
const styles = require("./styles.scss");

// For injecting into other areas of the page
const Portal = require("../Portal");
const AnimatedIcon = require("../AnimatedIcon");

// Some assets
const Booze = require("./svg/Booze.svg");
const Cigarette = require("./svg/Cigarette.svg");

// Animated assets
const MoneyAnimated = require("./svg/MoneyAnimated.svg");
const CigaretteAnimated = require("./svg/CigaretteAnimated.svg");
const RingAnimated = require("./svg/RingAnimated.svg");

class PreHeader extends React.Component {
  render() {
    return (
      <div>
        {/* 
          This is rendered above the h1 text 
        */}
        <div className={styles.pre}>
          <AnimatedIcon svg={MoneyAnimated} />
        </div>

        {/* 
          Rendered below the header text
        */}
        <Portal into={document.querySelector(".post-header")}>
          <div className={styles.post}>
            <AnimatedIcon svg={CigaretteAnimated} />
            <AnimatedIcon svg={RingAnimated} />
          </div>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
