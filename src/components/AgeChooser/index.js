const React = require("react");
const styles = require("./styles.scss");
const ReactResizeDetector = require("react-resize-detector").default;

const ChooserButtonGroup = require("../ChooserButtonGroup");
const ChooserDropdown = require("../ChooserDropdown");

const TABLET_PORTRAIT_OR_UP = 600;

class AgeChooser extends React.Component {
  render() {
    // Function passed down from main App
    const { setGeneration, clearGeneration } = this.props;

    return (
      <div className={styles.wrapper}>
        {/* 
          This is just a label for the user
          Maybe think about resizing this on mobile
        */}
        <div className={styles.question}>
          Which generation whould you like to know about?
        </div>

        

        <ReactResizeDetector handleWidth>
          {(width, height) => (
            <div>
              {/*
                Dropdown box generation selector for
                mobile devices that can't display all
                the buttons.
              */}
              {width < TABLET_PORTRAIT_OR_UP && (
                <ChooserDropdown
                  currentGeneration={this.props.currentGeneration}
                  setGeneration={setGeneration}
                  clearGeneration={clearGeneration}
                />
              )}

              {/* 
                If the device isn't mobile
                then show the buttons.
              */}
              {width > TABLET_PORTRAIT_OR_UP && (
                <ChooserButtonGroup
                  currentGeneration={this.props.currentGeneration}
                  setGeneration={setGeneration}
                  clearGeneration={clearGeneration}
                />
              )}
            </div>
          )}
        </ReactResizeDetector>
      </div>
    );
  }
}

module.exports = AgeChooser;
