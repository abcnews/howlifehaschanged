const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"), require("d3-scale"));

const CHART_WIDTH = 350;
const MARGIN = 10;

class SlopeChart extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  attachChart = () => {
    // TODO: loops over lines.... maybe make lines their own component?
    const first = this.props.lines[0].first;
    const last = this.props.lines[0].last;

    const chartHeight = Math.abs(first - last);

    const wrapper = d3.select(this.node.current);
    const svg = wrapper.append("svg");

    const scaleX = d3
      .scaleLinear()
      .domain([10, 130])
      .range([0, 960]);

    const didIncrease = () => first < last;

    svg
      .attr("width", this.props.width || CHART_WIDTH)
      .attr("height", chartHeight)
      .style("background-color", "rgba(0,0,0,0.1");

    var line = svg
      .append("line")
      .attr("x1", 0 + MARGIN)
      .attr("y1", didIncrease() ? chartHeight - MARGIN : 0 + MARGIN)
      .attr("x2", 350 - MARGIN)
      .attr("y2", didIncrease() ? 0 + MARGIN : chartHeight - MARGIN)
      .attr("stroke-width", 2)
      .attr("stroke", "#FFD70D");
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
