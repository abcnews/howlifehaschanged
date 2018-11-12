const React = require("react");
const styles = require("./styles.scss");

// For injecting into other areas of the page
const Portal = require("../Portal");
const AnimatedIcon = require("../AnimatedIcon");

// Animated assets
const ToolsAnimated = require("./svg/ToolsAnimated.svg");
const HouseAnimated = require("./svg/HouseAnimated.svg");
const HeartAnimated = require("./svg/HeartAnimated.svg");
const NappyAnimated = require("./svg/NappyAnimated.svg");
const NotepadAnimated = require("./svg/NotepadAnimated.svg");
const MortarboardAnimated = require("./svg/MortarboardAnimated.svg");
const RingAnimated = require("./svg/RingAnimated.svg");
const BoozeAnimated = require("./svg/BoozeAnimated.svg");
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
          <AnimatedIcon
            svg={ToolsAnimated}
            paddingLeft={0}
            paddingRight={5}
            width={100}
            nudgeX={0}
            nudgeY={-15}
          />
          <AnimatedIcon
            svg={HouseAnimated}
            paddingLeft={5}
            paddingRight={5}
            width={190}
            nudgeX={3}
            nudgeY={-13}
          />
          <AnimatedIcon
            svg={HeartAnimated}
            paddingLeft={5}
            paddingRight={10}
            width={75}
            nudgeX={1}
            nudgeY={-19}
          />
          <AnimatedIcon
            svg={NappyAnimated}
            paddingLeft={10}
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
            <AnimatedIcon
              svg={NotepadAnimated}
              paddingLeft={0}
              paddingRight={5}
              width={120}
              nudgeX={0}
              nudgeY={0}
            />
            <AnimatedIcon
              svg={MortarboardAnimated}
              paddingLeft={5}
              paddingRight={8}
              width={125}
              nudgeX={-5}
              nudgeY={20}
            />
            <AnimatedIcon
              svg={RingAnimated}
              paddingLeft={8}
              paddingRight={8}
              width={95}
              nudgeX={0}
              nudgeY={0}
            />
            <AnimatedIcon
              svg={BoozeAnimated}
              paddingLeft={8}
              paddingRight={0}
              width={100}
              nudgeX={0}
              nudgeY={0}
            />
          </div>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
