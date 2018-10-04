const React = require('react');
const styles = require('./styles.scss');

class AgeChooser extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        What are-group are you interested in?
      </div>
    );
  }
}

module.exports = AgeChooser;