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
                        last: 433.2,
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
                        last: 105.4,
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
                        last: 263.8,
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
                        labelEnd: "$703,100"
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

        {/* 
          *
          *
          Generation X
          *
          *    
          */}

        {(this.props.currentGeneration === "genx" ||
          this.props.currentGeneration === "allages") && (
          <div>
            <Portal into={document.querySelector(".bachelorsforties")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("bachelorsforties")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 4,
                        last: 19,
                        labelPercent: "375%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "4%",
                        labelEnd: "19%"
                      },
                      {
                        first: 2,
                        last: 25,
                        labelPercent: "1150%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "2%",
                        labelEnd: "25%"
                      },
                      {
                        first: 3,
                        last: 23,
                        labelPercent: "667%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "3%",
                        labelEnd: "23%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("fourchildren")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 33,
                        last: 11,
                        labelPercent: "67%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "33%",
                        labelEnd: "11%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".marriednotworking")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("marriednotworking")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 5.8,
                        last: 7.3,
                        labelPercent: "26%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "5.8%",
                        labelEnd: "7.3%"
                      },
                      {
                        first: 48,
                        last: 19,
                        labelPercent: "60%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "48%",
                        labelEnd: "19%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("mortgageinterest")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 43.86,
                        last: 80.19,
                        labelPercent: "83%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "$43.86",
                        labelEnd: "$80.19"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".householdspending")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("householdspending")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 1077,
                        last: 1425,
                        labelPercent: "32%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$1,077",
                        labelEnd: "$1,425"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("householdincome")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 1346,
                        last: 2086,
                        labelPercent: "55%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$1,346",
                        labelEnd: "$2,086"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".genxsmokers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("genxsmokers")}
                    years={["1980", "2015"]}
                    lines={[
                      {
                        first: 27,
                        last: 17,
                        labelPercent: "33%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "27%",
                        labelEnd: "17%"
                      },
                      {
                        first: 40,
                        last: 21,
                        labelPercent: "48%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "40%",
                        labelEnd: "21%"
                      }
                    ]}
                  />
                  <SlopeChart
                    title={getTitle("adultdrinking")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 12.8,
                        last: 9.7,
                        labelPercent: "24%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "12.8",
                        labelEnd: "9.7"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("adultobese")}
                    years={["1989", "2015"]}
                    lines={[
                      {
                        first: 48,
                        last: 73,
                        labelPercent: "51%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "48%",
                        labelEnd: "73%"
                      },
                      {
                        first: 42,
                        last: 65,
                        labelPercent: "54%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "42%",
                        labelEnd: "65%"
                      },
                      {
                        first: 54,
                        last: 81,
                        labelPercent: "50%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "54%",
                        labelEnd: "81%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".heartattackgenx")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("heartattackgenx")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 47,
                        last: 8,
                        labelPercent: "84%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "47",
                        labelEnd: "8"
                      },
                      {
                        first: 202,
                        last: 35,
                        labelPercent: "83%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "202",
                        labelEnd: "35"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("strokegenx")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 28,
                        last: 7,
                        labelPercent: "75%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "28",
                        labelEnd: "7"
                      },
                      {
                        first: 33,
                        last: 9,
                        labelPercent: "74%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "33",
                        labelEnd: "9"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>
          </div>
        )}
        {(this.props.currentGeneration === "boomers" ||
          this.props.currentGeneration === "allages") && <div>
            <Portal into={document.querySelector(".divorceboomers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("divorceboomers")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 4.1,
                        last: 7.1,
                        labelPercent: "73%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "4.1%",
                        labelEnd: "7.1%"
                      },
                      {
                        first: 5.4,
                        last: 10.1,
                        labelPercent: "87%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "5.4%",
                        labelEnd: "10.1"
                      }
                    ]}
                  />
                </div>
                
              </div>
            </Portal>

             <Portal into={document.querySelector(".overonehundred")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("overonehundred")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 48,
                        last: 15,
                        labelPercent: "69%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "48%",
                        labelEnd: "15"
                      },
                      {
                        first: 58,
                        last: 15,
                        labelPercent: "75%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "58%",
                        labelEnd: "15%"
                      },{
                        first: 46,
                        last: 15,
                        labelPercent: "67%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "46%",
                        labelEnd: "15%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("highestdegreeboomers")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 1.4,
                        last: 14,
                        labelPercent: "900%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "1.4%",
                        labelEnd: "14%"
                      },
                      {
                        first: 0.7,
                        last: 14,
                        labelPercent: "1900%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "0.7%",
                        labelEnd: "14%"
                      },{
                        first: 2.2,
                        last: 13,
                        labelPercent: "491%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "2.2%",
                        labelEnd: "13%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>
            
            </div>}
        {this.props.currentGeneration === "builders" && <div />}
      </div>
    );
  }
}

function getTitle(selector) {
  return document.querySelector("." + selector).previousSibling.innerText;
}

module.exports = ChartStory;
