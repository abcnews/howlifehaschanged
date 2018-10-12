const React = require("react");
const styles = require("./styles.scss");

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.currentGeneration === "all-ages" && (
          <div>
            <h3>All ages</h3>
            <SlopeChart />
          </div>
        )}
        {this.props.currentGeneration === "generation-z" && (
          <div>
            <h3>Generation Z</h3>
            <SlopeChart />
          </div>
        )}
        {this.props.currentGeneration === "millennials" && (
          <div>
            <h3>Millennials</h3>
            <SlopeChart width={400} />
            <SlopeChart width={300} />
          </div>
        )}
        {this.props.currentGeneration === "generation-x" && (
          <div>
            <h3>Generation X</h3>
            <SlopeChart />
          </div>
        )}
        {this.props.currentGeneration === "baby-boomers" && (
          <div>
            <h3>Baby Boomers</h3>
            <SlopeChart />
          </div>
        )}
        {this.props.currentGeneration === "builders" && (
          <div>
            <h3>Builders</h3>
            <SlopeChart />
          </div>
        )}
      </div>
    );
  }
}

module.exports = ChartStory;
