const React = require("react");
const styles = require("./styles.scss");
const Portal = require("../Portal"); // To inject components into other page areas

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {/* 
          *
          *
          Generation Z
          *
          *    
          */}
          <div>
            <Portal into={document.querySelector(".infantmortality")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("infantmortality")}
                    note={"Deaths per 1,000 live births"}
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
                    note={"SIDS deaths per 1,000 live births"}
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
                    note={"Figures normalised in 2016 dollars"}
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

            <Portal into={document.querySelector(".twoparentswork")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("twoparentswork")}
                    note={"Households with kids under 15"}
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

            <Portal into={document.querySelector(".kidsobese")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("kidsobese")}
                    note={"Compares ages 7-15 in 1985 to ages 5-17 in 2016"}
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
              </div>
            </Portal>

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
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 29786,
                        last: 33800,
                        labelPercent: "13%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "$29,786",
                        labelEnd: "$33,800"
                      },
                      {
                        first: 28084,
                        last: 33800,
                        labelPercent: "20%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "$28,084",
                        labelEnd: "$33,800"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".unemployedteens")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("unemployedteens")}
                    note={"Ages 15-19"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 19,
                        last: 29,
                        labelPercent: "53%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "19%",
                        labelEnd: "29%"
                      },
                      {
                        first: 13,
                        last: 26,
                        labelPercent: "100%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "13%",
                        labelEnd: "26%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("underemployed")}
                    note={"Ages 15-24"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 5,
                        last: 18,
                        labelPercent: "260%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "5%",
                        labelEnd: "18%"
                      },
                      {
                        first: 3,
                        last: 16,
                        labelPercent: "433%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "3%",
                        labelEnd: "16%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".roadaccidents")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("roadaccidents")}
                    note={"Deaths per 100,000, among ages 15 to 25"}
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
                </div>
              </div>
            </Portal>
          </div>
        

        {/* 
          *
          *
          Millennials
          *
          *    
          */}
          <div>
            <Portal into={document.querySelector(".twentiesmarried")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("twentiesmarried")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 72,
                        last: 32,
                        labelPercent: "56%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "72%",
                        labelEnd: "32%"
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
                        labelPercent: "36%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "22",
                        labelEnd: "30"
                      },
                      {
                        first: 24,
                        last: 32,
                        labelPercent: "29%",
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

            <Portal into={document.querySelector(".livingwithparents")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("livingwithparents")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 24,
                        last: 30,
                        labelPercent: "25%",
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

            <Portal into={document.querySelector(".defacto")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("defacto")}
                    note={"Ages 30-34"}
                    years={["1982", "2016"]}
                    lines={[
                      {
                        first: 1,
                        last: 17,
                        labelPercent: "1600%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "1%",
                        labelEnd: "17%"
                      },
                      {
                        first: 3,
                        last: 19,
                        labelPercent: "533%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "3%",
                        labelEnd: "19%"
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
                    note={"People aged 30-34 with at least a bachelor's degree"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 4,
                        last: 31,
                        labelPercent: "675%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "4%",
                        labelEnd: "31%"
                      },
                      {
                        first: 7,
                        last: 23,
                        labelPercent: "229%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "7%",
                        labelEnd: "23%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("firstchild")}
                    note={"Median age"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 25.6,
                        last: 29,
                        labelPercent: "13%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "25.6",
                        labelEnd: "29"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".costofrent")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("costofrent")}
                    note={"Figures normalised in 2016 dollars"}
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("youthallowance")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 375,
                        last: 433.2,
                        labelPercent: "16%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$375",
                        labelEnd: "$433.20"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".doleperweek")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("doleperweek")}
                    note={"Figures normalised in 2016 dollars"}
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
                    note={"Figures normalised in 2016 dollars"}
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
                    // labelRightNudge={-5}
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
                        labelPercent: "43%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "21%",
                        labelEnd: "30%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".homeownership")}>
            <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("homeownership")}
                    note={"People aged 25-34"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 61,
                        last: 45,
                        labelPercent: "26%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "61%",
                        labelEnd: "45%"
                      }
                    ]}
                    // labelRightNudge={-5}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("recreationspending")}
                    note={"Weekly spending 25-34-year-olds"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 11,
                        last: 9,
                        labelPercent: "18%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "11%",
                        labelEnd: "9%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>
          </div>

        {/* 
          *
          *
          Generation X
          *
          *    
          */}
          <div>
            <Portal into={document.querySelector(".bachelorsforties")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("bachelorsforties")}
                    note={"People aged 40-44 with at least a bachelor's degree"}
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
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("fourchildren")}
                    note={"Among women aged 45-49"}
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
                    note={"Women aged 45-49"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 5.8,
                        last: 7.3,
                        labelPercent: "26%",
                        labelSign: "+",
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
              </div>
            </Portal>

            <Portal into={document.querySelector(".householdspending")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("householdspending")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 1073,
                        last: 1537,
                        labelPercent: "43%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$1,073",
                        labelEnd: "$1,537"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("householdincome")}
                    note={"Figures normalised in 2016 dollars"}
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

            <Portal into={document.querySelector(".mortgageinterest")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("mortgageinterest")}
                    note={"People aged 45-54"}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 9,
                        last: 18,
                        labelPercent: "100%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "9%",
                        labelEnd: "18%"
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
                        first: 26,
                        last: 17,
                        labelPercent: "35%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "26%",
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
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("adultdrinking")}
                    note={"Litres consumed per person per year"}
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
              </div>
            </Portal>

            <Portal into={document.querySelector(".heartattackgenx")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("heartattackgenx")}
                    note={"Heart attack deaths per 100,000, for ages 45-54"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 47,
                        last: 8,
                        labelPercent: "83%",
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
                    note={"Stroke deaths per 100,000, for ages 45-54"}
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
                        labelPercent: "73%",
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

            <Portal into={document.querySelector(".adultobese")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("adultobese")}
                    note={"Ages 45-64"}
                    years={["1989", "2016"]}
                    lines={[
                      {
                        first: 42,
                        last: 65,
                        labelPercent: "55%",
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
          </div>

        {/* 
          *
          *
          Baby Boomers
          *
          *    
          */}
          <div>
            <Portal into={document.querySelector(".divorceboomers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("divorceboomers")}
                    note={"Divorces per 1,000, among ages 55-59"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 4.1,
                        last: 7.1,
                        labelPercent: "73%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "4.1",
                        labelEnd: "7.1"
                      },
                      {
                        first: 5.4,
                        last: 10.1,
                        labelPercent: "87%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "5.4",
                        labelEnd: "10.1"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".highestdegreeboomers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("highestdegreeboomers")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 0.7,
                        last: 14,
                        labelPercent: "1900%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "0.7%",
                        labelEnd: "14%"
                      },
                      {
                        first: 2.2,
                        last: 13.4,
                        labelPercent: "509%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "2.2%",
                        labelEnd: "13.4%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("overonehundred")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 32,
                        last: 14.99,
                        labelPercent: "53%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "32%",
                        labelEnd: "15%"
                        // firstNudge: 2
                      },
                      {
                        first: 58,
                        last: 15,
                        labelPercent: "74%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "58%",
                        labelEnd: "15%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".manufacturing")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("manufacturing")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 14,
                        last: 4.2,
                        labelPercent: "70%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "14%",
                        labelEnd: "4.2%"
                      },
                      {
                        first: 24,
                        last: 10.5,
                        labelPercent: "56%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "24%",
                        labelEnd: "10.5%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("tradeunion")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 48,
                        last: 15,
                        labelPercent: "69%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "48%",
                        labelEnd: "15%"
                      },
                      {
                        first: 60,
                        last: 12,
                        labelPercent: "80%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "60%",
                        labelEnd: "12%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".boomersretired")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("boomersretired")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 95,
                        last: 78,
                        labelPercent: "18%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "95%",
                        labelEnd: "78%"
                      },
                      {
                        first: 81,
                        last: 68,
                        labelPercent: "16%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "81%",
                        labelEnd: "68%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("retirementaverage")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 63.6,
                        last: 65.2,
                        labelPercent: "3%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "63.6",
                        labelEnd: "65.2"
                      },
                      {
                        first: 59.5,
                        last: 63.6,
                        labelPercent: "7%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "59.5",
                        labelEnd: "63.6"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".lifeexpectancyboomers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("lifeexpectancyboomers")}
                    note={"Life expectancy (years)"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 18.1,
                        last: 22.3,
                        labelPercent: "23%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "18.1",
                        labelEnd: "22.3"
                      },
                      {
                        first: 13.9,
                        last: 19.6,
                        labelPercent: "41%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "13.9",
                        labelEnd: "19.6"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("heartattackboomers")}
                    note={"Heart attack deaths per 100,000, among ages 65-74"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 639,
                        last: 59,
                        labelPercent: "91%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "639",
                        labelEnd: "59"
                      },
                      {
                        first: 1501,
                        last: 183.3,
                        labelPercent: "88%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "1501",
                        labelEnd: "183.3"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".boomerssmokers")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("boomerssmokers")}
                    note={"Ages 55-64"}
                    years={["1980", "2015"]}
                    lines={[
                      {
                        first: 23,
                        last: 13,
                        labelPercent: "43%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "23%",
                        labelEnd: "13%"
                      },
                      {
                        first: 33,
                        last: 18,
                        labelPercent: "45%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "33%",
                        labelEnd: "18%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("lungdisease")}
                    note={"Lung disease deaths per 100,000,among ages 65-74"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 73,
                        last: 68.3,
                        labelPercent: "6%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "73",
                        labelEnd: "68.3"
                      },
                      {
                        first: 275,
                        last: 85.1,
                        labelPercent: "69%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "275",
                        labelEnd: "85.1"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>
          </div>

        {/* 
          *
          *
          Builders
          *
          *    
          */}
          <div>
            <Portal into={document.querySelector(".lessthan15k")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("lessthan15k")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 63,
                        last: 17,
                        labelPercent: "73%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "63%",
                        labelEnd: "17%"
                      },
                      {
                        first: 89,
                        last: 19,
                        labelPercent: "79%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "89%",
                        labelEnd: "19%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("morethan65k")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 0.9,
                        last: 5.7,
                        labelPercent: "533%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "0.9%",
                        labelEnd: "5.7%"
                      },
                      {
                        first: 3.3,
                        last: 11.7,
                        labelPercent: "255%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "3.3%",
                        labelEnd: "11.7%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".powerspending")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("powerspending")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 23,
                        last: 33,
                        labelPercent: "43%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$23",
                        labelEnd: "$33"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("medicalspending")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 30,
                        last: 81,
                        labelPercent: "170%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$30",
                        labelEnd: "$81"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".annualpension")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("annualpension")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 13100,
                        last: 20665,
                        labelPercent: "58%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$13,100",
                        labelEnd: "$20,665"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("householdincomebuilders")}
                    note={"Figures normalised in 2016 dollars"}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 681,
                        last: 1145,
                        labelPercent: "68%",
                        labelSign: "+",
                        labelSex: "All",
                        labelStart: "$681",
                        labelEnd: "$1,145"
                      }
                    ]}
                  />
                  <SlopeChart
                    title={getTitle("ownedhomeoutright")}
                    years={["1984", "2016"]}
                    lines={[
                      {
                        first: 78,
                        last: 75,
                        labelPercent: "4%",
                        labelSign: "-",
                        labelSex: "All",
                        labelStart: "78%",
                        labelEnd: "75%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal
              into={document.querySelector(".eightyfiveplusasproportion")}
            >
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("eightyfiveplusasproportion")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 1.0,
                        last: 2.6,
                        labelPercent: "160%",
                        labelSign: "+",
                        labelSex: "Female",
                        labelStart: "1.0%",
                        labelEnd: "2.6%"
                      },
                      {
                        first: 0.4,
                        last: 1.6,
                        labelPercent: "300%",
                        labelSign: "+",
                        labelSex: "Male",
                        labelStart: "0.4%",
                        labelEnd: "1.6%"
                      }
                    ]}
                  />
                </div>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("deathscancer")}
                    note={"Cancer deaths (all ages) per 100,000"}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 178.6,
                        last: 153.1,
                        labelPercent: "14%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "178.6",
                        labelEnd: "153.1"
                      },
                      {
                        first: 324.1,
                        last: 236.1,
                        labelPercent: "27%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "324.1",
                        labelEnd: "236.1"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>

            <Portal into={document.querySelector(".widowedbuilders")}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <SlopeChart
                    title={getTitle("widowedbuilders")}
                    years={["1981", "2016"]}
                    lines={[
                      {
                        first: 69,
                        last: 53,
                        labelPercent: "23%",
                        labelSign: "-",
                        labelSex: "Female",
                        labelStart: "69%",
                        labelEnd: "53%"
                      },
                      {
                        first: 28,
                        last: 18,
                        labelPercent: "36%",
                        labelSign: "-",
                        labelSex: "Male",
                        labelStart: "28%",
                        labelEnd: "18%"
                      }
                    ]}
                  />
                </div>
              </div>
            </Portal>
          </div>
      </div>
    );
  }
}

function getTitle(selector) {
  const element = document.querySelector("." + selector);
  if (element) {
    return document.querySelector("." + selector).previousSibling.innerText;
  } else return null;
}

module.exports = ChartStory;
