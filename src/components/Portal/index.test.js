const React = require('react');
const renderer = require('react-test-renderer');

const Portal = require('.');

describe('Portal', () => {
  test('It renders', () => {
    const component = renderer.create(<Portal />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
