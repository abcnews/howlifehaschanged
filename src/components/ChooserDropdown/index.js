const React = require("react");
const styles = require("./styles.scss");
const Select = require("react-select").default;

const options = [
  { value: "children", label: "Children" },
  { value: "teenagers", label: "Teenagers" },
  { value: "twenties", label: "Twenties" },
  { value: "thirties", label: "Thirties" },
  { value: "forties", label: "Forties" },
  { value: "fifties", label: "Fifties" },
  { value: "sixties", label: "Sixties" },
  { value: "seventiesandover", label: "Seventies and over" }
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
      ...base,
      color: "white"
    };
  },
  menu: (base, state) => {
    return {
      ...base,
      borderRadius: "0"
    };
  },
  dropdownIndicator: (base, state) => {
    return {
      ...base,
      color: "white"
      // The :hover styles are in ./styles.css
    };
  },
  placeholder: (base, state) => {
    return {
      ...base,
      color: "#3170a0"
    };
  },
  menuList: (base, state) => {
    console.log(base);
    return { ...base, maxHeight: 350 };
  }
};

class ChooserDropdown extends React.Component {
  handleChange = selected => {
    // Don't process if user backspaces
    // if (selectedOption instanceof Array) return;

    // Set the generation state back in the App component
    if (selected === null) this.props.setGeneration("");
    else this.props.setGeneration(selected.value, true);
  };

  render() {
    // Search the options array for current generation from props
    let currentOption = options.find(
      option => option.value === this.props.currentGeneration
    );

    // Set the selected option for React Select
    const selectedOption =
      this.props.currentGeneration === ""
        ? null
        : {
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
            placeholder="Please select..."
          />
        </div>
      </div>
    );
  }
}

module.exports = ChooserDropdown;
