const React = require("react");
const styles = require("./styles.scss");
const Keyshape = require("react-keyshape").Keyshape;
const d3 = Object.assign({}, require("d3-selection"));

class AnimatedIcon extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    // const svg = this.node.current;

    // setTimeout(() => {
    //   console.log(svg.querySelector(".keyshape-svg svg"));
    // }, 2000);
  }

  render() {
    return (
      <div
        className={styles.wrapper}
        style={{
          paddingLeft: this.props.paddingLeft,
          paddingRight: this.props.paddingRight,
          width: this.props.width + "px",
          transform: `translate(${this.props.nudgeX}px, ${this.props.nudgeY}px)`
        }}
        ref={this.node}
      >
        <Keyshape svg={this.props.svg} />
      </div>
    );
  }

  static defaultProps = {
    paddingLeft: "0px",
    paddingRight: "0px",
    width: "150px",
    nudgeX: 0,
    nudgeY: 0
  };
}

module.exports = AnimatedIcon;
