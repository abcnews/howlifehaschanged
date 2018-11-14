const React = require("react");
const styles = require("./styles.scss");
const SVG = require("react-inlinesvg").default;
// const d3 = Object.assign({}, require("d3-selection"));

const HEADER_ICON_SPACING = 10;

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
const FuelAnimated = require("./svg/FuelAnimated.svg");

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
const fuel = require("./animations").fuel;

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
        {/* 
          This is rendered above the h1 text 
        */}
        <div className={styles.pre}>
          <AnimatedIcon
            svg={ToolsAnimated}
            paddingLeft={0}
            paddingRight={HEADER_ICON_SPACING - 3}
            width={100}
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
            paddingLeft={HEADER_ICON_SPACING - 3}
            paddingRight={HEADER_ICON_SPACING}
            width={190}
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
            paddingLeft={HEADER_ICON_SPACING}
            paddingRight={HEADER_ICON_SPACING + 5}
            width={80}
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
            paddingLeft={HEADER_ICON_SPACING + 5}
            paddingRight={0}
            width={110}
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
              paddingRight={HEADER_ICON_SPACING - 3}
              width={120}
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
              paddingLeft={HEADER_ICON_SPACING - 3}
              paddingRight={HEADER_ICON_SPACING + 1}
              width={125}
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
              paddingLeft={HEADER_ICON_SPACING + 1}
              paddingRight={HEADER_ICON_SPACING + 3}
              width={95}
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
              paddingLeft={HEADER_ICON_SPACING + 3}
              paddingRight={0}
              width={100}
              nudgeX={0}
              nudgeY={0}
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

        <Portal into={document.querySelector(".twenties-icon")}>
          <AnimatedIcon
            paddingLeft={0}
            paddingRight={0}
            paddingBottom={10}
            width={70}
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
            width={100}
            nudgeX={0}
            nudgeY={0}
          >
            <SVG
              src={FuelAnimated}
              uniquifyIDs={true}
              uniqueHash="fuelicon"
              onLoad={src => {
                // Trigger the animation
                fuel(KeyshapeJS, "___fuelicon");
              }}
            />
          </AnimatedIcon>
        </Portal>
      </div>
    );
  }
}

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}

module.exports = PreHeader;
