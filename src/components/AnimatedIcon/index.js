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
    const svg = this.node.current

    setTimeout(() => {
      console.log(svg.querySelector(".keyshape-svg svg"));
    }, 2000)
    
  }

  render() {
    return (
      <div
        className={styles.wrapper}
        style={{ marginBottom: "100px" }}
        ref={this.node}
      >
        <Keyshape svg={this.props.svg} />
      </div>
    );
  }

  static defaultProps = {};
}

module.exports = AnimatedIcon;
