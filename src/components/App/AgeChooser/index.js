const React = require('react');
const styles = require('./styles.scss');

class AgeChooser extends React.Component {
  render() {

console.log(..."hello")


    return (
      <div className={styles.wrapper}>
        <div className={styles.question}>What age-group are you interested in?</div>
        {/* <button>All</button> */}
      </div>
    );
  }
}

module.exports = AgeChooser;