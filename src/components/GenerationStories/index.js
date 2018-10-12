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
            <SlopeChart line={[400, 100]} />
          </div>
        )}
        {this.props.currentGeneration === "generation-z" && (
          <div>
            <h3>Generation Z</h3>
            <SlopeChart line={[493, 34]} />
          </div>
        )}
        {this.props.currentGeneration === "millennials" && (
          <div>
            <h3>Millennials</h3>
            <SlopeChart line={[4, 100]} />
            <SlopeChart line={[100, 40]} />
          </div>
        )}
        {this.props.currentGeneration === "generation-x" && (
          <div>
            <h3>Generation X</h3>
            <SlopeChart line={[789, 1200]} />
          </div>
        )}
        {this.props.currentGeneration === "baby-boomers" && (
          <div>
            <h3>Baby Boomers</h3>
            <SlopeChart line={[47, 454]} />
          </div>
        )}
        {this.props.currentGeneration === "builders" && (
          <div>
            <h3>Builders</h3>
            <SlopeChart line={[546, 1200]} />
          </div>
        )}
      </div>
    );
  }
}

module.exports = ChartStory;
