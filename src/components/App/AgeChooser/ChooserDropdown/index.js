const React = require("react");
const styles = require("./styles.scss");
const Select = require("react-select").default;

const options = [
  { value: "all-ages", label: "All ages" },
  { value: "generation-z", label: "Generation Z" },
  { value: "millennials", label: "Milliennials" },
  { value: "generation-x", label: "Generation X" },
  { value: "baby-boomers", label: "Baby Boomers" },
  { value: "builders", label: "Builders" }
];

class ChooserDropdown extends React.Component {


  handleChange = selectedOption => {
    // Don't process if user backspaces
    if (selectedOption instanceof Array) return;
    console.log("Option selected:", selectedOption);
    this.props.setGeneration(selectedOption.value)
  };

  componentDidUpdate() {}

  render() {
    // Search the options array for current generation from props
    let currentOption = options.find(
      option => option.value === this.props.currentGeneration
    );

    // Set the selected option for React Select
    const selectedOption = {
      value: this.props.currentGeneration,
      label: currentOption ? currentOption.label : ""
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      </div>
    );
  }
}

module.exports = ChooserDropdown;
