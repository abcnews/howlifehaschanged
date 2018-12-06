const React = require("react");
const styles = require("./styles.scss");
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
        handler: direction => {
          const chooser = d3.select(
            this.node.current.querySelector("." + styles.chooser)
          );

          if (direction === "down") {
            chooser.classed(styles.fixed, true);
          } else {
            chooser.classed(styles.fixed, false);
          }
        }
      });

      // Waypoint to hide when we reach the bottom
      this.waypointPanelEnd = new Waypoint({
        element: document.querySelector(".endofstorywaypoint"),
        handler: direction => {
          const chooser = d3.select(
            this.node.current.querySelector("." + styles.chooser)
          );

          if (direction === "down") {
            chooser.classed(styles.faded, true);
          } else {
            chooser.classed(styles.faded, false);
          }
        }
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
        "seventiesandover"
      ];

      this.waypointGenerations = [];

      // Loop through the generations and mark waypoints on page for each
      generations.forEach((generation, iteration) => {
        if (generation === "") return;
        this.waypointGenerations[iteration] = new Waypoint({
          element: document.querySelector("." + generation),
          offset: GENERATION_WAYPOINT_OFFSET,
          handler: direction => {
            if (direction === "down") {
              this.props.setGeneration(generation);
            } else {
              this.props.setGeneration(generations[iteration - 1]);
            }
          }
        });
      });
    }, 2000); // Jank defer
  }

  componentWillUnmount() {
    // Removes waypoint event listeners on hot reload
    this.waypointPanel.destroy();
    this.waypointPanelEnd.destroy();
    this.waypointGenerations.forEach(waypoint => {
      waypoint.destroy();
    });
    // window.removeEventListener("scroll", this.doOnScroll);
  }

  doOnScroll = () => {
    // this.setState(yPos, window.scrollY)
    // document.querySelector("#docking-chooser input").blur();
    // First check that the ABC Nav bar is still there
    // There have been talks of taking it out
    // if (document.querySelector(".Nav-bar")) {
    //   const topNavHiding = document.querySelector(".Nav-bar.is-hiding");
    //   const chooser = d3.select(
    //     this.node.current.querySelector("." + styles.chooser)
    //   );
    //   if (!chooser.classed(styles.fixed)) chooser.classed("padding", false);
    //   else if (topNavHiding) {
    //     chooser.classed("padding", false);
    //   } else {
    //     chooser.classed("padding", true);
    //   } // TODO: maybe make this more efficient by breaking out if not needed
    // }
  };

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
            {this.props.resizeWidth <= TABLET_PORTRAIT_OR_UP &&
              // React-resize in Odyssey returns 625.328125 in Chrome
              // and Safari and 625.333 in Firefox when wide. This is
              // a temporary fix.
              (this.props.resizeWidth < 625.31 ||
                this.props.resizeWidth > 625.55) && (
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
            {(this.props.resizeWidth > TABLET_PORTRAIT_OR_UP ||
              (this.props.resizeWidth > 625.31 &&
                this.props.resizeWidth < 625.55)) && (
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
