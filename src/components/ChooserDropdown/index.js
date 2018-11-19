const React = require("react");
const styles = require("./styles.scss");
const Select = require("react-select").default;
const d3 = Object.assign({}, require("d3-selection"));

// User agent detection for iOS bugs
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

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
    return { ...base, maxHeight: 350 };
  },
  option: (base, state) => {
    // Obscure focus a little bit as to not
    // confuse people on mobile on what is
    // selected when there is no hover or keyboard.
    if (state.isFocused && !state.isSelected)
      return { ...base, backgroundColor: "#f9f9f9" };
    else return { ...base };
  }
};

class ChooserDropdown extends React.Component {
  state = {
    innerHeight: 0
  };
  componentDidMount() {
    this.setState({ innerHeight: window.innerHeight });
  }

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
            menuShouldScrollIntoView={false}
            menuShouldBlockScroll={false}
            blurInputOnSelect={true}
            closeMenuOnScroll={true}
            onMenuOpen={() => {
              // Hack fixes for Mobile Safari issues
              if (iOSSafari) {
                const y = window.scrollY;
                window.scrollTo(0, y);

                if (this.state.innerHeight < window.innerHeight) {
                  d3.select("#docking-chooser").classed("padding", true);
                }
              }
            }}
            onMenuClose={() => {
              // Hack fixes for Mobile Safari issues
              if (iOSSafari) {
                if (this.state.innerHeight < window.innerHeight) {
                  d3.select("#docking-chooser").classed("padding", false);
                }

                // Onfocus dropdown so it doesn't scroll up beyond top
                document.querySelector("#docking-chooser input").blur();
              }
            }}
          />
        </div>
      </div>
    );
  }
}

module.exports = ChooserDropdown;
