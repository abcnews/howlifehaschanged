const React = require('react');
const renderer = require('react-test-renderer');

const ChooserButton = require('.');

describe('ChooserButton', () => {
  test('It renders', () => {
    const component = renderer.create(<ChooserButton />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
