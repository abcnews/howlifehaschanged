const React = require("react");
const ReactDOM = require("react-dom");

class Portal extends React.Component {
  render() {
    domNode = this.props.into;

    return ReactDOM.createPortal(this.props.children, domNode);
  }
}

module.exports = Portal;
