const React = require("react");
const styles = require("./styles.scss");
const ReactResizeDetector = require("react-resize-detector").default;

// A library that makes scroll triggering easier
require("waypoints/lib/noframework.waypoints.min.js");

const ChooserButtonGroup = require("../ChooserButtonGroup");
const ChooserDropdown = require("../ChooserDropdown");

const TABLET_PORTRAIT_OR_UP = 600;



class AgeChooser extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isScrolledPast: true };

    this.node = React.createRef();
  }

  componentDidMount() {
    this.waypoint = new Waypoint({
      element: this.node.current, //document.querySelector(".Header"),
      handler: function(direction) {
        console.log(direction, this.element, "Hello!!!!");
      }
    });
  }

  componentWillUnmount() {
    // Removes event listeners from page
    this.waypoint.destroy();
  }

  render() {
    // Function passed down from main App
    const { setGeneration, clearGeneration } = this.props;

    return (
      <div ref={this.node} className={styles.wrapper}>
        {/* 
          This is just a label for the user
          Maybe think about resizing this on mobile
        */}
        <div className={styles.question}>
          Which age-group would you like to know about?
        </div>

        <ReactResizeDetector handleWidth>
          {(width, height) => {
            return (
              <div>
                {/*
                Dropdown box generation selector for
                mobile devices that can't display all
                the buttons.
              */}
                {width <= TABLET_PORTRAIT_OR_UP && (
                  <ChooserDropdown
                    currentGeneration={this.props.currentGeneration}
                    setGeneration={setGeneration}
                    clearGeneration={clearGeneration}
                  />
                )}

                {/* 
                If the device isn't mobile
                then show the buttons.
              */}
                {width > TABLET_PORTRAIT_OR_UP && (
                  <ChooserButtonGroup
                    currentGeneration={this.props.currentGeneration}
                    setGeneration={setGeneration}
                    clearGeneration={clearGeneration}
                  />
                )}
              </div>
            );
          }}
        </ReactResizeDetector>
      </div>
    );
  }
}

module.exports = AgeChooser;
