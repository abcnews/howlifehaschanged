const React = require("react");
const styles = require("./styles.scss");
const ReactResizeDetector = require("react-resize-detector").default;
const d3 = Object.assign({}, require("d3-selection"));

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
    // Waits a sec to bind as a hacky way of not screwing up waypoints
    setTimeout(() => {
      
      // Waypoint to snap panel to top
      this.waypointPanel = new Waypoint({
        element: this.node.current.querySelector("." + styles.panel), //document.querySelector(".Header"),
        handler: (direction) => {
          const panel = d3.select(this.node.current.querySelector("." + styles.panel));
          const question = d3.select(this.node.current.querySelector("." + styles.question));
          console.log(panel, direction, "Start of story...");
          if (direction === "down") {
            panel.classed(styles.fixed, true);
            question.classed(styles.noDisplay, true);
          } else {
            panel.classed(styles.fixed, false);
            question.classed(styles.noDisplay, false);
          }
        }
      });

      // Waypoint to hide when we reach the bottom
      this.waypointPanelEnd = new Waypoint({
        element: document.querySelector(".endofstorywaypoint"),
        handler: (direction) => {
          const panel = d3.select(this.node.current.querySelector("." + styles.panel));
          console.log(direction, "End of story...");
          if (direction === "down") {
            panel.classed(styles.faded, true);
          } else {
            panel.classed(styles.faded, false);
          }
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Removes waypoint event listeners on hot reload
    this.waypointPanel.destroy();
    this.waypointPanelEnd.destroy();
  }

  render() {
    // Function passed down from main App
    const { setGeneration, clearGeneration } = this.props;

    return (
      <div ref={this.node} className={styles.wrapper}>
        <div className={styles.panel}>
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
        <div className={styles.space} />
      </div>
    );
  }
}

module.exports = AgeChooser;
