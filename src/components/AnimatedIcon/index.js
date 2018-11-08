const React = require('react');
const styles = require('./styles.scss');
const Keyshape = require("react-keyshape").Keyshape;

class AnimatedIcon extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Keyshape svg={this.props.svg} />
      </div>
    );
  }
}

module.exports = AnimatedIcon;