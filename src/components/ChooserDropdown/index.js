const React = require("react");
const styles = require("./styles.scss");
const Select = require("react-select").default;

const options = [
  { value: "allages", label: "All ages" },
  { value: "genz", label: "Generation Z: 1995 - 2018" },
  { value: "millennials", label: "Millennials: 1980 -1994" },
  { value: "genx", label: "Generation X: 1965 - 1979" },
  { value: "boomers", label: "Baby Boomers: 1946 - 1964" },
  { value: "builders", label: "Builders: 1925 - 1945" }
];

// React Select v2 now uses a wrapper around Emotion for CSS-in-JS
const customStyles = {
  control: (base, state) => {
    return {
      ...base,
      borderRadius: 0,
      borderColor: "transparent",
      backgroundColor: "#0E334F"
    };
  },
  singleValue: (base, state) => {
    return {
      ...base, color: "white"
    }
  },
  menu: (base, state) => {
    return {
      ...base, borderRadius: "0"
    }
  },
  dropdownIndicator: (base, state) => {
    return {
      ...base, color: "white"
      // The :hover styles are in ./styles.css
    }
  }
};

class ChooserDropdown extends React.Component {
  handleChange = selectedOption => {
    // Don't process if user backspaces
    // if (selectedOption instanceof Array) return;

    // Set the generation state back in the App component
    this.props.setGeneration(selectedOption.value);
  };

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
            isClearable={false}
            isSearchable={false}
            styles={customStyles}
            classNamePrefix="react-select"
          />
        </div>
      </div>
    );
  }
}

module.exports = ChooserDropdown;
