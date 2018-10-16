const React = require("react");
const styles = require("./styles.scss");

const SlopeChart = require("../SlopeChart");

class ChartStory extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.currentGeneration === "allages" && (
          <div>
            <h3>All ages</h3>
            <SlopeChart line={[400, 100]} lines={[{ first: 123, last: 342 }]} />
          </div>
        )}
        {this.props.currentGeneration === "genz" && (
          <div>
            <h3>Generation Z</h3>
            <SlopeChart line={[493, 34]} lines={[{ first: 324, last: 665 }]} />
          </div>
        )}
        {this.props.currentGeneration === "millennials" && (
          <div>
            <h3>Millennials</h3>
            <SlopeChart line={[4, 100]} lines={[{ first: 100, last: 300 }]} />
            <SlopeChart line={[100, 400]} lines={[{ first: 500, last: 300 }]} />
          </div>
        )}
        {this.props.currentGeneration === "genx" && (
          <div>
            <h3>Generation X</h3>
            <SlopeChart
              line={[789, 1200]}
              lines={[{ first: 765, last: 654 }]}
            />
          </div>
        )}
        {this.props.currentGeneration === "boomers" && (
          <div>
            <h3>Baby Boomers</h3>
            <SlopeChart line={[47, 454]} lines={[{ first: 234, last: 543 }]} />
          </div>
        )}
        {this.props.currentGeneration === "builders" && (
          <div>
            <h3>Builders</h3>
            <SlopeChart
              line={[546, 1200]}
              lines={[{ first: 234, last: 343 }]}
            />
          </div>
        )}
      </div>
    );
  }
}

module.exports = ChartStory;
