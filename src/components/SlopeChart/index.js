const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"));

const CHART_WIDTH = 350;

class SlopeChart extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.node = React.createRef();
  }
  attachChart = () => {
    const chartHeight = Math.abs(this.props.line[0] - this.props.line[1]);

    const wrapper = d3.select(this.node.current);
    const svg = wrapper.append("svg");

    svg
      .attr("width", this.props.width || CHART_WIDTH)
      .attr("height", chartHeight)
      .style("background-color", "darkblue");
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
    line: [100, 200]
  }
  
}

module.exports = SlopeChart;
