const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));

// Increase > 1.0 or decrease < 1.0 height of all charts
const yScaleFactor = 4.0;

const CHART_WIDTH = 350;

const MARGIN_TOP = 60;
const MARGIN_RIGHT = 66;
const MARGIN_BOTTOM = 60;
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

  attachChart = () => {
    const wrapper = d3.select(this.node.current);
    const svg = wrapper.append("svg");

    // Logarithmically scale the chart height
    // so things don't get out of hand
    const scaleChartHeight = d3
      .scaleLog()
      .domain([70, 10000])
      .range([0, 700]);

    const scaleX = d3
      .scaleLinear()
      .domain([0, CHART_WIDTH])
      .range([0 + MARGIN_LEFT, CHART_WIDTH - MARGIN_RIGHT]);

    const scaleY = d3.scaleLinear();

    let min;
    let max;
    let chartHeight = 100; // set min height

    // Bounding left line
    const leftBound = svg.append("line");

    // Bounding right line
    const rightBound = svg.append("line");

    // Left year
    const leftYear = svg.append("text");

    // Right year
    const rightYear = svg.append("text");

    // Used for overlap detection
    let rightLabels = [];

    // Loop over lines
    this.props.lines.forEach((line, iteration) => {
      // Create a group so we can nudge these later
      rightLabels[iteration] = svg.append("g");

      const percentChange =
        ((line.last - line.first) / line.first) * 100 * yScaleFactor;

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
        scaleChartHeight(Math.abs(percentChange)) > chartHeight
      )
        chartHeight = scaleChartHeight(Math.abs(percentChange));

      scaleY
        .domain([min, max])
        .range([chartHeight - MARGIN_BOTTOM, 0 + MARGIN_TOP]);

      const didIncrease = () => line.first < line.last;

      // Style main svg container
      svg
        .attr("width", this.props.width || CHART_WIDTH)
        .attr("height", chartHeight)
        .style("background-color", "rgba(0, 0, 0, 0.03"); // remove later

      leftBound
        .attr("x1", scaleX(0))
        .attr("y1", scaleY(min))
        .attr("x2", scaleX(0))
        .attr("y2", scaleY(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      rightBound
        .attr("x1", scaleX(CHART_WIDTH))
        .attr("y1", scaleY(min))
        .attr("x2", scaleX(CHART_WIDTH))
        .attr("y2", scaleY(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      leftYear
        .text(this.props.years[0])
        .attr("x", scaleX(0) - 3)
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

      rightYear
        .text(this.props.years[1])
        .attr("x", scaleX(CHART_WIDTH) + 3)
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
      svg
        .append("line")
        .attr("x1", scaleX(0))
        .attr("y1", scaleY(line.first))
        .attr("x2", scaleX(CHART_WIDTH))
        .attr("y2", scaleY(line.last))
        .attr("stroke-width", 3)
        .attr("stroke", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // Start circle
      svg
        .append("circle")
        .attr("cx", scaleX(0))
        .attr("cy", scaleY(line.first))
        .attr("r", CIRCLE_RADIUS)
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // End circle
      svg
        .append("circle")
        .attr("cx", scaleX(CHART_WIDTH))
        .attr("cy", scaleY(line.last))
        .attr("r", CIRCLE_RADIUS)
        .attr("fill", () => {
          if (line.labelSex === "All") return line1color;
          else if (line.labelSex === "Female") return line2color;
          else if (line.labelSex === "Male") return line3color;
        });

      // Label start
      svg
        .append("text")
        .text(line.labelStart)
        .attr("x", scaleX(0) - LABEL_LEFT_OFFSET)
        .attr("y", scaleY(line.first) + 1.35)
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
      rightLabels[iteration]
        .append("text")
        .text(line.labelEnd)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
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
      rightLabels[iteration]
        .append("text")
        .text(line.labelSex)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
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
        .style("font-weight", "bold")
        .style("text-transform", "uppercase");

      // Label percent
      rightLabels[iteration]
        .append("text")
        .text(line.labelPercent)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
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
      rightLabels[iteration]
        .append("text")
        .text(line.labelSign)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET - 3)
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
    if (rightLabels.length === 2) {
      const label1 = rightLabels[0].node().getBBox();
      const label2 = rightLabels[1].node().getBBox();

      // Work out which is on top
      // then nudge accordingly
      if (label1.y < label2.y) {
        const label1Lowest = label1.y + label1.height;

        const overlap = label1Lowest - label2.y;

        if (overlap > 0) {
          rightLabels[0].attr("transform", `translate(0, -${overlap / 2})`);
          rightLabels[1].attr("transform", `translate(0, ${overlap / 2})`);
        }
      } else {
        const label2Lowest = label2.y + label2.height;

        const overlap = label2Lowest - label1.y;
        if (overlap > 0) {
          rightLabels[1].attr("transform", `translate(0, -${overlap / 2})`);
          rightLabels[0].attr("transform", `translate(0, ${overlap / 2})`);
        }
      }
    }

    // Charts with 3 lines
    // 3 labels makes things harder
    if (rightLabels.length === 3) {
      const label1 = rightLabels[0].node().getBBox();
      const label2 = rightLabels[1].node().getBBox();
      const label3 = rightLabels[2].node().getBBox();

      // Calculate which order they are in, top to bottom
      const top = () => {
        if (label1.y === Math.min(label1.y, label2.y, label3.y))
          return rightLabels[0];
        if (label2.y === Math.min(label2.y, label2.y, label3.y))
          return rightLabels[1];
        if (label3.y === Math.min(label3.y, label2.y, label3.y))
          return rightLabels[2];
      };

      const bottom = () => {
        if (label1.y === Math.max(label1.y, label2.y, label3.y))
          return rightLabels[0];
        if (label2.y === Math.max(label2.y, label2.y, label3.y))
          return rightLabels[1];
        if (label3.y === Math.max(label3.y, label2.y, label3.y))
          return rightLabels[2];
      };

      const middle = () => {
        if (rightLabels[0] !== top() && rightLabels[0] !== bottom())
          return rightLabels[0];
        if (rightLabels[1] !== top() && rightLabels[1] !== bottom())
          return rightLabels[1];
        if (rightLabels[2] !== top() && rightLabels[2] !== bottom())
          return rightLabels[2];
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

      console.log(topBox, middleBox, bottomBox);

      // There can be 2 overlaps (maybe 3???)
      const topLowest = topBox.y + topBox.height;
      const middleLowest = middleBox.y + middleBox.height;
      const bottomLowest = middleBox.y + topBox.height;

      const topOverlap = topLowest - middleBox.y;

      const bottomOverlap = bottomLowest - bottomBox.y;

      console.log(topOverlap, bottomOverlap);

      let topTranslate = 0;
      let middleTranslate = 0;
      let bottomTranslate = 0;

      // If only top overlaps
      if (topOverlap > 0 && bottomOverlap <= 0) {
        bottomTranslate = 0;
        middleTranslate = topOverlap / 2;
        topTranslate = -topOverlap / 2;
        if (middleLowest + middleTranslate > bottomBox.y)
          bottomTranslate = middleLowest + middleTranslate - bottomBox.y;
      }

      // If only bottom overlaps
      if (bottomOverlap > 0 && topOverlap <= 0) {
        topTranslate = 0;
        middleTranslate = -bottomOverlap / 2;
        bottomTranslate = bottomOverlap / 2;
        if (middleBox.y + middleTranslate < topLowest)
          topTranslate = middleBox.y + middleTranslate - topLowest;
      }

      // const diff = topOverlap - bottomOverlap;

      top().attr("transform", `translate(0, ${topTranslate})`);
      middle().attr("transform", `translate(0, ${middleTranslate})`);
      bottom().attr("transform", `translate(0, ${bottomTranslate})`);
    }
  };

  componentDidMount() {
    this.attachChart();
  }

  render() {
    return <div ref={this.node} className={styles.wrapper} />;
  }

  // Set default props
  static defaultProps = {
    width: 350,
    line: [100, 300]
  };
}

module.exports = SlopeChart;
