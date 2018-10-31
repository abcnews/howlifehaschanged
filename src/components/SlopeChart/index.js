const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));
const ScrollReveal = require("scrollreveal").default;

const { ContextConsumer } = require("../ContextProvider");

// Increase > 1.0 or decrease < 1.0 height of all charts
const yScaleFactor = 4.0;

// const CHART_WIDTH = 300;
const MIN_CHART_HEIGHT = 180;

const MARGIN_TOP = 42;
const MARGIN_RIGHT = 66;
const MARGIN_BOTTOM = 42;
const MARGIN_LEFT = 66;
const LABEL_RIGHT_OFFSET = 20;
const LABEL_LEFT_OFFSET = 10;

const CIRCLE_RADIUS = 5;
const line1color = "#F7FFF7";
const line2color = "#FFD70D";
const line3color = "#4ECDC4";

class SlopeChart extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    this.attachChart();
    this.currentChartWidth = chartWidth();
  }

  componentDidUpdate() {
    if (this.currentChartWidth !== chartWidth()) {
      this.svg.remove();
      this.attachChart();
      this.currentChartWidth = chartWidth();
    }
  }

  componentWillUnmount() {
    ScrollReveal().reveal(this.node.current);
  }

  attachChart = () => {
    const wrapper = d3.select(this.node.current);
    this.svg = wrapper.append("svg");
    this.svg.classed("chart-svg", true);

    // Logarithmically scale the chart height
    // so things don't get out of hand
    const scaleChartHeight = d3
      .scaleLog()
      .domain([10, 100000])
      .range([0, 700]);

    this.scaleX = d3
      .scaleLinear()
      .domain([0, chartWidth()])
      .range([0 + MARGIN_LEFT, chartWidth() - MARGIN_RIGHT]);

    const scaleY = d3.scaleLinear();

    let min;
    let max;
    let chartHeight = MIN_CHART_HEIGHT; // set min height

    // Bounding left line
    this.leftBound = this.svg.append("line");

    // Bounding right line
    this.rightBound = this.svg.append("line");

    // Left year
    this.leftYear = this.svg.append("text");

    // Right year
    this.rightYear = this.svg.append("text");

    // Used for overlap detection
    this.rightLabels = [];

    // Loop over lines
    this.props.lines.forEach((line, iteration) => {
      // Create a group so we can nudge these later
      this.rightLabels[iteration] = this.svg.append("g");

      const percentChange = ((line.last - line.first) / line.first) * 100;

      // Set new min and max for chart if
      // lines go out of upper and lower bounds
      if (typeof min === "undefined" || Math.min(line.first, line.last) < min)
        min = Math.min(line.first, line.last);
      if (typeof max === "undefined" || Math.max(line.first, line.last) > max)
        max = Math.max(line.first, line.last);

      // Chart height is percentage change of
      // the minimum and maximu value for all lines
      if (
        // typeof chartHeight === "undefined" ||
        scaleChartHeight(Math.abs(percentChange * yScaleFactor)) > chartHeight
      )
        chartHeight = scaleChartHeight(Math.abs(percentChange * yScaleFactor));

      scaleY
        .domain([min, max])
        .range([chartHeight - MARGIN_BOTTOM, 0 + MARGIN_TOP]);

      const didIncrease = () => line.first < line.last;

      // Style main this.svg container
      this.svg
        .attr("width", chartWidth()) //this.props.width || CHART_WIDTH)
        .attr("height", chartHeight)
      // .style("background-color", "rgba(0, 0, 0, 0.03"); // remove later

      this.leftBound
        .attr("x1", this.scaleX(0))
        .attr("y1", scaleY(min))
        .attr("x2", this.scaleX(0))
        .attr("y2", scaleY(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      this.rightBound
        .attr("x1", this.scaleX(chartWidth()))
        .attr("y1", scaleY(min))
        .attr("x2", this.scaleX(chartWidth()))
        .attr("y2", scaleY(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      this.leftYear
        .text(this.props.years[0])
        .attr("x", this.scaleX(0) - 3)
        .attr("y", scaleY(max) - 12)
        .attr("text-anchor", "start")
        .attr("dominant-baseline", "baseline")
        .attr("fill", "#B0E6FF")
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "12px")
        .style("font-weight", "bold");

      this.rightYear
        .text(this.props.years[1])
        .attr("x", this.scaleX(chartWidth()) + 3)
        .attr("y", scaleY(max) - 12)
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "baseline")
        .attr("fill", "#B0E6FF")
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "12px")
        .style("font-weight", "bold");
    });

    // Second pass now that we know the upper limits
    this.props.lines.forEach((line, iteration) => {
      // The first line
      this.svg
        .append("line")
        .attr("x1", this.scaleX(0))
        .attr("y1", scaleY(line.first))
        .attr("x2", this.scaleX(chartWidth()))
        .attr("y2", scaleY(line.last))
        .attr("stroke-width", 3)
        .attr("stroke", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // Start circle
      this.svg
        .append("circle")
        .attr("cx", this.scaleX(0))
        .attr("cy", scaleY(line.first))
        .attr("r", CIRCLE_RADIUS)
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // End circle
      this.svg
        .append("circle")
        .attr("cx", this.scaleX(chartWidth()))
        .attr("cy", scaleY(line.last))
        .attr("r", CIRCLE_RADIUS)
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // Label start
      this.svg
        .append("text")
        .text(line.labelStart)
        .attr("x", this.scaleX(0) - LABEL_LEFT_OFFSET)
        .attr(
          "y",
          scaleY(line.first) + 1.35 + (line.firstNudge ? line.firstNudge : 0)
        )
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        })
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "11px")
        .style("font-weight", "bold");

      // Label end
      this.rightLabels[iteration]
        .append("text")
        .text(line.labelEnd)
        .attr("x", this.scaleX(chartWidth()) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleY(line.last) + 1.3)
        .attr("text-anchor", "start")
        .attr("dominant-baseline", "middle")
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        })
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "11px")
        .style("font-weight", "bold");

      // Label sex
      this.rightLabels[iteration]
        .append("text")
        .text(line.labelSex)
        .attr("x", this.scaleX(chartWidth()) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleY(line.last) - 11)
        .attr("text-anchor", "start")
        .attr("dominant-baseline", "middle")
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        })
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "11px")
        .style("font-weight", "900")
        .style("text-transform", "uppercase");

      // Label percent
      this.rightLabels[iteration]
        .append("text")
        .text(line.labelPercent)
        .attr("x", this.scaleX(chartWidth()) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleY(line.last) + 15)
        .attr("text-anchor", "start")
        .attr("dominant-baseline", "middle")
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        })
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "14px")
        .style("font-weight", "900")
        .style("font-variant-numeric", "tabular-nums");

      // Label sign + or -
      this.rightLabels[iteration]
        .append("text")
        .text(line.labelSign)
        .attr("x", this.scaleX(chartWidth()) + LABEL_RIGHT_OFFSET - 3)
        .attr("y", scaleY(line.last) + 15)
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        })
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "14px")
        .style("font-weight", "900")
        .style("text-transform", "uppercase")
        .style("font-variant-numeric", "tabular-nums");
    });

    // COLLISION DETECTION!!!!
    // Nudge labels that may overlap
    // for exactly 2 labels
    if (this.rightLabels.length === 2) {
      const label1 = this.rightLabels[0].node().getBBox();
      const label2 = this.rightLabels[1].node().getBBox();

      // Work out which is on top
      // then nudge accordingly
      if (label1.y < label2.y) {
        const label1Lowest = label1.y + label1.height;

        const overlap = label1Lowest - label2.y;

        if (overlap > 0) {
          this.rightLabels[0].attr(
            "transform",
            `translate(0, -${overlap / 2})`
          );
          this.rightLabels[1].attr("transform", `translate(0, ${overlap / 2})`);
        }
      } else {
        const label2Lowest = label2.y + label2.height;

        const overlap = label2Lowest - label1.y;
        if (overlap > 0) {
          this.rightLabels[1].attr(
            "transform",
            `translate(0, -${overlap / 2})`
          );
          this.rightLabels[0].attr("transform", `translate(0, ${overlap / 2})`);
        }
      }
    }

    // Charts with 3 lines
    // 3 labels makes things harder
    // NOTE: There shouldn't be any with 3 now after
    // removing "All" from those with "Male" and "Female" lines
    if (this.rightLabels.length === 3) {
      const label1 = this.rightLabels[0].node().getBBox();
      const label2 = this.rightLabels[1].node().getBBox();
      const label3 = this.rightLabels[2].node().getBBox();

      // Calculate which order they are in, top to bottom
      const top = () => {
        if (label1.y === Math.min(label1.y, label2.y, label3.y))
          return this.rightLabels[0];
        if (label2.y === Math.min(label2.y, label2.y, label3.y))
          return this.rightLabels[1];
        if (label3.y === Math.min(label3.y, label2.y, label3.y))
          return this.rightLabels[2];
      };

      const bottom = () => {
        if (label1.y === Math.max(label1.y, label2.y, label3.y))
          return this.rightLabels[0];
        if (label2.y === Math.max(label2.y, label2.y, label3.y))
          return this.rightLabels[1];
        if (label3.y === Math.max(label3.y, label2.y, label3.y))
          return this.rightLabels[2];
      };

      const middle = () => {
        if (this.rightLabels[0] !== top() && this.rightLabels[0] !== bottom())
          return this.rightLabels[0];
        if (this.rightLabels[1] !== top() && this.rightLabels[1] !== bottom())
          return this.rightLabels[1];
        if (this.rightLabels[2] !== top() && this.rightLabels[2] !== bottom())
          return this.rightLabels[2];
      };

      const topBox = top()
        .node()
        .getBBox();
      const middleBox = middle()
        .node()
        .getBBox();
      const bottomBox = bottom()
        .node()
        .getBBox();

      // There can be 2 overlaps (maybe 3???)
      const topLowest = topBox.y + topBox.height;
      const middleLowest = middleBox.y + middleBox.height;
      const bottomLowest = middleBox.y + topBox.height;

      const topOverlap = topLowest - middleBox.y;

      const bottomOverlap = bottomLowest - bottomBox.y;

      // Set up the translates to change later
      // Zero means we leave the labels alone
      let topTranslate = 0;
      let middleTranslate = 0;
      let bottomTranslate = 0;

      // Use the difference between overlaps
      // to smooth out average of all
      const diff = topOverlap - bottomOverlap;

      // If only top overlaps
      if (topOverlap > 0 && bottomOverlap <= 0) {
        bottomTranslate = 0;
        middleTranslate = topOverlap / 2;
        topTranslate = -topOverlap / 2;
        // Just in case the nudge overlaps the bottom
        if (middleLowest + middleTranslate > bottomBox.y)
          bottomTranslate = middleLowest + middleTranslate - bottomBox.y;
      }

      // If only bottom overlaps
      else if (bottomOverlap > 0 && topOverlap <= 0) {
        topTranslate = 0;
        middleTranslate = -bottomOverlap / 2;
        bottomTranslate = bottomOverlap / 2;
        // Just in case the nudge overlaps the top
        if (middleBox.y + middleTranslate < topLowest)
          topTranslate = middleBox.y + middleTranslate - topLowest;
      }

      // If both overlap
      else if (bottomOverlap > 0 && topOverlap > 0) {
        topTranslate = -topOverlap + diff / 2;
        middleTranslate = 0 + diff / 2;
        bottomTranslate = bottomOverlap + diff / 2;
      }

      // Now actually do the label translations
      top().attr("transform", `translate(0, ${topTranslate})`);
      middle().attr("transform", `translate(0, ${middleTranslate})`);
      bottom().attr("transform", `translate(0, ${bottomTranslate})`);
    }

    // Chart animations when they enter the page
    ScrollReveal().reveal(this.node.current, {
      delay: 0,
      duration: 750,
      scale: 0.9,
      distance: "20px",
      reset: true,
      viewFactor: 0.3
    });
  };

  render() {
    return (
      <ContextConsumer>
        {context => {
          return (
            <div className={styles.wrapper}>
              <div className={styles.title}>{this.props.title}</div>
              <div ref={this.node} className={"chart-div"} />
            </div>
          );
        }}
      </ContextConsumer>
    );
  }

  // Set default props
  static defaultProps = {
    width: chartWidth(),
    line: [100, 300]
  };
}

// if small phone go smaller
function chartWidth() {
  if (window.innerWidth > 330) return 350;
  else return 300;
}

module.exports = SlopeChart;
