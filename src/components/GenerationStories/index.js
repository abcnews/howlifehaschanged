const React = require("react");
const styles = require("./styles.scss");
const Portal = require("../Portal"); // To inject components into other page areas

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.currentGeneration === "allages" && (
          <div>
            <h3>All ages</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 123, last: 342 }]}
            />
          </div>
        )}
        {(this.props.currentGeneration === "genz" ||
          this.props.currentGeneration === "allages") && (
          <div>
            {/* <h3>Generation Z</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 324, last: 665 }]}
            /> */}
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
          </div>
        )}
        {this.props.currentGeneration === "millennials" && (
          <div>
            <h3>Millennials</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 100, last: 300 }]}
            />
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 500, last: 300 }]}
            />
          </div>
        )}
        {this.props.currentGeneration === "genx" && (
          <div>
            <h3>Generation X</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 765, last: 254 }]}
            />
          </div>
        )}
        {this.props.currentGeneration === "boomers" && (
          <div>
            <h3>Baby Boomers</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 234, last: 543 }]}
            />
          </div>
        )}
        {this.props.currentGeneration === "builders" && (
          <div>
            <h3>Builders</h3>
            <SlopeChart
              years={["1981", "2016"]}
              lines={[{ first: 234, last: 343 }]}
            />
          </div>
        )}
      </div>
    );
  }
}

module.exports = ChartStory;
