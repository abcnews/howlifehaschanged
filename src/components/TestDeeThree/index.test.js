const React = require('react');
const renderer = require('react-test-renderer');

const TestDeeThree = require('.');

describe('TestDeeThree', () => {
  test('It renders', () => {
    const component = renderer.create(<TestDeeThree />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
