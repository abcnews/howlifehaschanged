const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));

// Increase > 1.0 or decrease < 1.0 height of all charts
const yScaleFactor = 1.8;

const CHART_WIDTH = 350;

const MARGIN_TOP = 35;
const MARGIN_RIGHT = 66;
const MARGIN_BOTTOM = 35;
const MARGIN_LEFT = 45;
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

    const scaleX = d3
      .scaleLinear()
      .domain([0, CHART_WIDTH])
      .range([0 + MARGIN_LEFT, CHART_WIDTH - MARGIN_RIGHT]);

    const scaleHeight = d3.scaleLinear();

    let min;
    let max;
    let chartHeight;

    // Bounding left line
    const leftBound = svg.append("line");

    // Bounding right line
    const rightBound = svg.append("line");

    // Left year
    const leftYear = svg.append("text");

    // Right year
    const rightYear = svg.append("text");

    // Loop over lines
    this.props.lines.forEach((line, iteration) => {
      console.log(line);
      console.log(iteration);

      const percentChange =
        ((line.last - line.first) / line.first) * 100 * yScaleFactor;

      // Set new min and max for chart if
      // lines go out of upper and lower bounds
      if (
        typeof lastname === "undefined" ||
        Math.min(line.first, line.last) < min
      )
        min = Math.min(line.first, line.last);
      if (
        typeof lastname === "undefined" ||
        Math.max(line.first, line.last) > max
      )
        max = Math.max(line.first, line.last);

      // Chart height is percentage change of
      // the minimum and maximu value for all lines
      chartHeight = Math.abs(((max - min) / max) * 100 * yScaleFactor);

      scaleHeight
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
        .attr("y1", scaleHeight(min))
        .attr("x2", scaleX(0))
        .attr("y2", scaleHeight(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      rightBound
        .attr("x1", scaleX(CHART_WIDTH))
        .attr("y1", scaleHeight(min))
        .attr("x2", scaleX(CHART_WIDTH))
        .attr("y2", scaleHeight(max))
        .attr("stroke-width", 3)
        .attr("stroke", "#003C66");

      leftYear
        .text(this.props.years[0])
        .attr("x", scaleX(0) - 3)
        .attr("y", scaleHeight(max) - 12)
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
        .attr("y", scaleHeight(max) - 12)
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "baseline")
        .attr("fill", "#B0E6FF")
        .style(
          "font-family",
          `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
        )
        .style("font-size", "12px")
        .style("font-weight", "bold");

      // The first line
      svg
        .append("line")
        .attr("x1", scaleX(0))
        .attr("y1", scaleHeight(line.first))
        .attr("x2", scaleX(CHART_WIDTH))
        .attr("y2", scaleHeight(line.last))
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
        .attr("cy", scaleHeight(line.first))
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
        .attr("cy", scaleHeight(line.last))
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
        .attr("y", scaleHeight(line.first) + 1.35)
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
      svg
        .append("text")
        .text(line.labelEnd)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleHeight(line.last) + 1.35)
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
      svg
        .append("text")
        .text(line.labelSex)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleHeight(line.last) - 11)
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
      svg
        .append("text")
        .text(line.labelPercent)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET)
        .attr("y", scaleHeight(line.last) + 15)
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
        .style("text-transform", "uppercase")
        .style("font-variant-numeric", "tabular-nums");

      // Label sign + or -
      svg
        .append("text")
        .text(line.labelSign)
        .attr("x", scaleX(CHART_WIDTH) + LABEL_RIGHT_OFFSET - 3)
        .attr("y", scaleHeight(line.last) + 15)
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
