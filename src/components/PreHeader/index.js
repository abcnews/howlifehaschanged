const React = require("react");
const styles = require("./styles.scss").default;
const SVG = require("react-inlinesvg").default;
const ReactResizeDetector = require("react-resize-detector").default;

const HEADER_ICON_SPACING = 10;
const MOBILE_HEADER_ICON_SPACING = 4;

const MOBILE_OR_LESS = 600;

// For injecting into other areas of the page
const Portal = require("../Portal");
const AnimatedIcon = require("../AnimatedIcon");

// Animated assets
const ToolsAnimated = require("./svg/ToolsAnimated.svg").default;
const HouseAnimated = require("./svg/HouseAnimated.svg").default;
const HeartAnimated = require("./svg/HeartAnimated.svg").default;
const NappyAnimated = require("./svg/NappyAnimated.svg").default;
const NotepadAnimated = require("./svg/NotepadAnimated.svg").default;
const MortarboardAnimated = require("./svg/MortarboardAnimated.svg").default;
const RingAnimated = require("./svg/RingAnimated.svg").default;
const BoozeAnimated = require("./svg/BoozeAnimated.svg").default;
const MoneyAnimated = require("./svg/MoneyAnimated.svg").default;
const CigaretteAnimated = require("./svg/CigaretteAnimated.svg").default;
const PowerAnimated = require("./svg/PowerAnimated.svg").default;

// Animation triggers pre
const tools = require("./animations").tools;
const house = require("./animations").house;
const heart = require("./animations").heart;
const nappy = require("./animations").nappy;

// Animation triggers post
const notepad = require("./animations").notepad;
const mortarboard = require("./animations").mortarboard;
const ring = require("./animations").ring;
const booze = require("./animations").booze;

// Section header only animations
const money = require("./animations").money;
const cigarette = require("./animations").cigarette;
const power = require("./animations").power;

// Make sure KeyshapeJS is in global
if (KeyshapeJS.version.indexOf("1.") != 0)
  throw Error("Expected KeyshapeJS v1.*.*");
window.ks = document.ks = KeyshapeJS;

class PreHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactResizeDetector handleWidth>
          {(width, height) => {
            return (
              <div>
                {/* 
              This is rendered above the h1 text 
            */}
                <div className={styles.pre}>
                  <AnimatedIcon
                    svg={ToolsAnimated}
                    paddingLeft={0}
                    paddingRight={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING - 3
                        : HEADER_ICON_SPACING - 3
                    }
                    width={100}
                    height={92.69}
                    nudgeX={0}
                    nudgeY={-15}
                  >
                    <SVG
                      src={ToolsAnimated}
                      uniquifyIDs={true}
                      uniqueHash={"tools"}
                      onLoad={src => {
                        // Trigger the animation
                        tools(KeyshapeJS, "___tools");
                      }}
                    />
                  </AnimatedIcon>
                  <AnimatedIcon
                    paddingLeft={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING - 3
                        : HEADER_ICON_SPACING - 3
                    }
                    paddingRight={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING
                        : HEADER_ICON_SPACING
                    }
                    width={190}
                    height={85.45}
                    nudgeX={3}
                    nudgeY={-13}
                  >
                    <SVG
                      src={HouseAnimated}
                      uniquifyIDs={true}
                      uniqueHash={"house"}
                      onLoad={src => {
                        // Trigger the animation
                        house(KeyshapeJS, "___house");
                      }}
                    />
                  </AnimatedIcon>
                  <AnimatedIcon
                    paddingLeft={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING
                        : HEADER_ICON_SPACING
                    }
                    paddingRight={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING + 5
                        : HEADER_ICON_SPACING + 5
                    }
                    width={80}
                    height={86.89}
                    nudgeX={1}
                    nudgeY={-19}
                  >
                    <SVG
                      src={HeartAnimated}
                      uniquifyIDs={true}
                      uniqueHash={"heart"}
                      onLoad={src => {
                        // Trigger the animation
                        heart(KeyshapeJS, "___heart");
                      }}
                    />
                  </AnimatedIcon>
                  <AnimatedIcon
                    paddingLeft={
                      width < MOBILE_OR_LESS
                        ? MOBILE_HEADER_ICON_SPACING + 5
                        : HEADER_ICON_SPACING + 5
                    }
                    paddingRight={0}
                    width={110}
                    height={74.58}
                    nudgeX={1}
                    nudgeY={-11}
                  >
                    <SVG
                      src={NappyAnimated}
                      uniquifyIDs={true}
                      uniqueHash="nappy"
                      onLoad={src => {
                        // Trigger the animation
                        nappy(KeyshapeJS, "___nappy");
                      }}
                    />
                  </AnimatedIcon>
                </div>

                {/* 
              Rendered below the header text
            */}
                <Portal into={document.querySelector(".post-header")}>
                  <div className={styles.post}>
                    <AnimatedIcon
                      paddingLeft={0}
                      paddingRight={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING - 3
                          : HEADER_ICON_SPACING - 3
                      }
                      width={120}
                      height={104.61}
                      nudgeX={0}
                      nudgeY={0}
                    >
                      <SVG
                        src={NotepadAnimated}
                        uniquifyIDs={true}
                        uniqueHash={"notepad"}
                        onLoad={src => {
                          // Trigger the animation
                          notepad(KeyshapeJS, "___notepad");
                        }}
                      />
                    </AnimatedIcon>
                    <AnimatedIcon
                      paddingLeft={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING - 3
                          : HEADER_ICON_SPACING - 3
                      }
                      paddingRight={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING - 2
                          : HEADER_ICON_SPACING + 1
                      }
                      width={125}
                      height={93.67}
                      nudgeX={-5}
                      nudgeY={20}
                    >
                      <SVG
                        src={MortarboardAnimated}
                        uniquifyIDs={true}
                        uniqueHash={"mortarboard"}
                        onLoad={src => {
                          // Trigger the animation
                          mortarboard(KeyshapeJS, "___mortarboard");
                        }}
                      />
                    </AnimatedIcon>
                    <AnimatedIcon
                      svg={RingAnimated}
                      paddingLeft={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING - 2
                          : HEADER_ICON_SPACING + 1
                      }
                      paddingRight={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING + 3
                          : HEADER_ICON_SPACING + 3
                      }
                      width={95}
                      height={114.19}
                      nudgeX={0}
                      nudgeY={0}
                    >
                      <SVG
                        src={RingAnimated}
                        uniquifyIDs={true}
                        uniqueHash={"ring"}
                        onLoad={src => {
                          // Trigger the animation
                          ring(KeyshapeJS, "___ring");
                        }}
                      />
                    </AnimatedIcon>
                    <AnimatedIcon
                      paddingLeft={
                        width < MOBILE_OR_LESS
                          ? MOBILE_HEADER_ICON_SPACING + 3
                          : HEADER_ICON_SPACING + 3
                      }
                      paddingRight={0}
                      width={90}
                      height={111.8}
                      nudgeX={0}
                      nudgeY={2}
                    >
                      <SVG
                        src={BoozeAnimated}
                        uniquifyIDs={true}
                        uniqueHash={"booze"}
                        onLoad={src => {
                          // Trigger the animation
                          booze(KeyshapeJS, "___booze");
                        }}
                      />
                    </AnimatedIcon>
                  </div>
                </Portal>

                {/* 
                  Now we are portalling the section header animations
                */}

                <Portal into={document.querySelector(".children-icon")}>
                  <AnimatedIcon
                    paddingLeft={0}
                    paddingRight={0}
                    paddingTop={0}
                    paddingBottom={10}
                    width={90}
                    height={76.44}
                    nudgeX={3}
                    nudgeY={0}
                  >
                    <SVG
                      src={NappyAnimated}
                      uniquifyIDs={true}
                      uniqueHash="nappyicon"
                      onLoad={src => {
                        // Trigger the animation
                        nappy(KeyshapeJS, "___nappyicon");
                      }}
                    />
                  </AnimatedIcon>
                </Portal>

                <Portal into={document.querySelector(".teenagers-icon")}>
                  <AnimatedIcon
                    paddingLeft={0}
                    paddingRight={0}
                    paddingBottom={10}
                    width={90}
                    height={87.39}
                    nudgeX={0}
                    nudgeY={0}
                  >
                    <SVG
                      src={MoneyAnimated}
                      uniquifyIDs={true}
                      uniqueHash="moneyicon"
                      onLoad={src => {
                        // Trigger the animation
                        money(KeyshapeJS, "___moneyicon");
                      }}
                    />
                  </AnimatedIcon>
                </Portal>
              </div>
            );
          }}
        </ReactResizeDetector>

        <Portal into={document.querySelector(".twenties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={10}
            width={70}
            height={117.78}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={RingAnimated}
              uniquifyIDs={true}
              uniqueHash="ringicon"
              onLoad={src => {
                // Trigger the animation
                ring(KeyshapeJS, "___ringicon");
              }}
            />
          </AnimatedIcon>
        </Portal>

        <Portal into={document.querySelector(".thirties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={10}
            width={160}
            height={75.16}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={HouseAnimated}
              uniquifyIDs={true}
              uniqueHash="houseicon"
              onLoad={src => {
                // Trigger the animation
                house(KeyshapeJS, "___houseicon");
              }}
            />
          </AnimatedIcon>
        </Portal>

        <Portal into={document.querySelector(".forties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={5}
            width={90}
            height={87.17}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={MortarboardAnimated}
              uniquifyIDs={true}
              uniqueHash="mortarboardicon"
              onLoad={src => {
                // Trigger the animation
                mortarboard(KeyshapeJS, "___mortarboardicon");
              }}
            />
          </AnimatedIcon>
        </Portal>

        <Portal into={document.querySelector(".fifties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={15}
            width={80}
            height={89.39}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={CigaretteAnimated}
              uniquifyIDs={true}
              uniqueHash="cigaretteicon"
              onLoad={src => {
                // Trigger the animation
                cigarette(KeyshapeJS, "___cigaretteicon");
              }}
            />
          </AnimatedIcon>
        </Portal>

        <Portal into={document.querySelector(".sixties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={10}
            width={50}
            height={85.34}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={HeartAnimated}
              uniquifyIDs={true}
              uniqueHash="hearticon"
              onLoad={src => {
                // Trigger the animation
                heart(KeyshapeJS, "___hearticon");
              }}
            />
          </AnimatedIcon>
        </Portal>

        <Portal into={document.querySelector(".seventiesandover-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={10}
            width={50}
            height={90.58}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={PowerAnimated}
              uniquifyIDs={true}
              uniqueHash="powericon"
              onLoad={src => {
                // Trigger the animation
                power(KeyshapeJS, "___powericon");
              }}
            />
          </AnimatedIcon>
        </Portal>
      </div>
    );
  }
}

module.exports = PreHeader;
