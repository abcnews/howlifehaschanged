const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));

// Increase > 1.0 or decrease < 1.0 height of all charts
const yScaleFactor = 1.8;

const CHART_WIDTH = 350;

const MARGIN_TOP = 35;
const MARGIN_RIGHT = 40;
const MARGIN_BOTTOM = 15;
const MARGIN_LEFT = 40;

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
    // TODO: loops over lines.... maybe make lines their own component?
    const first = this.props.lines[0].first;
    const last = this.props.lines[0].last;
    const percentChange = ((last - first) / first) * 100 * yScaleFactor;
    const labelStart = this.props.lines[0].labelStart;
    const labelEnd = this.props.lines[0].labelEnd;

    const min = Math.min(first, last);
    const max = Math.max(first, last);

    const chartHeight = Math.abs(percentChange); // Math.abs(first - last);

    const wrapper = d3.select(this.node.current);
    const svg = wrapper.append("svg");

    const scaleHeight = d3
      .scaleLinear()
      .domain([min, max])
      .range([chartHeight - MARGIN_BOTTOM, 0 + MARGIN_TOP]);

    const scaleX = d3
      .scaleLinear()
      .domain([0, CHART_WIDTH])
      .range([0 + MARGIN_LEFT, CHART_WIDTH - MARGIN_RIGHT]);

    const didIncrease = () => first < last;

    // The main svg container
    svg
      .attr("width", this.props.width || CHART_WIDTH)
      .attr("height", chartHeight)
      .style("background-color", "rgba(0, 0, 0, 0.05"); // remove later

    // Bounding left line
    svg
      .append("line")
      .attr("x1", scaleX(0))
      .attr("y1", scaleHeight(min))
      .attr("x2", scaleX(0))
      .attr("y2", scaleHeight(max))
      .attr("stroke-width", 3)
      .attr("stroke", "#003C66");

    // Bounding right line
    svg
      .append("line")
      .attr("x1", scaleX(CHART_WIDTH))
      .attr("y1", scaleHeight(min))
      .attr("x2", scaleX(CHART_WIDTH))
      .attr("y2", scaleHeight(max))
      .attr("stroke-width", 3)
      .attr("stroke", "#003C66");

    // Left year
    svg
      .append("text")
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

    // Right year
    svg
      .append("text")
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
      .attr("y1", scaleHeight(first))
      .attr("x2", scaleX(CHART_WIDTH))
      .attr("y2", scaleHeight(last))
      .attr("stroke-width", 3)
      .attr("stroke", line1color);

    // Start circle
    svg
      .append("circle")
      .attr("cx", scaleX(0))
      .attr("cy", scaleHeight(first))
      .attr("r", CIRCLE_RADIUS)
      .attr("fill", line1color);

    // End circle
    svg
      .append("circle")
      .attr("cx", scaleX(CHART_WIDTH))
      .attr("cy", scaleHeight(last))
      .attr("r", CIRCLE_RADIUS)
      .attr("fill", line1color);

    // Label start
    svg
      .append("text")
      .text(labelStart)
      .attr("x", scaleX(0) - 8)
      .attr("y", scaleHeight(first) + 1.35)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .attr("fill", line1color)
      .style(
        "font-family",
        `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
      )
      .style("font-size", "11px")
      .style("font-weight", "bold");

    // Label end
    svg
      .append("text")
      .text(labelEnd)
      .attr("x", scaleX(CHART_WIDTH) + 8)
      .attr("y", scaleHeight(last) + 1.35)
      .attr("text-anchor", "start")
      .attr("dominant-baseline", "middle")
      .attr("fill", line1color)
      .style(
        "font-family",
        `"ABCSans-bold", ABCSans, Helvetica, Arial, sans-serif`
      )
      .style("font-size", "11px")
      .style("font-weight", "bold");
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
