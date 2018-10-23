const React = require("react");
const styles = require("./styles.scss");
const Portal = require("../Portal"); // To inject components into other page areas

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.currentGeneration === "allages" && <div />}

        {/* 
          *
          *
          Generation Z
          *
          *    
          */}
        {(this.props.currentGeneration === "genz" ||
          this.props.currentGeneration === "allages") && (
          <div>
            <Portal into={document.querySelector(".infantmortality")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("infantmortality")}
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
                    title={getTitle("sidsdeaths")}
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

            <Portal into={document.querySelector(".sidsdeaths")} />

            <Portal into={document.querySelector(".formalchildcare")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("formalchildcare")}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("costchildcare")}
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
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".costchildcare")} />

            <Portal into={document.querySelector(".kidsobese")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("kidsobese")}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("twoparentswork")}
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
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".twoparentswork")} />

            <Portal into={document.querySelector(".schooltoyrtwelve")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("schooltoyrtwelve")}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("incometeens")}
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
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".incometeens")} />

            <Portal into={document.querySelector(".unemployedteens")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("unemployedteens")}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("underemployed")}
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
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".underemployed")} />

            <Portal into={document.querySelector(".roadaccidents")}>
              <SlopeChart
                title={getTitle("roadaccidents")}
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

        {/* 
          *
          *
          Millennials
          *
          *    
          */}
        {(this.props.currentGeneration === "millennials" ||
          this.props.currentGeneration === "allages") && (
          <div>
            <Portal into={document.querySelector(".twentiesmarried")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("twentiesmarried")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 65,
                        last: 27,
                        labelPercent: "58%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "65%",
                        labelEnd: "27%"
                      },
                      {
                        first: 72,
                        last: 32,
                        labelPercent: "56%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "72%",
                        labelEnd: "52%"
                      },
                      {
                        first: 59,
                        last: 22,
                        labelPercent: "63%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "59%",
                        labelEnd: "22%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("medianmarriage")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 22,
                        last: 30,
                        labelPercent: "35%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "22",
                        labelEnd: "30"
                      },
                      {
                        first: 24,
                        last: 32,
                        labelPercent: "31%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "24",
                        labelEnd: "32"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".defacto")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("defacto")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 1,
                        last: 17,
                        labelPercent: "1208%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "1%",
                        labelEnd: "17%"
                      },
                      {
                        first: 3,
                        last: 19,
                        labelPercent: "660%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "3%",
                        labelEnd: "19%"
                      },
                      {
                        first: 2,
                        last: 17,
                        labelPercent: "800%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "2%",
                        labelEnd: "17%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("livingwithparents")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 24,
                        last: 30,
                        labelPercent: "24%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "24%",
                        labelEnd: "30%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".highestdegreethirties")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("highestdegreethirties")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 4,
                        last: 31,
                        labelPercent: "350%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "4%",
                        labelEnd: "31%"
                      },
                      {
                        first: 7,
                        last: 23,
                        labelPercent: "211%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "7%",
                        labelEnd: "23%"
                      },
                      {
                        first: 6,
                        last: 27,
                        labelPercent: "350%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "6%",
                        labelEnd: "27%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("firstchild")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 12,
                        last: 39,
                        labelPercent: "217%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "12%",
                        labelEnd: "39%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".youthallowance")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("youthallowance")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 99.34,
                        last: 433.20,
                        labelPercent: "336%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$99.34",
                        labelEnd: "$433.20"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("costofrent")}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 43.68,
                        last: 105.40,
                        labelPercent: "141%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$43.68",
                        labelEnd: "$105.40"
                      }
                    ]}
                  />
                  <SlopeChart
                    title={getTitle("doleperweek")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 219.61,
                        last: 263.80,
                        labelPercent: "20%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$219.61",
                        labelEnd: "$263.80"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".medianhouseprice")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("medianhouseprice")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 203358,
                        last: 703100,
                        labelPercent: "246%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$203,358",
                        labelEnd: "$703,100 "
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("mortgageaffordability")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 21,
                        last: 30,
                        labelPercent: "44%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "21%",
                        labelEnd: "$30%"
                      }
                    ]}
                  />
                 
                </div>
              </div>
            </Portal>
          </div>
        )}
        {this.props.currentGeneration === "genx" && <div />}
        {this.props.currentGeneration === "boomers" && <div />}
        {this.props.currentGeneration === "builders" && <div />}
      </div>
    );
  }
}

function getTitle(selector) {
  return document.querySelector("." + selector).previousSibling.innerText;
}

module.exports = ChartStory;
