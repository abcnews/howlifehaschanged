const React = require("react");
const styles = require("./styles.scss");
const Portal = require("../Portal"); // To inject components into other page areas

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.currentGeneration === "allages" && <div />}
        {(this.props.currentGeneration === "genz" ||
          this.props.currentGeneration === "allages") && (
          <div>
            <Portal into={document.querySelector(".infantmortality")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 10.0,
                    last: 3.1,
                    labelPercent: "69%",
                    labelSign: "-",
                    labelSex: "All",
                    labelStart: "10.0",
                    labelEnd: "3.1"
                  }
                ]}
              />
            </Portal>
            <Portal into={document.querySelector(".sidsdeaths")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 1.9,
                    last: 0.1,
                    labelPercent: "95%",
                    labelSign: "-",
                    labelSex: "All",
                    labelStart: "1.9",
                    labelEnd: "0.1"
                  }
                ]}
              />
            </Portal>
            <Portal into={document.querySelector(".formalchildcare")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 9,
                    last: 28,
                    labelPercent: "211%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "9%",
                    labelEnd: "28%"
                  }
                ]}
              />
            </Portal>
            <Portal into={document.querySelector(".schooltoyrtwelve")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 38,
                    last: 88,
                    labelPercent: "132%",
                    labelSign: "+",
                    labelSex: "Female",
                    labelStart: "38%",
                    labelEnd: "88%"
                  },
                  {
                    first: 32,
                    last: 81,
                    labelPercent: "132%",
                    labelSign: "+",
                    labelSex: "Male",
                    labelStart: "32%",
                    labelEnd: "81%"
                  }
                ]}
              />
            </Portal>
          </div>
        )}
        {this.props.currentGeneration === "millennials" && <div />}
        {this.props.currentGeneration === "genx" && <div />}
        {this.props.currentGeneration === "boomers" && <div />}
        {this.props.currentGeneration === "builders" && <div />}
      </div>
    );
  }
}

module.exports = ChartStory;
