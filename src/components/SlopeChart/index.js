const React = require("react");
const styles = require("./styles.scss");
const d3 = Object.assign({}, require("d3-selection"));

class SlopeChart extends React.Component {
  attachChart = () => {
    console.log("Attaching charts...");
    console.log(this.node);
    const wrapper = d3.select(this.node);
    const svg = wrapper.append("svg");

    svg
      .attr("width", 400)
      .attr("height", 400)
      .style("background-color", "crimson");

    console.log(styles.wrapper);
  };
  componentDidMount() {
    this.attachChart();
  }
  render() {
    return <div ref={node => (this.node = node)} className={styles.wrapper} />;
  }
}

module.exports = SlopeChart;
