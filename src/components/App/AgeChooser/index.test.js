const React = require('react');
const renderer = require('react-test-renderer');

const AgeChooser = require('.');

describe('AgeChooser', () => {
  test('It renders', () => {
    const component = renderer.create(<AgeChooser />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
