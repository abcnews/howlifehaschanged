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
          <AnimatedIcon
            svg={MoneyAnimated}
            paddingLeft={0}
            paddingRight={5}
            width={130}
            nudgeX={0}
            nudgeY={0}
          />
          <AnimatedIcon
            svg={CigaretteAnimated}
            paddingLeft={5}
            paddingRight={5}
            width={130}
            nudgeX={3}
            nudgeY={-13}
          />
          <AnimatedIcon
            svg={RingAnimated}
            paddingLeft={5}
            paddingRight={0}
            width={110}
            nudgeX={1}
            nudgeY={-11}
          />
        </div>

        {/* 
          Rendered below the header text
        */}
        <Portal into={document.querySelector(".post-header")}>
          <div className={styles.post}>
            -
          </div>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
