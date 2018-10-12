const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"));

class SlopeChart extends React.Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  attachChart = () => {
    const wrapper = d3.select(this.node.current);
    const svg = wrapper.append("svg");

    svg
      .attr("width", this.props.width || 300)
      .attr("height", 200)
      .style("background-color", "crimson");
  };

  componentDidMount() {
    this.attachChart();
  }

  render() {
    return <div ref={this.node} className={styles.wrapper} />;
  }
}

module.exports = SlopeChart;
