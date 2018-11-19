const React = require("react");
const styles = require("./styles.scss");

class AnimatedIcon extends React.Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    // THIS IS NOW HANDLED BY MANUALLY SETTING THE HEIGHT OF SVGS
    // setTimeout(() => {
    //   const svg = d3.select(this.node.current.querySelector("svg"));
    //   // const svgSelection = d3.select(this.node.current.querySelector("svg"));
    //   const viewBox = svg.attr("viewBox").split(" ");
    //   const vbWidth = viewBox[2];
    //   const vbHeight = viewBox[3];
    //   console.log(vbWidth, vbHeight)
    //   console.log(svg.node().getBBox());
    //   const bbWidth = svg.node().getBBox().width;
    //   console.log(bbWidth)
    //   const newSvgHeight = bbWidth / vbWidth * vbHeight
    //   console.log(newSvgHeight)
    //   svg.attr("height", newSvgHeight / 2);
    // }, 10000);
  }

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
          height: this.props.height + "px",
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
