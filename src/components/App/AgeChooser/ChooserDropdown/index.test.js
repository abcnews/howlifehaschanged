const React = require('react');
const renderer = require('react-test-renderer');

const ChooserDropdown = require('.');

describe('ChooserDropdown', () => {
  test('It renders', () => {
    const component = renderer.create(<ChooserDropdown />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
