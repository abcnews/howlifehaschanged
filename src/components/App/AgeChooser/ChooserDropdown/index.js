const React = require("react");
const styles = require("./styles.scss");

class ChooserDropdown extends React.Component {
  valueSelected = (event) => {
    console.log("Selected...");
    console.log("this is:", this.props.currentGeneration);
    this.props.setGeneration(event.target.value);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <select value={this.props.currentGeneration} onChange={this.valueSelected}>
          <option value="all-ages">All ages</option>
          <option value="generation-z">Generation Z</option>
          <option value="millennials">Millennials</option>
          <option value="generation-x">Generation X</option>
          <option value="baby-boomers">Baby Boomers</option>
          <option value="builders">Builders</option>
        </select>
      </div>
    );
  }
}

module.exports = ChooserDropdown;
