const React = require("react");
const styles = require("./styles.scss");
const ReactResizeDetector = require("react-resize-detector").default;
const d3 = Object.assign({}, require("d3-selection"));
const inViewport = require("in-viewport");

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
        element: this.node.current.querySelector("." + styles.chooser),
        offset: 0,
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

      generations.forEach((generation, iteration) => {
        if (generation === "") return;
        this.waypointGenerations[iteration] = new Waypoint({
          element: document.querySelector("." + generation),
          offset: "bottom-in-view",
          handler: direction => {
            if (direction === "down") {
              this.props.setGeneration(generation);
            } else {
              this.props.setGeneration(generations[iteration - 1]);
            }
          }
        });
      });

      window.addEventListener("scroll", this.doOnScroll);
    }, 1000);
  }

  componentWillUnmount() {
    // Removes waypoint event listeners on hot reload
    this.waypointPanel.destroy();
    this.waypointPanelEnd.destroy();
    window.removeEventListener("scroll", this.doOnScroll);
  }

  doOnScroll = () => {
    // First check that the ABC Nav bar is still there
    // There have been talks of taking it out
    if (document.querySelector(".Nav-bar")) {
      const topNavHiding = document.querySelector(".Nav-bar.is-hiding");

      const chooser = d3.select(
        this.node.current.querySelector("." + styles.chooser)
      );
      if (!chooser.classed(styles.fixed))
        chooser.classed(styles.padding, false);
      else if (topNavHiding) {
        chooser.classed(styles.padding, false);
      } else {
        chooser.classed(styles.padding, true);
      } // TODO: maybe make this more efficient by breaking out if not needed
    }

    // if (inViewport(document.querySelector(".children"))) {
    //   this.props.setGeneration("children", false);
    // }

    // if (inViewport(document.querySelector(".teenagers"))) {
    //   this.props.setGeneration("teenagers", false);
    // }

    // if (inViewport(document.querySelector(".twenties"))) {
    //   this.props.setGeneration("twenties", false);
    // }

    // if (inViewport(document.querySelector(".thirties"))) {
    //   this.props.setGeneration("thirties", false);
    // }

    // if (inViewport(document.querySelector(".forties"))) {
    //   this.props.setGeneration("forties", false);
    // }

    // if (inViewport(document.querySelector(".fifties"))) {
    //   this.props.setGeneration("fifties", false);
    // }

    // if (inViewport(document.querySelector(".sixties"))) {
    //   this.props.setGeneration("sixties", false);
    // }

    // if (inViewport(document.querySelector(".seventiesandover"))) {
    //   this.props.setGeneration("seventiesandover", false);
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
            Which age-group would you like to know about?
          </div>

          <ReactResizeDetector handleWidth>
            {(width, height) => {
              return (
                <div className={styles.chooser}>
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
