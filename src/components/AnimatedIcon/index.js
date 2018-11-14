const React = require("react");
const styles = require("./styles.scss");
const Keyshape = require("react-keyshape").Keyshape;
// const d3 = Object.assign({}, require("d3-selection"));

class AnimatedIcon extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className={styles.wrapper}
        style={{
          paddingLeft: this.props.paddingLeft + "px",
          paddingRight: this.props.paddingRight + "px",
          paddingTop: this.props.paddingTop + "px",
          paddingBottom: this.props.paddingBottom + "px",
          width: this.props.width + "px",
          transform: `translate(${this.props.nudgeX}px, ${this.props.nudgeY}px)`
        }}
        ref={this.node}
      >
        {this.props.children}
      </div>
    );
  }

  static defaultProps = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: 150,
    nudgeX: 0,
    nudgeY: 0
  };
}

module.exports = AnimatedIcon;
