const React = require("react");
const styles = require("./styles.scss").default;
const d3 = Object.assign({}, require("d3-selection"));

// A library that makes scroll triggering easier
require("waypoints/lib/noframework.waypoints.min.js");

const ChooserButtonGroup = require("../ChooserButtonGroup");
const ChooserDropdown = require("../ChooserDropdown");

const TABLET_PORTRAIT_OR_UP = 660;
const GENERATION_WAYPOINT_OFFSET = "25%";

class AgeChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolledPast: true, yPos: 0 };
    this.node = React.createRef();
  }

  componentDidMount() {
    // Waits a sec to bind as a hacky way of not screwing up waypoints
    setTimeout(() => {
      // Waypoint to snap panel to top
      this.waypointPanel = new Waypoint({
        element: this.node.current.querySelector("." + styles.question),
        offset: -50,
        handler: (direction) => {
          const chooser = d3.select(
            this.node.current.querySelector("." + styles.chooser)
          );

          if (direction === "down") {
            chooser.classed(styles.fixed, true);
          } else {
            chooser.classed(styles.fixed, false);
          }
        },
      });

      // Waypoint to hide when we reach the bottom
      this.waypointPanelEnd = new Waypoint({
        element: document.querySelector(".endofstorywaypoint"),
        handler: (direction) => {
          const chooser = d3.select(
            this.node.current.querySelector("." + styles.chooser)
          );

          if (direction === "down") {
            chooser.classed(styles.faded, true);
          } else {
            chooser.classed(styles.faded, false);
          }
        },
      });

      // Section waypoints
      const generations = [
        "",
        "children",
        "teenagers",
        "twenties",
        "thirties",
        "forties",
        "fifties",
        "sixties",
        "seventiesandover",
      ];

      this.waypointGenerations = [];

      // Loop through the generations and mark waypoints on page for each
      generations.forEach((generation, iteration) => {
        if (generation === "") return;
        this.waypointGenerations[iteration] = new Waypoint({
          element: document.querySelector("." + generation),
          offset: GENERATION_WAYPOINT_OFFSET,
          handler: (direction) => {
            if (direction === "down") {
              this.props.setGeneration(generation);
            } else {
              this.props.setGeneration(generations[iteration - 1]);
            }
          },
        });
      });
    }, 2000); // Jank defer
  }

  componentWillUnmount() {
    // Removes waypoint event listeners on hot reload
    this.waypointPanel.destroy();
    this.waypointPanelEnd.destroy();
    this.waypointGenerations.forEach((waypoint) => {
      waypoint.destroy();
    });
    // window.removeEventListener("scroll", this.doOnScroll);
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
            Jump to an age group, or just keep scrolling…
          </div>

          <div id={"docking-chooser"} className={styles.chooser}>
            {/*
                Dropdown box generation selector for
                mobile devices that can't display all
                the buttons.
              */}
            {window.innerWidth <= TABLET_PORTRAIT_OR_UP && (
              // React-resize in Odyssey returns 625.328125 in Chrome
              // and Safari and 625.333 in Firefox when snapping wide. This is
              // a temporary hacky fix.
              // TODO: Make this go by screen size or something maybe........

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
            {window.innerWidth > TABLET_PORTRAIT_OR_UP && (
              <ChooserButtonGroup
                currentGeneration={this.props.currentGeneration}
                setGeneration={setGeneration}
                clearGeneration={clearGeneration}
              />
            )}
          </div>
        </div>
        <div className={styles.space} />
      </div>
    );
  }
}

module.exports = AgeChooser;
