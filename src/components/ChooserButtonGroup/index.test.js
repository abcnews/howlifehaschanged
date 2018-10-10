const React = require('react');
const renderer = require('react-test-renderer');

const ChooserButtonGroup = require('.');

describe('ChooserButtonGroup', () => {
  test('It renders', () => {
    const component = renderer.create(<ChooserButtonGroup />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
