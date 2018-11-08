const React = require('react');
const styles = require('./styles.scss');

class AnimatedIcon extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        Find me in <strong>src/components/AnimatedIcon/index.js</strong>
      </div>
    );
  }
}

module.exports = AnimatedIcon;