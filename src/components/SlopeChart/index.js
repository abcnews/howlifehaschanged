const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));

const CHART_WIDTH = 350;

const MARGIN_TOP = 15;
const MARGIN_RIGHT = 20;
const MARGIN_BOTTOM = 15;
const MARGIN_LEFT = 20;

const CIRCLE_RADIUS = 5;

class SlopeChart extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  attachChart = () => {
    // TODO: loops over lines.... maybe make lines their own component?
    const first = this.props.lines[0].first;
    const last = this.props.lines[0].last;

    const min = Math.min(first, last);
    const max = Math.max(first, last);

    const chartHeight = Math.abs(first - last);

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
      .style("background-color", "rgba(0, 0, 0, 0.1"); // remove later

    // Bounding lines
    svg.append("line")
      .attr("x1", scaleX(0))
      .attr("y1", scaleHeight(min))
      .attr("x2", scaleX(0))
      .attr("y2", scaleHeight(max))
      .attr("stroke-width", 3)
      .attr("stroke", "#333");

    // The first line
    svg
      .append("line")
      .attr("x1", scaleX(0))
      .attr("y1", scaleHeight(first))
      .attr("x2", scaleX(CHART_WIDTH))
      .attr("y2", scaleHeight(last))
      .attr("stroke-width", 3)
      .attr("stroke", "#FFD70D");

    // Start circle
    svg
      .append("circle")
      .attr("cx", scaleX(0))
      .attr("cy", scaleHeight(first))
      .attr("r", CIRCLE_RADIUS)
      .attr("fill", "#FFD70D");

    // End circle
    svg
      .append("circle")
      .attr("cx", scaleX(CHART_WIDTH))
      .attr("cy", scaleHeight(last))
      .attr("r", CIRCLE_RADIUS)
      .attr("fill", "#FFD70D");
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
