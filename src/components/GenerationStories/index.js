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
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={document.querySelector(".infantmortality").previousSibling.innerText}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={document.querySelector(".sidsdeaths").previousSibling.innerText}
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
                </div>
              </div>
            </Portal>

            {/* <Portal into={document.querySelector(".sidsdeaths")} /> */}

            <Portal into={document.querySelector(".formalchildcare")}>
              <SlopeChart
                years={["1981", "2017"]}
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

            <Portal into={document.querySelector(".costchildcare")}>
              <SlopeChart
                years={["1984", "2016"]}
                lines={[
                  {
                    first: 2.31,
                    last: 17.56,
                    labelPercent: "660%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "$2.31",
                    labelEnd: "$17.56"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".kidsobese")}>
              <SlopeChart
                years={["1985", "2015"]}
                lines={[
                  {
                    first: 11,
                    last: 27,
                    labelPercent: "145%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "11%",
                    labelEnd: "27%"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".twoparentswork")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 39,
                    last: 63,
                    labelPercent: "62%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "39%",
                    labelEnd: "63%"
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
                    labelPercent: "153%",
                    labelSign: "+",
                    labelSex: "Male",
                    labelStart: "32%",
                    labelEnd: "81%"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".incometeens")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 26188,
                    last: 10197,
                    labelPercent: "61%",
                    labelSign: "-",
                    labelSex: "All",
                    labelStart: "$26,188",
                    labelEnd: "$10,197"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".unemployedteens")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 19,
                    last: 29,
                    labelPercent: "52%",
                    labelSign: "+",
                    labelSex: "Female",
                    labelStart: "19%",
                    labelEnd: "29%"
                  },
                  {
                    first: 13,
                    last: 26,
                    labelPercent: "105%",
                    labelSign: "+",
                    labelSex: "Male",
                    labelStart: "13%",
                    labelEnd: "26%"
                  },
                  {
                    first: 16,
                    last: 28,
                    labelPercent: "75%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "16%",
                    labelEnd: "28%"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".underemployed")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 5,
                    last: 18,
                    labelPercent: "259%",
                    labelSign: "+",
                    labelSex: "Female",
                    labelStart: "5%",
                    labelEnd: "18%"
                  },
                  {
                    first: 3,
                    last: 16,
                    labelPercent: "423%",
                    labelSign: "+",
                    labelSex: "Male",
                    labelStart: "3%",
                    labelEnd: "16%"
                  },
                  {
                    first: 4,
                    last: 17,
                    labelPercent: "326%",
                    labelSign: "+",
                    labelSex: "All",
                    labelStart: "4%",
                    labelEnd: "17%"
                  }
                ]}
              />
            </Portal>

            <Portal into={document.querySelector(".roadaccidents")}>
              <SlopeChart
                years={["1981", "2016"]}
                lines={[
                  {
                    first: 53,
                    last: 9,
                    labelPercent: "83%",
                    labelSign: "-",
                    labelSex: "All",
                    labelStart: "53",
                    labelEnd: "9"
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
